import Image from "next/image";

import { convertDigitToSplitShape } from "../../functions/digit";

export default function Statistics({ statistics, title, icon, color }) {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start">
      <div
        className={`flex justify-center items-center min-w-[54px] min-h-[54px] ml-0 mb-4 rounded-md sm:ml-4 sm:mb-0`}
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
