import type { NextPage } from "next";
import { Typography } from "antd";
import { Source_Code_Pro } from "next/font/google";



const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "700" });

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className={sourceCodePro.className + " text-[50pt]"}>Paul<br />Sparks</h1>
    </div>
  );
}

export default HomePage;
