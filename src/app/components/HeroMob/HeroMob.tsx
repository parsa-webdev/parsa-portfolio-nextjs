"use client";
import Image from "next/image";
import { HMRoot } from "./HM.styled";
import meMob from "./Images/meMob.jpg";
import MailIcon from "@/app/icons/MailIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import DocumentIcon from "@/app/icons/DocumentIcon";
import { ExternalLinkIconSM } from "@/app/icons/ExternalLinkIcon";
import USFlag from "@/app/icons/USFlag";
import brian from "../HeroDesk/Images/brian.png";
import { FiveStarIconSM } from "@/app/icons/FiveStarIcon";
import YouTubeIcon from "@/app/icons/YouTubeIcon";
import PortfolioMob from "../PortfolioMob/PortfolioMob";
export default function HeroMob() {
  return (
    <HMRoot>
      <div className="parsa-mob">
        <Image src={meMob} alt="Parsa Morshed - Frontend Developer" />
        <div className="hero-mob px-5">
          <div className="flex bg-red pt-5 items-center justify-between header mb-5">
            <div>
              <h6 className="text-base text-lightGreen">Parsa Morshed</h6>
            </div>
            <div className="flex gap-x-7 items-center">
              <a href="mailto:parsawebdev@mail.com" target="_blank">
                <MailIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/parsa-morshed-5408941a5/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://drive.google.com/file/d/166bv5gz_osvHkmq85eblOPQXc-cZkqdA/view?usp=drive_link"
                target="_blank"
              >
                <DocumentIcon />
              </a>
            </div>
            <div>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L14 0.999999"
                  stroke="#DAFFEC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 7L14 7"
                  stroke="#DAFFEC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 13L14 13"
                  stroke="#DAFFEC"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-light text-2xl font-bold mt-10 text-center">
            Highly Rated <br /> Frontend Engineer
          </h1>
          <h2 className="text-primary text-md font-semibold mt-2 text-center">
            Trusted by Clients to Deliver Scalable, Modern, and Impactful Web
            Experiences.
          </h2>
          <div className="testimonial p-3 bg-lightGreen rounded-xl mt-80 text-sm text-dark mb-5">
            <div className="flex justify-between">
              <div>
                <h5 className="font-medium">Brian Park</h5>
                <p className="text-xs">CEO, Apeak Corporation</p>
                <div className="flag flex gap-1 items-center  pt-1">
                  <USFlag />
                  <p className="text-xs ">Seatle, Washington</p>
                </div>
                <div className="pt-2 pb-4">{FiveStarIconSM()}</div>
              </div>
              <div className="brian-info flex gap-2">
                <div>
                  <Image
                    className="brian-img"
                    src={brian}
                    alt="Parsa Morshed - Frontend Developer"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xs">
              Parsa has been with Apeak for the past four years, and honestly,{" "}
              {""}
              {"she’s"} been such an incredible part of the team. {"She’s"}{" "}
              taken the lead on building and maintaining multiple web apps with
              React and Next.js and still manages them to this day. On top of
              that, she handles QA for all our products, web and mobile, and
              ensures everything we put out meets the highest standards. <br />
              <br /> {"She’s"} super reliable and has always gone the extra
              mile, whether {"it’s"} working weekends, handling investor
              meetings, interviewing senior developers, or onboarding new team
              members. Parsa is the kind of person who keeps the team motivated
              and always has a positive attitude, even during the tougher times.
              Everyone loves working with her, and {"I’ve"} only ever heard
              great things about her from the rest of the team. <br /> <br />
              If {"you’re"} {""}
              looking for someone hardworking, dedicated, and fun to work with,
              I {""}
              {"can’t"} recommend Parsa enough. {"She’s"} been such an asset to
              us, and I know {"she’d"} bring the same energy and value to any
              team she joins.
            </h3>
            <a
              href="https://www.linkedin.com/in/parsa-morshed-5408941a5/details/recommendations/"
              target="_blank"
              className="flex justify-end gap-1 pr-4 pt-4"
            >
              <p className="text-xs text-lightGray">
                Verify the Testimonial on LinkedIn
              </p>
              {ExternalLinkIconSM()}
            </a>
          </div>
          <div>
            <a
              href="https://calendly.com/parsawebdev/30min"
              target="_blank"
              className="cta cta-primary text-center bg-primary text-dark font-bold rounded-xl hover:bg-secondary ease-in-out duration-500 block mb-4"
            >
              Schedule A Meeting
            </a>
            <a className="cta text-center text-primary border-2 font-medium border-primary rounded-xl hover:text-secondary hover:border-secondary  ease-in-out duration-300 block mb-4">
              Browse Portfolio
            </a>
            <a
              href="https://www.youtube.com/watch?v=mAjJziK9Wxg"
              target="_blank"
              className="cta cta-tertiary flex items-center gap-2 text-center text-center text-lightGreen3 border-2 border-lightGreen3 rounded-xl hover:text-secondary hover:border-secondary  ease-in-out duration-300 block justify-center mb-20"
            >
              <p>Watch My Video</p> <YouTubeIcon />
            </a>
          </div>
          <PortfolioMob />
        </div>
      </div>
    </HMRoot>
  );
}
