"use client";
import Header from "@/app/components/Header/Header";
import Head from "next/head";

const features = [
  {
    title: "Modular Component-Based Architecture",
    description:
      "Broke down the application into reusable components, ensuring clean and isolated code. Consistent naming conventions were used across files for readability.",
  },
  {
    title: "Efficient Styling",
    description:
      "Used Tailwind CSS for rapid styling and implemented variables for consistency in colors and spacing. Minimal Styled Components were used for edge cases.",
  },
  {
    title: "Optimized Media Management",
    description:
      "Stored images in the public folder with priority settings for fast loading without compromising quality. All icons are SVGs for easy management.",
  },
  {
    title: "Dynamic Project Section",
    description:
      "Used a TypeScript-based data array to display projects dynamically via a reusable Card component.",
  },
  {
    title: "Performance and SEO Enhancements",
    description:
      "Implemented meta tags for SEO optimization and link preview meta tags for better sharing across platforms.",
  },
];

export default function CodeCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study: Next.js Portfolio</title>
        <meta
          name="description"
          content="Case Study for Next.js Portfolio Project"
        />
      </Head>
      <div className="bg-dark">
        <Header />
        <main className="px-4 py-10 md:px-12 lg:px-20 bg-dark text-light">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
              Case Study: Next.js Portfolio Project
            </h1>
            <p className="text-md text-lightGreen3 mb-10 text-center">
              This project showcases my development expertise with a focus on
              clean code, responsive design, and optimal performance using
              modern tools like Next.js, TypeScript, Tailwind CSS and
              Styled-Components.
            </p>
            <div className="text-center mt-10 mb-20">
              <a
                className="p-3 text-center text-primary border-2 font-medium border-primary rounded-xl hover:text-secondary hover:border-secondary  ease-in-out duration-300"
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
                Results
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lightGreen">
                <li>
                  Fast Performance: Optimized media and Next.js features ensure
                  quick load times.
                </li>
                <li>
                  Scalable Codebase: Modular architecture makes it easy to
                  update and expand.
                </li>
                <li>
                  User-Friendly UX: Responsive design ensures excellent
                  navigation across devices.
                </li>
                <li>
                  SEO-Ready: Meta tags and link previews improve
                  discoverability.
                </li>
              </ul>
            </section>
            <section className="mt-10 pb-10">
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Tech Stack
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lightGreen">
                <li>Framework: Next.js</li>
                <li>Styling: Tailwind CSS, Styled Components</li>
                <li>Language: TypeScript</li>
                <li>Design: Mobile-first responsive layout</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
