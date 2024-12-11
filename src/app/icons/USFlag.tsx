import Image from "next/image";
import usflag from "../components/HeroDesk/Images/usflag.png";
export default function USFlag() {
  return (
    <>
      <Image alt="USA Flag" src={usflag} />
    </>
  );
}
