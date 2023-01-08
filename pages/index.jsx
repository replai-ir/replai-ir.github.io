import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";

import elipse from "../public/assets/svg/elipse.svg";
import heroImage from "../public/assets/image/hero_image.svg";
import analaysisCommentsImage from "../public/assets/image/analysis-comments_image.svg";
import appStoreImage from "../public/assets/image/app-store_image.svg";
import autoReplyImage from "../public/assets/image/auto-reply_image.svg";
import identificationCommentsImage from "../public/assets/image/identification-comments_image.svg";

function HomePage() {
  const app_url = "https://app.replai.ir";
  return (
    <Layout>
      <Head>
        <title>ریپلای</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/svg/replai_logo.svg" />
      </Head>

      <Image
        src={elipse}
        alt="elipse"
        className="-z-10 absolute top-0 left-0 w-[50vw]"
      />

      <main className="mx-[2rem] md:mx-[8rem]">
        <section className="min-h-[90vh] mb-[10vh] flex flex-row justify-between items-center">
          <div>
            <h1>مدیریت نظرات کاربران از طریق هوش مصنوعی</h1>
            <p className="mt-[1.675rem] mb-[3.25rem] max-w-[420px]">
              ریپلای نظرات دریافتی در پنل کافه بازار و گوگل پلی را تحلیل و دسته
              بندی می کند و به صورت خودکار پاسخ می دهد
            </p>
            <Button className="bg-blueColor text-whiteColor">
              <Link href={app_url} className="link">
                ورود به ریپلای
              </Link>
            </Button>
          </div>
          <div className="w-[0] md:w-[400px] lg:w-[600px] transition-all duration-500">
            <Image src={heroImage} alt="" />
          </div>
        </section>

        <section className="section">
          <div>
            <h2>تحلیل نظرات کاربران</h2>
            <p>
              ریپلای اطلاعات جامعی از نظرات کاربران در اختیار شما قرار می دهد
            </p>
          </div>
          <Image src={analaysisCommentsImage} alt="analysis-comments" />
        </section>

        <section className="section">
          <div>
            <h2>کافه بازار و گوگل پلی یکجا در پنل ریپلای شما</h2>
            <p>
              ریپلای نظرات دریافتی در مارکت های مختلف را تجمیع کرده و یکجا در
              اختیار شما قرار می دهد
            </p>
          </div>
          <Image src={appStoreImage} alt="app-store" />
        </section>

        <section className="section">
          <div>
            <h2>پاسخگویی خودکار به نظرات</h2>
            <p>
              ریپلای به سلیقه شما به نظراتی که نیاز پاسخ شما دارند،‌ به صورت
              خودکار پاسخ می دهد
            </p>
          </div>
          <Image src={autoReplyImage} alt="app-store" />
        </section>

        <section className="section">
          <div>
            <h2>شناسایی و دسته‌بندی محتوا</h2>
            <p>
              ریپلای نظرات حاوی اشکال فنی، مشکل در پرداخت، احساس مثبت و منفی و
              بسیاری دیگر را می‌شناسد و آن ها را دسته بندی می‌کند
            </p>
          </div>
          <Image
            src={identificationCommentsImage}
            alt="identification-comments"
          />
        </section>

        {/* give try replai --section */}
        <section
          className="flex flex-col justify-center items-center w-full h-[40vh] mb-[20vh] rounded-2xl bg-blueColor bg-cover bg-center md:h-[80vh]
      "
          style={{
            backgroundImage: `url('/assets/image/give_replai_try.svg')`,
          }}
        >
          <p className="try-replai max-w-[700px] px-8 mb-[2.25rem] text-center text-2xl text-whiteColor md:text-5xl">
            ریپلای، تجربه بهتری رو در اختیار کاربرانتون قرار می‌دهد
          </p>
          <Button className="bg-whiteColor text-blueColor cursor-pointer">
            <Link href={app_url} className="link">
              ورود به ریپلای
            </Link>
          </Button>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export default HomePage;
