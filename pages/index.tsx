import type { NextPage } from "next";
import { Typography } from "antd";
import { Source_Code_Pro } from "next/font/google";



const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "700" });

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className={sourceCodePro.className + " text-[#bc6c25] text-8xl"}>
        Paul<br />Sparks
      </h1>
      <h2 className={sourceCodePro.className + " text-[#bc6c25] text-2xl mt-10"}>
        <span className="block mb-4">Computer Science</span>
        <span className="block">Information Technology</span>
      </h2>
      <div className={sourceCodePro.className + " mt-10 text-[#bc6c25] shadow-2xl p-16 shadow-[#dda15e]"}>
        lorenre gewg weg ew gwe gwe g 
      </div>
    </div>
  );
}

export default HomePage;
