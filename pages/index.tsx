import type { NextPage } from "next";
import { Typography } from "antd";
import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import headshot from "@/assets/images/headshot.png";



const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "700" });

const HomePage: NextPage = () => {
  return (
    <div>
      <div className="flex flex-row">
        <h1 className={sourceCodePro.className + " text-[#bc6c25] text-8xl"}>
          Paul<br />Sparks
        </h1>
        <Image className="rounded-full ml-24 outline outline-[#bc6c25] shadow-lg shadow-[#bc6c25]" width={836 / 4} height={836 / 4} alt="headshot image" src={headshot} />
      </div>
      <h2 className={sourceCodePro.className + " text-[#bc6c25] text-2xl mt-10"}>
        Information Technology / Computer Science
      </h2>
      <div className={sourceCodePro.className + " mt-10 text-[#bc6c25] shadow-2xl p-16 shadow-[#dda15e]"}>
        lorenre gewg weg ew gwe gwe g 
      </div>
    </div>
  );
}

export default HomePage;
