import Image from "next/image";

export default function Statistics({ statistics, title, icon, color }) {
  return (
    <div className="flex justify-start items-center w-[100%] md:w-[calc(48% - 1rem)]">
      <div
        className={`flex justify-center items-center min-w-[54px] min-h-[54px] ml-4 rounded-md`}
        style={{ backgroundColor: color }}
      >
        <Image src={icon} alt={title} />
      </div>
      <div>
        <h4 className="font-extrabold text-3xl text-blackColor">
          {statistics}
        </h4>
        <h5 className="text-sm text-blackColor">{title}</h5>
      </div>
    </div>
  );
}
