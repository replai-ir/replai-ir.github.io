import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";
import Statistics from "../components/UI/Statistics";
import ProductDescription from "../components/UI/ProductDescription";

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
      statistics: 35457,
      title: "نظرات احساس مثبت",
      icon: positiveCommentsIcon,
      color: "#4ECDC4",
    },
    {
      statistics: 1931,
      title: "نظرات اعتراض به قیمت",
      icon: protestpriceCommentsIcon,
      color: "#FD8A9C",
    },
    {
      statistics: 10348,
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

  const productDescroptions = [
    {
      title: "تحلیل و دسته‌بندی خودکار نظرات کاربران",
      description:
        "ریپلای نظرات کاربران را به صورت خودکار و با سرعت بالا تحلیل می‌کند و در دسته‌بندی‌های مشخص قرار می‌دهد",
      image: analaysisCommentsImage,
      imageAlt: "analysis-comments",
    },
    {
      title: "کافه بازار و گوگل پلی یکجا در پنل ریپلای شما",
      description:
        "ریپلای نظرات کاربران شما در مارکت های مختلف را جمع آوری کرده و به صورت یکجا در یک پنل واحد نمایش می‌دهد",
      image: appStoreImage,
      imageAlt: "app-store",
    },
    {
      title: "پاسخگویی خودکار به نظرات",
      description:
        "ریپلای به سلیقهٔ شما به نظراتی که نیازمند پاسخ هست به صورت خودکار پاسخ می‌دهد",
      image: autoReplyImage,
      imageAlt: "auto-reply",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>ریپلای</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/svg/replai_logo.svg"
        />
      </Head>

      <main className="w-main">
        <div
          className="flex flex-col-reverse justify-between items-center min-h-[90vh] mb-[10vh]
        sm:flex-row "
        >
          <div className="flex flex-col justify-center items-center w-full md:items-start md:w-[45%] lg:w-[50%]">
            <h1>مدیریت نظرات کاربران از طریق هوش مصنوعی</h1>
            <p className="mt-[1.675rem] mb-[3.25rem] max-w-[420px]">
              ریپلای نظرات کاربران شما در کافه بازار و گوگل پلی را با کمک هوش
              مصنوعی رصد می کند و به صورت خودکار پاسخ می دهد
            </p>
            <Button className="bg-blueColor text-whiteColor">
              <Link href={app_url} className="link">
                ورود به ریپلای
              </Link>
            </Button>
          </div>
          <div className="w-full my-[15vh] sm:my-0 md:w-[40%] lg:w-[45%]">
            <Image src={heroImage} alt="hero" className="w-full" />
          </div>
        </div>
        {productDescroptions.map((productDes) => (
          <ProductDescription
            key={productDes.title}
            title={productDes.title}
            description={productDes.description}
            image={productDes.image}
            imageAlt={productDes.imageAlt}
          />
        ))}

        <div className="section-type2">
          <h2>آمار ریپلای تاکنون</h2>
          <div className="grid grid-cols-2 items-center w-full min-h-[330px] px-4 mt-[1rem] bg-grayColor gap-4 rounded-xl sm:py-[3.5rem] sm:px-[2rem] sm:pr-[8rem] md:px-[4rem] md:mt-[3.25rem] md:pr-[8rem] lg:px-[6rem] lg:pr-[14rem] xl:pr-[20rem]">
            {statisticsArray.map((statisticsItem) => (
              <Statistics
                key={statisticsItem.title}
                statistics={statisticsItem.statistics}
                title={statisticsItem.title}
                icon={statisticsItem.icon}
                color={statisticsItem.color}
              />
            ))}
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
          <div className="grid grid-cols-2 gap-[4rem] place-items-center items-center w-full mt-12 md:mt-[8rem] lg:grid-cols-5">
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
      </main>
      <div
        className="flex flex-col justify-center items-center w-screen h-[55vh] px-8 mb-[15vh] rounded-0 bg-blueColor bg-cover bg-center sm:w-[85%] sm:mx-auto md:h-[80vh] md:mb-[20vh] sm:rounded-2xl
      "
        style={{
          backgroundImage: `url('assets/image/give_replai_try.svg')`,
        }}
      >
        <p className="try-replai max-w-[700px] mb-[2.25rem] text-center text-3xl text-whiteColor md:px-8 md:text-5xl">
          ریپلای تجربهٔ بهتری را برای شما و کاربران شما به همراه خواهد داشت.
        </p>
        <Button className="bg-whiteColor text-blueColor cursor-pointer">
          <Link href={app_url} className="link">
            ورود به ریپلای
          </Link>
        </Button>
      </div>
      <Footer />
    </Layout>
  );
}

export default HomePage;
