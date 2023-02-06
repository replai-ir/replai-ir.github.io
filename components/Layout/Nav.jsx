import Image from "next/image";
import replaiLogo from "../../public/assets/svg/replai_logo.svg";
import replaiTextLogo from "../../public/assets/svg/replai_text-logo.svg";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-main mt-[1.875rem] list-none">
      <li className="flex items-center">
        <Link href="/">
          <Image
            src={replaiLogo}
            alt="replai-logo"
            className="cursor-pointer"
          />
        </Link>
        <Link href="/">
          <Image
            src={replaiTextLogo}
            alt="replai-text-logo"
            className="mr-4 cursor-pointer"
          />
        </Link>
      </li>
    </nav>
  );
}
