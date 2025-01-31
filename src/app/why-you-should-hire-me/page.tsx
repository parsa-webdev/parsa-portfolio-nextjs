"use client";
import Header from "@/app/components/Header/Header";
import Head from "next/head";

const reasons = [
  {
    title: "Proven Expertise in Next.js & React",
    description:
      "With over 5 years of experience, I've built high-performance, scalable applications using Next.js, React, and TypeScript. My work has directly contributed to business growth and seamless user experiences.",
  },
  {
    title: "Strong Problem-Solving Skills",
    description:
      "I thrive in tackling complex frontend challenges, optimizing performance, and ensuring smooth UI interactions. I write clean, maintainable code that enhances application longevity.",
  },
  {
    title: "UI/UX Design & Figma Expertise",
    description:
      "I have strong experience in UI/UX design fundamentals and Figma, ensuring that my frontend development aligns with intuitive and visually appealing user interfaces. My designs prioritize usability, accessibility, and seamless user interactions.",
  },
  {
    title: "Proactive & Collaborative Team Player",
    description:
      "Beyond coding, I take initiative in QA, mentorship, and investor meetings. I foster a strong team culture and ensure high development standards.",
  },
  {
    title: "Strong Work Ethic & Dedication",
    description:
      "I've consistently delivered high-quality projects while working remotely for a Seattle-based company for 4 years. My commitment to excellence makes me a valuable long-term asset.",
  },
  {
    title: "Fluency in English & Top-Notch Communication",
    description:
      "I have excellent verbal and written communication skills, making collaboration seamless across teams and stakeholders. I can effectively convey ideas, provide clear documentation, and engage in productive discussions to drive projects forward.",
  },
];

export default function WhyHireMe() {
  return (
    <>
      <Head>
        <title>
          Why Hire Me | Parsa Morshed - Frontend Developer & UI/UX Specialist
        </title>
        <meta
          name="description"
          content="Why you should hire Parsa Morshed - A highly skilled Frontend Developer & UI/UX Specialist with a proven track record in building impactful web experiences."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Why Hire Me | Parsa Morshed - Frontend Developer & UI/UX Specialist"
        />
        <meta
          property="og:description"
          content="Why you should hire Parsa Morshed - A highly skilled Frontend Developer & UI/UX Specialist with a proven track record in building impactful web experiences."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Why Hire Me | Parsa Morshed - Frontend Developer & UI/UX Specialist"
        />
        <meta
          property="twitter:description"
          content="Why you should hire Parsa Morshed - A highly skilled Frontend Developer & UI/UX Specialist with a proven track record in building impactful web experiences."
        />
        <meta property="twitter:image" content="/preview.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://devparsa.com/why-hire-me" />
      </Head>
      <div className="bg-dark">
        <Header />
        <main className="px-4 py-10 md:px-12 lg:px-20 bg-dark text-light">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">
              Why You Should Hire Me
            </h1>
            <p className="text-md text-lightGreen3 mb-10 text-center">
              I bring experience, technical expertise, and a strong work ethic
              to every project I take on. {"Here's"} why {"I'd"} be a great
              addition to your team.
            </p>
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Key Reasons
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="bg-lightGreen3 shadow-md rounded-lg p-6 border border-gray"
                  >
                    <h3 className="text-xl font-semibold text-gray2 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-lightGray">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Tech Stack & Skills
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lightGreen">
                <li>Framework: Next.js, React</li>
                <li>Styling: Tailwind CSS, Styled Components</li>
                <li>State Management: Context API, Redux</li>
                <li>Performance Optimization: SSR, SSG, Lazy Loading</li>
                <li>Testing: Jest, React Testing Library</li>
                <li>Collaboration: Agile, Git, CI/CD</li>
              </ul>
            </section>
            <section className="mt-10 pb-10">
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-lightGreen mb-6">
                {"I'm"} excited to contribute to a forward-thinking team.{" "}
                {"Let's"}
                connect and discuss how I can add value to your projects.
              </p>
              <div className="text-center mt-6">
                <a
                  className="p-3 text-primary border-2 font-medium border-primary rounded-xl hover:text-secondary hover:border-secondary ease-in-out duration-300"
                  href="mailto:parsawebdev@gmail.com"
                >
                  Contact Me
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
