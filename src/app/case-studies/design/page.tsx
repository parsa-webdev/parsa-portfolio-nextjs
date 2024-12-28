"use client";
import Header from "@/app/components/Header/Header";
import Head from "next/head";

const designFeatures = [
  {
    title: "Modern Dark Theme",
    description:
      "Implemented a smooth, neutral dark background to reduce eye strain, complemented by vibrant primary and secondary colors for contrast and visual appeal.",
  },
  {
    title: "Centered Layout Design",
    description:
      "Used a centered layout ensuring responsiveness and visual balance with consistent spacing and alignment across the design.",
  },
  {
    title: "Hero Section",
    description:
      "Applied a content-on-left, image-on-right layout with a clear visual hierarchy to naturally guide users to the call-to-action.",
  },
  {
    title: "Projects Section",
    description:
      "Designed a two-column layout with image previews and testimonials on the left, and detailed text and button links on the right.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "Optimized styling for mobile devices, maintaining consistent aesthetics and blending seamlessly with smaller screen sizes.",
  },
];

export default function DesignCaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study: Modern Portfolio Design</title>
        <meta
          name="description"
          content="Case Study for Modern, Responsive Portfolio Design"
        />
      </Head>
      <div className="bg-dark">
        <Header />
        <main className="px-4 py-10 md:px-12 lg:px-20 bg-dark text-light">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
              Case Study: Modern, Responsive Portfolio Design
            </h1>
            <p className="text-md text-lightGreen3 mb-6 text-center">
              This portfolio design showcases a modern aesthetic with a focus on
              usability, responsiveness, and accessibility across all devices.
              It highlights my expertise in creating user-friendly and visually
              engaging layouts.
            </p>
            <div className="text-center mt-10 mb-20">
              <a
                className="p-3 text-center text-primary border-2 font-medium border-primary rounded-xl hover:text-secondary hover:border-secondary  ease-in-out duration-300"
                href="https://www.figma.com/design/WKfW6XwfZhESEqHJiXwzAc/Parsa-Morshed---Portfolio-Design?node-id=0-1&t=mlf81UxwwhlXL11U-1"
                target="_blank"
              >
                View the Design
              </a>
            </div>
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {designFeatures.map((feature, index) => (
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
                  Eye-Catching Aesthetic: Vibrant accents paired with a dark
                  theme for a professional look.
                </li>
                <li>
                  Seamless Responsiveness: Consistent design across desktop and
                  mobile devices.
                </li>
                <li>
                  User-Centered Experience: Strategic alignment and spacing for
                  easy navigation.
                </li>
                <li>
                  Scalable Design: Reusable components ensure future
                  adaptability.
                </li>
              </ul>
            </section>
            <section className="mt-10 pb-10">
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Tools & Techniques
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lightGreen">
                <li>Design Tool: Figma</li>
                <li>Color Choices: Modern dark theme with vibrant accents</li>
                <li>Layout: Centered and mobile-responsive</li>
                <li>
                  Visual Hierarchy: Effective spacing, contrast, and alignment
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
