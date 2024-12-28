"use client";

import MailIcon from "@/app/icons/MailIcon";
import { HeaderMob } from "./MobileHeader.styled";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import DocumentIcon from "@/app/icons/DocumentIcon";
import Link from "next/link";

export default function MobileHeader() {
  return (
    <>
      <HeaderMob>
        <div className="flex bg-red pt-5 items-center justify-between header mb-5">
          <div className="flex items-center gap-3">
            <div>
              <Link href="/">
                <h6 className="text-base text-lightGreen">Parsa Morshed</h6>
              </Link>
            </div>
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
        </div>
      </HeaderMob>
      {/* <MobileHeader/> */}
    </>
  );
}
