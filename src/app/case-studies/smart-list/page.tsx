"use client";

import Header from "@/app/components/Header/Header";
import Head from "next/head";

const features = [
  {
    title: "Effortless Infinite Scrolling",
    description:
      "I built the app to handle large datasets smoothly by loading only the data visible on the screen. This keeps the scrolling experience fast and responsive, even with thousands of rows. As users scroll, additional data loads seamlessly, ensuring consistent performance.",
  },
  {
    title: "Search Made Simple",
    description:
      "The app includes a search bar that filters results dynamically as you type. I designed the backend to handle the filtering efficiently, ensuring the app remains quick and responsive, even with complex queries.",
  },
  {
    title: "Smart Backend Caching",
    description:
      "To deal with the large CSV file, I implemented a caching system. After the data is loaded the first time, it’s stored in memory. This eliminates the need to reload the file repeatedly and makes subsequent requests lightning-fast.",
  },
  {
    title: "Visual Star Ratings",
    description:
      "I added a star rating system to make the data more visually engaging. Ratings are displayed using clear, intuitive icons, and fractional ratings are represented with half-filled stars for better clarity.",
  },
];

const challengesAndSolutions = [
  {
    challenge: "Handling large datasets efficiently",
    solution:
      "Rendering all rows at once was slowing things down. I implemented virtualization to display only the rows visible on the screen, reducing memory usage and keeping performance smooth.",
  },
  {
    challenge: "Making searches quick and efficient",
    solution:
      "Filtering large datasets on the client side was slow. I shifted the filtering to the backend, which made searches faster and reduced the load on the browser.",
  },
  {
    challenge: "Processing a large CSV file",
    solution:
      "Repeatedly loading the CSV file was causing delays. I addressed this by parsing the file once and caching the data in memory, ensuring subsequent requests were much faster.",
  },
  {
    challenge: "Dealing with potential errors",
    solution:
      "Network issues or bad data could cause problems, so I added error handling throughout the code. This ensures the app can handle unexpected issues without breaking.",
  },
];

export default function SmartListCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study: Scalable, Queryable Data Table</title>
        <meta
          name="description"
          content="Case Study for Implementing a Scalable, Queryable Data Table with Infinite Scrolling"
        />
      </Head>
      <div className="bg-dark">
        <Header />
        <main className="px-4 py-10 md:px-12 lg:px-20 bg-dark text-light">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
              Case Study: Scalable, Queryable Data Table
            </h1>
            <p className="text-md text-lightGreen3 mb-5 text-center">
              I wanted to create a table that handles massive datasets, works
              efficiently, and delivers a great user experience. Here’s how I
              tackled the challenge.
            </p>
            <p className="text-sm text-lightGreen mt-4 text-center">
              Key implementation files can be found in the following
              directories:
            </p>
            <ul className="text-sm text-lightGreen list-disc list-inside mt-2 text-center">
              <li>
                <strong>API Route:</strong> <code>app/api/data/route.ts</code>
              </li>
              <li>
                <strong>Page Component:</strong>{" "}
                <code>app/smart-list/page.tsx</code>
              </li>
            </ul>
            <div className="text-center mt-10 mb-20">
              <a
                className="p-3 text-center text-primary border-2 font-medium border-primary rounded-xl hover:text-secondary hover:border-secondary ease-in-out duration-300"
                href="https://github.com/parsa-webdev/parsa-portfolio-nextjs"
                target="_blank"
              >
                Read the Code
              </a>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-lightGreen3 shadow-md rounded-lg p-6 border border-gray"
                  >
                    <h3 className="text-xl font-semibold text-gray2 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lightGray">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Challenges and Solutions
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lightGreen">
                {challengesAndSolutions.map((item, index) => (
                  <li key={index}>
                    <strong>{item.challenge}:</strong> {item.solution}
                  </li>
                ))}
              </ul>
            </section>
            <section className="mt-10 pb-10">
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Tech Stack
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lightGreen">
                <li>Framework: Next.js</li>
                <li>Styling: Tailwind CSS</li>
                <li>Language: TypeScript</li>
                <li>Data Handling: Server-side CSV processing with caching</li>
                <li>Design: Minimal, focused layout</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
