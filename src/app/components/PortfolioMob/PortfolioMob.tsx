"use client";
import { PMRoot } from "./PMob.styled";
import Image from "next/image";
import { FiveStarIconSM } from "@/app/icons/FiveStarIcon";
import ExternalLinkIcon from "@/app/icons/ExternalLinkIcon";
import toggleImg from "./Images/switch.png";
import { useState } from "react";
import {
  IPortfolioProject,
  ProjectUrl,
  Testimonial,
  portfolioProjects,
} from "@/app/projects";
export default function PortfolioMob() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id); // Toggle or collapse
  };
  return (
    <PMRoot id="projects-section-mob">
      <div className="flex justify-between header items-center mb-10 mt-10">
        <div className="block w-full">
          <h1 className="text-2xl font-bold text-light text-center block">
            Real-World Impact
          </h1>
          <h2 className="text-lg font-bold text-primary pt-1 text-center block">
            Projects for Leading Clients:
          </h2>
        </div>
      </div>
      {portfolioProjects.map((project: IPortfolioProject, index) => {
        return (
          <div key={index}>
            {index !== 0 && (
              <div className="divider">
                <div className="circle"></div>
              </div>
            )}
            <div className="project bg-light p-4 flex flex-col">
              <div className="project-top">
                <div className="project-img mb-4">
                  <Image
                    key={index}
                    src={project.image}
                    alt="Parsa Morshed"
                    width={300}
                    height={100}
                    priority={index === 0}
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-3 gap-2">
                    {" "}
                    <h3 className="text-xl text-gray font-bold ">
                      {project.title}
                    </h3>
                    {activeId === project.id ? (
                      <div>
                        <Image
                          src={toggleImg}
                          alt="Apeak Series"
                          className="toggle"
                          onClick={() => handleToggle(project.id)}
                        />
                      </div>
                    ) : (
                      <div className="rotate-180">
                        <Image
                          src={toggleImg}
                          alt="Apeak Series"
                          className="toggle"
                          onClick={() => handleToggle(project.id)}
                        />
                      </div>
                    )}
                    <p className="text-gray2 text-xs"> {"Details"}</p>
                  </div>
                  <p className="text-gray2 text-sm">{project.description}</p>
                </div>

                {activeId === project.id && (
                  <>
                    {" "}
                    <div className="p-3">
                      {" "}
                      <h4 className="text-xl text-gray font-bold mb-3">
                        The Tech Stack and Approach
                      </h4>
                      <ul className="list-disc">
                        {project.contribution.map((i: string, index) => {
                          return (
                            <li key={index} className="text-gray mt-1 text-sm">
                              {i}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="p-3">
                      {project.technologies.map((i: string, index) => {
                        return (
                          <div
                            key={index}
                            className="text-xs bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4"
                          >
                            {i}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              <div className="project-bottom p-3">
                {activeId === project.id && (
                  <>
                    <div className="impact mb-8">
                      <h4 className="text-lg text-gray font-bold mt-3 mb-3">
                        Impact in Action
                      </h4>

                      {project.testimonials.map((i: Testimonial, index) => {
                        return (
                          <div
                            key={index}
                            className={`bg-lightGreen rounded-xl border-2 border-dark p-4 text-dark mb-5`}
                          >
                            <p className="text-sm">
                              Apeak is a tremendous platform to help you
                              drastically improve your tennis game! I have only
                              used Apeak for a short period of time but I can
                              already tell how it is has helped me. With the
                              visualization training it helps me get in the
                              right mindset before practice and during practice
                              when I start to deal with adversity I remember
                              what I heard from the visualization I listened to
                              before practice.
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
                        );
                      })}
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
                  {project.url.map((i: ProjectUrl, index) => {
                    return (
                      <a
                        key={index}
                        href={i.appUrl}
                        target="_blank"
                        className="bg-dark text-primary font-bold rounded-xl py-3 text-center  block text-sm mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
                      >
                        {i.appName}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </PMRoot>
  );
}
