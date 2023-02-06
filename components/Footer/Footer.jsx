import Link from "next/link";

import logoFooter from "../../public/assets/svg/logo-footer.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-[70px] bg-grayColor flex items-center justify-center md:h-[100px]">
      <Link href="https://roshan-ai.ir" className="flex flex-col items-center">
        <Image src={logoFooter} alt="logo-footer" className="mb-2" />
        <p className="text-xs sm:text-xl">
          شرکت دانش بنیان «راهکار پردازش ژرف»
        </p>
      </Link>
    </footer>
  );
}
