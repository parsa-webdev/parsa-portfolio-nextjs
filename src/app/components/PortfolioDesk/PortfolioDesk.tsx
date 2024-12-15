"use client";
import { PRoot } from "./PDesk.styled";
import Image from "next/image";
import { FiveStarIconSM } from "@/app/icons/FiveStarIcon";
import ExternalLinkIcon from "@/app/icons/ExternalLinkIcon";
import computer from "./Images/computer.png";
import apeak from "./Images/apeak.png";
export default function PortfolioDesk() {
  return (
    <PRoot>
      <div className="flex justify-between header w-full items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-light">Real-World Impact</h1>
          <h2 className="text-xl font-bold text-primary pt-1">
            Projects for Leading Clients:
          </h2>
        </div>
        <div className="computer">
          <Image src={computer} alt="" />
        </div>
      </div>
      <div className="project bg-light p-8 w-full flex justify-between">
        <div className="project-left">
          <div className="project-img">
            <Image src={apeak} alt="Apeak Series" />
          </div>
          <div className="impact">
            <h4 className="text-2xl text-gray font-bold mt-6 mb-6">
              Impact in Action
            </h4>

            <div className="bg-lightGreen rounded-xl border-2 border-dark p-4 text-dark mb-5">
              <p>
                Apeak is a tremendous platform to help you drastically improve
                your tennis game! I have only used Apeak for a short period of
                time but I can already tell how it is has helped me. With the
                visualization training it helps me get in the right mindset
                before practice and during practice when I start to deal with
                adversity I remember what I heard from the visualization I
                listened to before practice.
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>{FiveStarIconSM()}</div>
                <div>
                  <p className="text-sm font-semibold text-dark text-right">
                    Claudia M.
                  </p>
                  <p className="text-xs text-lightGray text-right">
                    Apeak Tennis User
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-lightGreen rounded-xl border-2 border-dark p-4 text-dark ">
              <p>
                My son usually underperforms in tournaments. Apeak has taught
                him how to compete. By spending just 10 - 20 minutes on Apeak
                mental training each day, he has learned how to take pressure
                off himself during a match and focus on only the right tasks.
                The personalized mental training in Apeak is comprehensive. All
                the visualization exercises feel real and are super helpful.
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>{FiveStarIconSM()}</div>
                <div>
                  <p className="text-sm font-semibold text-dark text-right">
                    Adam S.
                  </p>
                  <p className="text-xs text-lightGray text-right">
                    Apeak Tennis User
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-right">
          <div>
            <h3 className="text-3xl text-gray font-bold mb-6 mt-5">
              Apeak Series
            </h3>
            <p className="text-gray2">
              The Apeak Series is a suite of platforms designed to enhance
              mental performance in sports, empowering athletes, coaches, and
              parents:
            </p>
          </div>

          <div>
            {" "}
            <h4 className="text-2xl text-gray font-bold mb-5">
              The Tech Stack and Approach
            </h4>
            <ul className="list-disc">
              <li className="text-gray mt-1">
                Leveraged Next.js to build robust platforms with optimized
                server-side rendering and seamless routing, ensuring fast
                performance and scalability.
              </li>
              <li className="text-gray mt-1">
                Implemented secure authentication workflows using JWT (JSON Web
                Tokens) for reliable and efficient user management.
              </li>
              <li className="text-gray mt-1">
                Collaborated on design and prototyping in Figma to create
                responsive, user-centric interfaces, delivering seamless
                experiences across desktop and mobile devices.
              </li>
              <li className="text-gray mt-1">
                Integrated Stripe for payment processing, including advanced
                functionality like discount code validation to enhance the user
                experience.
              </li>
              <li className="text-gray mt-1">
                Conducted rigorous QA testing to ensure high-quality releases,
                meeting industry standards for accessibility, performance, and
                cross-browser compatibility.
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              Figma
            </div>{" "}
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              Tailwind CSS
            </div>
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              Styled Components
            </div>
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              React
            </div>
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              Next.js
            </div>
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              Backend API
            </div>
            <div className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
              Stripe
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mt-4">
              <h4 className="text-2xl text-gray font-bold ">
                Test The Experience Yourself
              </h4>
              <ExternalLinkIcon />
            </div>
            <a
              href="https://apeak.com"
              target="_blank"
              className="bg-dark text-primary font-bold rounded-xl py-5 text-center w-full block text-xl mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
            >
              Apeak Tennis
            </a>
            <a
              href="https://superiorperformance.app/"
              target="_blank"
              className="bg-dark text-primary font-bold rounded-xl py-5 text-center w-full block text-xl mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
            >
              SuperiorPerformance
            </a>
            <a
              href="https://superiorparent.ai/"
              target="_blank"
              className="bg-dark text-primary font-bold rounded-xl py-5 text-center w-full block text-xl mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
            >
              SuperiorParent
            </a>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="circle"></div>
      </div>
    </PRoot>
  );
}
