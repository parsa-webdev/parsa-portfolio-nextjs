"use client";
import TwoCircles from "@/app/icons/TwoCircles";
import { CRoot } from "./ContactDesk.styled";
import { skills } from "@/app/projects";
import { MailIconDark, MailIconStyled } from "@/app/icons/MailIcon";

export default function ContactDesk() {
  return (
    <CRoot>
      <div>
        <h1 className="text-4xl font-bold text-light">
          The Person Behind the Code
        </h1>
        <h2 className="text-xl font-bold text-primary pt-1">
          Who I Am and How to Reach Me
        </h2>
      </div>
      <div className="contact bg-lightGreen p-8 mt-10">
        <div className="flex justify-between items-center">
          <TwoCircles /> <TwoCircles />
        </div>
        <div className="flex justify-between items-center py-10">
          <div className="c-left">
            <div className="text-3xl text-dark mb-3 font-bold">
              PARSA MORSHED
            </div>
            <div className="text-xl text-dark mb-3 ">
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
            <div className="text-3xl text-dark mb-8 font-bold">
              The Stack That Gets It Done:
            </div>
            <div>
              <div className="text-xl text-dark mb-2 font-bold">FRONTEND</div>
              <div className="mb-8">
                {skills.frontend.map((i: string, index) => {
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
              <div className="text-xl text-dark m2-5 font-bold">DESIGN</div>
              <div>
                {skills.design.map((i: string, index) => {
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
            </div>
          </div>
        </div>
        <div className="info bg-lightGreen4 p-10 w-full flex justify-between mb-10 mt-6">
          <div className="flex flex-col justify-between">
            <div className="text-4xl text-dark font-bold">
              {"Let’s"} Connect
            </div>
            <div className="text-xl text-dark">
              If {"you’d"} like to chat about your project, the best way to{" "}
              <br />
              reach me is via email. {"I’d"} love to hear from you!
            </div>
            <div className="email flex gap-2">
              {MailIconDark()}
              <a
                href="mailto:parsawebdev@gmail.com"
                className="text-dark underline"
              >
                parsawebdev@gmail.com
              </a>
            </div>
          </div>
          <div>{MailIconStyled()}</div>
        </div>
        <div className="flex justify-between items-center">
          <TwoCircles /> <TwoCircles />
        </div>
      </div>
      <div className="text-gray text-base text-center w-full my-20">
        Ⓒ PARSA MORSHED, 2024-2025. All rights reserved.
      </div>
    </CRoot>
  );
}
