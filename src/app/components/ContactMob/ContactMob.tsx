"use client";
import { TwoCirclesSM } from "@/app/icons/TwoCircles";
import { CMRoot } from "./ContactMob.styled";
import { skills } from "@/app/projects";
import { MailIconDarkSM } from "@/app/icons/MailIcon";

export default function ContactMob() {
  return (
    <CMRoot>
      <div className="flex justify-between header items-center mb-10">
        <div className="block w-full">
          <h1 className="text-2xl font-bold text-light text-center block">
            The Person Behind the Code
          </h1>
          <h2 className="text-lg font-bold text-primary pt-1 text-center block">
            Who I Am and How to Reach Me
          </h2>
        </div>
      </div>
      <div className="contact bg-lightGreen p-6 mt-10">
        <div className="flex justify-between items-center">
          {TwoCirclesSM()} {TwoCirclesSM()}
        </div>
        <div className="py-6">
          <div className="c-left">
            <div className="text-2xl text-dark mb-3 font-bold">
              PARSA MORSHED
            </div>
            <div className="text-sm text-dark mb-5">
              {"I’m"} a Web Developer with over five years of experience
              bringing ideas to life online. I specialize in React and Next.js,
              crafting fast, user-friendly applications that look great and work
              even better. <br /> <br />
              One project {"I’m"} really proud of is the Apeak Series, a
              platform that helps athletes, coaches, and parents with mental
              training tools. Seeing it make a real impact has been incredibly
              rewarding. <br />
              <br /> I love solving problems, collaborating with others, and
              making sure every project is as functional as it is beautiful. If
              you have an idea, {"let’s"} make it happen!
            </div>
          </div>
          <div className="c-right">
            <div className="text-2xl text-dark mb-4 font-bold">
              The Stack That Gets It Done:
            </div>
            <div>
              <div className="text-xl text-dark mb-2 font-bold">FRONTEND</div>
              <div className="mb-8">
                {skills.frontend.map((i: string, index) => {
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
              <div className="text-xl text-dark m2-5 font-bold">DESIGN</div>
              <div>
                {skills.design.map((i: string, index) => {
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
            </div>
          </div>
        </div>
        <div className="info bg-lightGreen4 5 w-full p-6 mt-4 mb-8">
          <div className="flex flex-col justify-between gap-3">
            <div className="text-xl text-dark font-bold">{"Let’s"} Connect</div>
            <div className="text-sm text-dark">
              If {"you’d"} like to chat about your project, the best way to{" "}
              reach me is via email. {"I’d"} love to hear from you!
            </div>
            <div className="email flex gap-2">
              {MailIconDarkSM()}
              <a
                href="mailto:parsawebdev@gmail.com"
                className="text-dark underline"
              >
                parsawebdev@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {TwoCirclesSM()} {TwoCirclesSM()}
        </div>
      </div>
      <div className="text-gray text-sm text-center w-full my-10">
        Ⓒ PARSA MORSHED, 2024-2025. All rights reserved.
      </div>
    </CMRoot>
  );
}
