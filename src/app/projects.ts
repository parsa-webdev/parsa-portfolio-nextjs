import type { StaticImageData } from "next/image";
import apeakImg from "../../src/app/components/PortfolioDesk/Images/apeak.png";

export type ProjectUrl = {
  appName: string;
  appUrl: string;
};

export type Testimonial = {
  userName: string;
  userDetail: string;
  text: string;
};

export type IPortfolioProject = {
  id: number;
  title: string;
  description: string;
  contribution: string[];
  technologies: string[];
  url: ProjectUrl[];
  images: (string | StaticImageData)[]; // Allow strings or imported images
  testimonials: Testimonial[];
};

export const portfolioProjects = [
  {
    id: 1,
    title: "Apeak Series",
    description:
      "The Apeak Series is a suite of platforms designed to enhance mental performance in sports, empowering athletes, coaches, and parents:",
    contribution: [
      "Leveraged Next.js to build robust platforms with optimized server-side rendering and seamless routing, ensuring fast performance and scalability.",
      "Implemented secure authentication workflows using JWT (JSON Web Tokens) for reliable and efficient user management.",
      "Collaborated on design and prototyping in Figma to create responsive, user-centric interfaces, delivering seamless experiences across desktop and mobile devices.",
      "Integrated Stripe for payment processing, including advanced functionality like discount code validation to enhance the user experience.",
    ],
    technologies: [
      "Figma",
      "Tailwind CSS",
      "Styled Components",
      "Next.js",
      "Backend API",
      "Stripe",
    ],

    url: [
      {
        appName: "Apeak Tennis",
        appUrl: "https://apeak.com",
      },
      {
        appName: "SuperiorPerformance",
        appUrl: "https://superiorperformance.app/",
      },
      {
        appName: "SuperiorParent",
        appUrl: "https://superiorperformance.app/",
      },
    ],
    images: [apeakImg],
    testimonials: [
      {
        userName: "Claudia M.",
        userDetail: "Apeak Tennis User",
        text: "Apeak is a tremendous platform to help you drastically improve your  tennis game! I have only used Apeak for a short period of time but I can already tell how it is has helped me. With the visualization training it helps me get in the right mindset before practice and during practice when I start to deal with adversity I remember what I heard from the  visualization I listened to before practice.",
      },
      {
        userName: "Adam S.",
        userDetail: "Apeak Tennis User",
        text: "My son usually underperforms in tournaments. Apeak has taught him  how to compete. By spending just 10 - 20 minutes on Apeak mental  training each day, he has learned how to take pressure off himself  during a match and focus on only the right tasks. The personalized  mental training in Apeak is comprehensive. All the visualization exercises feel real and are super helpful.",
      },
    ],
  },
  {
    id: 2,
    title: "Superior Coach",
    description:
      "The Superior Coach App is a dedicated platform designed to empower sports coaches with tools to manage and enhance player performance. Built using Next.js, the app focuses on seamless communication, detailed progress tracking, and player engagement.",
    contribution: [
      "<b>Prototyping & Design:</b> Collaborated on the app’s design process, creating wireframes and prototypes to ensure a seamless user flow. Used Figma to build consistent UI components, maintaining a modern, engaging design language throughout.",
      "Player Management: Developed secure login/signup workflows with JWT authentication and features for inviting players, including status tracking, and the ability to resend or delete invitations.",
      "Real-Time Communication: Integrated chat functionality with instant notifications for new messages, enhancing communication between coaches and players.",
      "Progress Tracking: Implemented dynamic charts to track players' goals and performance over time, providing coaches with data-driven insights for better decision-making.",
      "Feedback and Scheduling: Developed tools for sending personalized feedback and scheduling meetings, fostering effective collaboration and mentorship.",
    ],
    technologies: ["Figma", "Material UI", "React", "Backend API", "Live Chat"],

    url: [
      {
        appName: "SuperiorCoach",
        appUrl: "https://coach.apeak.com/",
      },
    ],
    images: [apeakImg],
    testimonials: [
      {
        userName: "Coach Michael R.",
        userDetail: "Superior Coach User",
        text: "The app has been a huge help in my day-to-day coaching. Managing players is so much easier now, especially with the ability to track progress and send invites quickly. I love how I can stay in touch with the team through the chat feature, and the performance charts really help me make smarter coaching decisions. It's made scheduling and giving feedback a breeze. Honestly, it’s made my life as a coach much simpler and more efficient.",
      },
    ],
  },
  {
    id: 3,
    title: "Apeak Resources",
    description:
      "Apeak Resources is a centralized platform offering tailored mental training materials to help athletes improve their performance and resilience. Designed and developed using Next.js, it combines usability with functionality to deliver an engaging experience for users seeking to expand their mental training knowledge.",
    contribution: [
      "Dynamic Resource Library: Implemented advanced filtering, search functionality, and pagination to help users easily find and explore educational videos, articles, and tools.",
      "Interactive User Experience: Built React components to display rich content dynamically, ensuring users could interact with the material effortlessly.",
      "Performance Optimization: Applied optimization techniques to ensure fast load times and smooth interactions, even with large volumes of resources.",
      "Accessibility Standards: Ensured compliance with web accessibility standards, making the platform inclusive for all users.",
    ],
    technologies: ["Figma", "Material UI", "React", "Backend API", "Live Chat"],

    url: [
      {
        appName: "Apeak Resources",
        appUrl: "https://apeak.com/resources",
      },
    ],
    images: [apeakImg],
    testimonials: [
      {
        userName: "Jordan L.",
        userDetail: "Apeak Tennis User",
        text: "Apeak Resources has been a game-changer for me in improving my skills. The blog consistently provides practical, actionable insights. Whether I’m picking up new techniques or refining my existing knowledge, the content is always relevant and well-organized. I’ve seen noticeable improvements in my understanding of key concepts. It’s quickly become one of my go-to resources to stay up-to-date and sharpen my skills.",
      },
    ],
  },
];
