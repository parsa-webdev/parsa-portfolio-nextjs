import fs from "fs";
import path from "path";
import zlib from "zlib";
import csv from "csv-parser";
import { NextRequest, NextResponse } from "next/server";

interface DataRow {
  ID: string;
  Organization: string;
  Rating: string;
  [key: string]: string;
}

let cachedData: DataRow[] | null = null;
let isLoading = false;

async function loadCSVData(): Promise<DataRow[]> {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "compressed_data.csv.gz"
  );
  const rows: DataRow[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(zlib.createGunzip())
      .pipe(csv())
      .on("data", (row: Record<string, string>, index: number) => {
        const typedRow: DataRow = {
          ID: row.ID || `generated-${index}`,
          Organization: row.Organization || "Unknown Organization",
          Rating: row.Rating || "0",
          ...row,
        };
        rows.push(typedRow);
      })
      .on("end", () => resolve(rows))
      .on("error", (err) => reject(err));
  });
}

async function ensureCachedData(): Promise<DataRow[]> {
  if (!cachedData) {
    if (isLoading) {
      while (isLoading) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    } else {
      isLoading = true;
      try {
        cachedData = await loadCSVData();
      } catch (err) {
        console.error("Error loading CSV data:", err);
        throw new Error("Failed to load CSV data");
      } finally {
        isLoading = false;
      }
    }
  }

  return cachedData || [];
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await ensureCachedData();

    const query =
      request.nextUrl.searchParams.get("query")?.toLowerCase() || "";
    const offset = parseInt(
      request.nextUrl.searchParams.get("offset") || "0",
      10
    );
    const limit = 100;

    console.log("Received query:", query);
    const filtered = data.filter((row) =>
      row.Organization.toLowerCase().includes(query)
    );
    console.log("Filtered results:", filtered.length);

    const paginated = filtered.slice(offset, offset + limit);

    return NextResponse.json(paginated);
  } catch (err) {
    console.error("Error handling GET request:", err);
    return NextResponse.json(
      { error: "Failed to process data" },
      { status: 500 }
    );
  }
}
