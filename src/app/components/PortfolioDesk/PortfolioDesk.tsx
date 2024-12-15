"use client";
import { PRoot } from "./PDesk.styled";
import Image, { StaticImageData } from "next/image";
import { FiveStarIconSM } from "@/app/icons/FiveStarIcon";
import ExternalLinkIcon from "@/app/icons/ExternalLinkIcon";
import computer from "./Images/computer.png";
import {
  IPortfolioProject,
  ProjectUrl,
  Testimonial,
  portfolioProjects,
} from "@/app/projects";
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
      {portfolioProjects.map((i: IPortfolioProject, index) => {
        return (
          <div key={index}>
            {index !== 0 && (
              <div className="divider">
                <div className="circle"></div>
              </div>
            )}
            <div className="project bg-light p-8 w-full flex justify-between">
              <div className="project-left">
                <div className="project-img">
                  {i.images.map((i: string | StaticImageData, index) => {
                    return <Image key={index} src={i} alt="Parsa Morshed" />;
                  })}
                </div>
                <div className="impact">
                  <h4 className="text-2xl text-gray font-bold mt-6 mb-6">
                    Impact in Action
                  </h4>

                  {i.testimonials.map((i: Testimonial, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-lightGreen rounded-xl border-2 border-dark p-4 text-dark mb-5"
                      >
                        <p>{i.text}</p>
                        <div className="flex justify-between items-center mt-4">
                          <div>{FiveStarIconSM()}</div>
                          <div>
                            <p className="text-sm font-semibold text-dark text-right">
                              {i.userName}
                            </p>
                            <p className="text-xs text-lightGray text-right">
                              {i.userDetail}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="project-right">
                <div>
                  <h3 className="text-3xl text-gray font-bold mb-6 mt-5">
                    {i.title}
                  </h3>
                  <p className="text-gray2">{i.description}</p>
                </div>

                <div>
                  {" "}
                  <h4 className="text-2xl text-gray font-bold mb-5">
                    The Tech Stack and Approach
                  </h4>
                  <ul className="list-disc">
                    {i.contribution.map((i: string, index) => {
                      return (
                        <li key={index} className="text-gray mt-1">
                          {i}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  {i.technologies.map((i: string, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-lightGreen2 rounded-full inline-block text-dark py-2 px-5 font-bold mr-2 mt-4"
                      >
                        {i}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <h4 className="text-2xl text-gray font-bold ">
                      Test The Experience Yourself
                    </h4>
                    <ExternalLinkIcon />
                  </div>
                  {i.url.map((i: ProjectUrl, index) => {
                    return (
                      <a
                        key={index}
                        href={i.appUrl}
                        target="_blank"
                        className="bg-dark text-primary font-bold rounded-xl py-5 text-center w-full block text-xl mt-3 hover:text-dark hover:bg-secondary ease-in-out duration-300"
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
    </PRoot>
  );
}