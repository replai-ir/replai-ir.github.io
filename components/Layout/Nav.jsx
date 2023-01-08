import Image from "next/image";
import replaiLogo from "../../public/assets/svg/replai_logo.svg";
import replaiTextLogo from "../../public/assets/svg/replai_text-Logo.svg";

export default function Nav() {
  return (
    <nav className="mt-[1.875rem] mr-[2rem] md:mr-[8rem] list-none">
      <li className="flex items-center">
        <Image src={replaiLogo} alt="replai-logo" />
        <Image src={replaiTextLogo} alt="replai-text-logo" className="mr-4" />
      </li>
    </nav>
  );
}
