import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import Statistics from "../components/UI/Statistics";

import elipse from "../public/assets/svg/elipse.svg";
import heroImage from "../public/assets/image/hero_image.svg";

import analaysisCommentsImage from "../public/assets/image/analysis-comments_image.svg";
import appStoreImage from "../public/assets/image/app-store_image.svg";
import autoReplyImage from "../public/assets/image/auto-reply_image.svg";
import identificationCommentsImage from "../public/assets/image/identification-comments_image.svg";

import allCommentsIcon from "../public/assets/svg/all-comments_icon.svg";
import positiveCommentsIcon from "../public/assets/svg/positive-comments_icon.svg";
import protestpriceCommentsIcon from "../public/assets/svg/protestprice-comments_icon.svg";
import technicalissuesCommentsIcon from "../public/assets/svg/technicalissues-comments_icon.svg";

import mainBarChart from "../public/assets/image/main-bar-chart_image.svg";
import mainPieChart from "../public/assets/image/main-pie-chart_image.svg";
import mainComments from "../public/assets/image/main-comments_image.svg";

import ketabkhoneMelliImage from "../public/assets/image/ketabkhone-melli_image.svg";
import mokhaberat from "../public/assets/image/mokhaberat_image.svg";
import filimo from "../public/assets/image/filimo_image.svg";
import aparat from "../public/assets/image/aparat_image.svg";
import naft from "../public/assets/image/naft_image.svg";

function HomePage() {
  const app_url = "https://app.replai.ir";

  const statisticsArray = [
    {
      statistics: 687457,
      title: "کل نظرات تحلیل شده",
      icon: allCommentsIcon,
      color: "#9AAAFF",
    },
    {
      statistics: 687457,
      title: "نظرات احساس مثبت",
      icon: positiveCommentsIcon,
      color: "#4ECDC4",
    },
    {
      statistics: 687457,
      title: "نظرات اعتراض به قیمت",
      icon: protestpriceCommentsIcon,
      color: "#FD8A9C",
    },
    {
      statistics: 687457,
      title: "نظرات اشکال فنی",
      icon: technicalissuesCommentsIcon,
      color: "#FDCC7C",
    },
  ];

  const colabs = [
    { image: ketabkhoneMelliImage, alt: "ketabkhone-melli" },
    { image: mokhaberat, alt: "mokhberat" },
    { image: filimo, alt: "filimo" },
    { image: aparat, alt: "aparat" },
    { image: naft, alt: "naft" },
  ];

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
        <div className="min-h-[90vh] mb-[10vh] flex flex-row justify-between items-center">
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
          <div className="relative w-[0] md:w-[400px] lg:w-[600px]">
            <Image
              src={heroImage}
              alt="hero"
              className="w-full absolute left-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

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

        <div className="section-type2">
          <h2>آمار ریپلای تاکنون</h2>
          <div className="flex flex-wrap justify-between w-full min-h-[330px] py-[3.5rem] px-[2rem] mt-[3.25rem] bg-grayColor md:grid-cols-2 gap-4 md:px-[8rem] lg:px-[12rem] [&>div:nth-child(even)]:justify-end">
            {statisticsArray.map((statisticsItem) => (
              <Statistics
                key={statisticsItem.title}
                statistics={statisticsItem.statistics}
                title={statisticsItem.title}
                icon={statisticsItem.icon}
                color={statisticsItem.color}
              />
            ))}

            {/* <Image src={allCommentsIcon} alt="all-comments" /> */}
          </div>
        </div>

        <div className="section-type2 relative">
          <h2>ریپلای در یک نگاه</h2>
          <Image src={mainBarChart} alt="main-bar-chart" />
          <Image
            src={mainPieChart}
            alt="main-pie-chart"
            className="-z-10 absolute left-0 top-1/2 -translate-y-1/2"
          />
          <Image
            src={mainComments}
            alt="main-comments"
            className="-z-10 absolute right-0 top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="section-type2 justify-center">
          <h2>به ما اعتماد کرده‌اند</h2>
          <div className="grid grid-cols-2 gap-[4rem] place-items-center items-center w-full mt-[8rem] md:grid-cols-3 lg:grid-cols-5">
            {colabs.map((colab) => (
              <Image
                key={colab.alt}
                src={colab.image}
                alt={colab.alt}
                className="flex justify-center"
              />
            ))}
          </div>
        </div>

        {/* give try replai  */}
        <div
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
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default HomePage;
