"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";

interface DataRow {
  ID: string;
  Organization: string;
  Rating: string;
  [key: string]: string;
}

const ITEM_HEIGHT = 50;
const VISIBLE_COUNT = 100;
const BUFFER_COUNT = 20;

export default function SmartListPage() {
  const [data, setData] = useState<DataRow[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchData = async (offset = 0) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/data?query=${query}&offset=${offset}`);
      const newData = await res.json();
      setData((prevData) => [...prevData, ...newData]);
    } catch (err) {
      console.log("Error fetching data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData([]);
    fetchData(0);
  }, [query]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollHeight, clientHeight, scrollTop } = containerRef.current;

    setScrollTop(scrollTop);
    if (scrollHeight - scrollTop - clientHeight < ITEM_HEIGHT * BUFFER_COUNT) {
      fetchData(data.length);
    }
  };

  const startIndex = Math.max(
    Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_COUNT,
    0
  );
  const endIndex = Math.min(
    startIndex + VISIBLE_COUNT + BUFFER_COUNT * 2,
    data.length
  );
  const topPadding = startIndex * ITEM_HEIGHT;
  const bottomPadding = Math.max(0, (data.length - endIndex) * ITEM_HEIGHT);

  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          {[...Array(fullStars)].map((_, i) => (
            <svg
              key={`full-${i}`}
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.435L24 9.254l-6 5.847 1.416 8.267L12 18.896l-7.416 3.922L6 15.101 0 9.254l8.332-1.232L12 .587z" />
            </svg>
          ))}
          {halfStar > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-secondary"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="halfStarGradient">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="lightgray" />
                </linearGradient>
              </defs>
              <path
                d="M12 .587l3.668 7.435L24 9.254l-6 5.847 1.416 8.267L12 18.896l-7.416 3.922L6 15.101 0 9.254l8.332-1.232L12 .587z"
                fill="url(#halfStarGradient)"
              />
            </svg>
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <svg
              key={`empty-${i}`}
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.435L24 9.254l-6 5.847 1.416 8.267L12 18.896l-7.416 3.922L6 15.101 0 9.254l8.332-1.232L12 .587z" />
            </svg>
          ))}
        </div>
        <span className="text-light text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <div className="flex items-center justify-center mb-12">
        <div className="w-full max-w-6xl px-4 sm:px-8">
          <h1 className="text-primary text-center text-3xl font-bold mb-6">
            Smart List Table
          </h1>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full mb-4 p-3 bg-gray2 text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="h-[500px] overflow-y-auto bg-gray rounded-lg border border-gray2 relative"
          >
            <table className="w-full text-left table-auto">
              <thead className="sticky top-0 bg-gray2 text-light uppercase text-sm">
                <tr>
                  <th className="px-4 py-2 w-[5%]">#</th>
                  <th className="px-4 py-2 w-[70%] truncate">Organization</th>
                  <th className="px-4 py-2 w-[25%]">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: `${topPadding}px` }} />
                {data.slice(startIndex, endIndex).map((item, idx) => (
                  <tr
                    key={`${item.ID}-${startIndex + idx}`}
                    className="border-b border-gray2"
                  >
                    <td className="px-4 py-2">{startIndex + idx + 1}</td>
                    <td className="px-4 py-2 truncate">
                      <span
                        className="block overflow-hidden text-ellipsis whitespace-nowrap"
                        title={item.Organization}
                      >
                        {item.Organization}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <StarRating rating={parseFloat(item.Rating)} />
                    </td>
                  </tr>
                ))}
                <tr style={{ height: `${bottomPadding}px` }} />
              </tbody>
            </table>
            {loading && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-secondary text-sm">
                Loading reviews...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
