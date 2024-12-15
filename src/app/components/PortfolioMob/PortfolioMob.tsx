"use client";
import { PMRoot } from "./PMob.styled";
import Image from "next/image";
import { FiveStarIconSM } from "@/app/icons/FiveStarIcon";
import ExternalLinkIcon from "@/app/icons/ExternalLinkIcon";
import toggleImg from "./Images/switch.png";
import apeak from "../PortfolioDesk/Images/apeak.png";
import { useState } from "react";
export default function PortfolioMob() {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <PMRoot>
      <div className="flex justify-between header items-center mb-10">
        <div className="block w-full">
          <h1 className="text-2xl font-bold text-light text-center block">
            Real-World Impact
          </h1>
          <h2 className="text-lg font-bold text-primary pt-1 text-center block">
            Projects for Leading Clients:
          </h2>
        </div>
      </div>
      <div className="project bg-light p-4 flex flex-col">
        <div className="project-top">
          <div className="project-img mb-4">
            <Image src={apeak} alt="Apeak Series" />
          </div>
          <div className="p-3">
            <div className="flex items-center mb-3 gap-2">
              {" "}
              <h3 className="text-xl text-gray font-bold ">Apeak Series</h3>
              {toggle ? (
                <div>
                  <Image
                    src={toggleImg}
                    alt="Apeak Series"
                    className="toggle"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
              ) : (
                <div className="rotate-180">
                  <Image
                    src={toggleImg}
                    alt="Apeak Series"
                    className="toggle"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
              )}
              <p className="text-gray2 text-xs"> {"Details"}</p>
            </div>
            <p className="text-gray2 text-sm">
              The Apeak Series is a suite of platforms designed to enhance
              mental performance in sports, empowering athletes, coaches, and
              parents:
            </p>
          </div>

          {toggle && (
            <>
              {" "}
              <div className="p-3">
                {" "}
                <h4 className="text-xl text-gray font-bold mb-3">
                  The Tech Stack and Approach
                </h4>
                <ul className="list-disc">
                  <li className="text-gray mt-1 text-sm">
                    Leveraged Next.js to build robust platforms with optimized
                    server-side rendering and seamless routing, ensuring fast
                    performance and scalability.
                  </li>
                  <li className="text-gray mt-1 text-sm">
                    Implemented secure authentication workflows using JWT (JSON
                    Web Tokens) for reliable and efficient user management.
                  </li>
                  <li className="text-gray mt-1 text-sm">
                    Collaborated on design and prototyping in Figma to create
                    responsive, user-centric interfaces, delivering seamless
                    experiences across desktop and mobile devices.
                  </li>
                  <li className="text-gray mt-1 text-sm">
                    Integrated Stripe for payment processing, including advanced
                    functionality like discount code validation to enhance the
                    user experience.
                  </li>
                  <li className="text-gray  text-sm">
                    Conducted rigorous QA testing to ensure high-quality
                    releases, meeting industry standards for accessibility,
                    performance, and cross-browser compatibility.
                  </li>
                </ul>
              </div>
              <div className="p-3">
                <div className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
                  Figma
                </div>{" "}
                <div className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
                  Tailwind CSS
                </div>
                <div className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
                  React
                </div>
                <div className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
                  Next.js
                </div>
                <div className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
                  Backend API
                </div>
                <div className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4">
                  Stripe
                </div>
              </div>
            </>
          )}
        </div>
        <div className="project-bottom p-3">
          {toggle && (
            <>
              <div className="impact mb-8">
                <h4 className="text-lg text-gray font-bold mt-3 mb-3">
                  Impact in Action
                </h4>

                <div className="bg-lightGreen rounded-xl border-2 border-dark p-4 text-dark mb-5">
                  <p className="text-sm">
                    Apeak is a tremendous platform to help you drastically
                    improve your tennis game! I have only used Apeak for a short
                    period of time but I can already tell how it is has helped
                    me. With the visualization training it helps me get in the
                    right mindset before practice and during practice when I
                    start to deal with adversity I remember what I heard from
                    the visualization I listened to before practice.
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
                  <p className="text-sm">
                    My son usually underperforms in tournaments. Apeak has
                    taught him how to compete. By spending just 10 - 20 minutes
                    on Apeak mental training each day, he has learned how to
                    take pressure off himself during a match and focus on only
                    the right tasks. The personalized mental training in Apeak
                    is comprehensive. All the visualization exercises feel real
                    and are super helpful.
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
            </>
          )}

          <div>
            <div className="flex items-center gap-2 ">
              <h4 className="text-md text-gray font-bold ">
                Test The Experience Yourself
              </h4>
              <ExternalLinkIcon />
            </div>
            <a
              href="https://apeak.com"
              target="_blank"
              className="bg-dark text-primary font-bold rounded-xl py-3 text-center  block text-sm mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
            >
              Apeak Tennis
            </a>
            <a
              href="https://superiorperformance.app/"
              target="_blank"
              className="bg-dark text-primary font-bold rounded-xl py-3 text-center  block text-sm mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
            >
              SuperiorPerformance
            </a>
            <a
              href="https://superiorparent.ai/"
              target="_blank"
              className="bg-dark text-primary font-bold rounded-xl py-3 text-center  block text-sm mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
            >
              SuperiorParent
            </a>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="circle"></div>
      </div>
    </PMRoot>
  );
}
