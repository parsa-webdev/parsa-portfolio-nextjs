"use client";

import MailIcon from "@/app/icons/MailIcon";
import { HeaderDesk } from "./Header.styled";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import DocumentIcon from "@/app/icons/DocumentIcon";
import MobileHeader from "./ MobileHeader/MobileHeader";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <HeaderDesk>
        <div className="flex gap-x-8 pt-10 items-center mb-12 justify-between">
          <div>
            <Link href="/">
              <h6 className="text-base text-lightGreen">Parsa Morshed</h6>
            </Link>
          </div>
          <div className="flex gap-x-4 items-center">
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
              href="https://drive.google.com/file/d/1Y7SpQWNT2xQ9v6QapKXPoB68GLBi9C6O/view?usp=sharing"
              target="_blank"
            >
              <DocumentIcon />
            </a>
          </div>
        </div>
      </HeaderDesk>
      <MobileHeader />
    </>
  );
}
