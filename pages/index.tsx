import type { NextPage } from "next";
import { Collapse, CollapseProps, Timeline, Typography } from "antd";
import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import headshot from "@/assets/images/headshot.png";
import resourceMap1 from "@/assets/images/ss1.png";
import resourceMap2 from "@/assets/images/ss2.png";
import resourceMap3 from "@/assets/images/ss3.png";
import lhsChat1 from "@/assets/images/lhschat1.png";
import lhsChat2 from "@/assets/images/lhschat2.png";



const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "700" });
const sourceCodeProBold = Source_Code_Pro({ subsets: ["latin"], weight: "900" });

const HomePage: NextPage = () => {
  const timelineChildrenStyles = "!text-[#bc6c25] font-bold !text-2xl";
  
  const itemStyles = "rounded-md shadow-md shadow-[#bc6c25]";

  const resourceMap: CollapseProps["items"] = [
    {
      key: "1",
      label: "Image 1",
      children: <Image className={itemStyles} width={1920} height={1008} alt="project 1 image" src={resourceMap2} />,
    },
    {
      key: "2",
      label: "Image 2",
      children: <Image className={itemStyles}  width={1920} height={993} alt="project 1 image" src={resourceMap3} />,
    },
    {
      key: "3",
      label: "Image 3",
      children: <Image className={itemStyles}  width={666 / 2} height={932 / 2} alt="project 1 image" src={resourceMap1} />,
    },
  ];

  const lhsLiveChat: CollapseProps["items"] = [
    {
      key: "1",
      label: "Image 1",
      children: <Image className={itemStyles} width={1914} height={935} alt="project 1 image" src={lhsChat2} />,
    },
    {
      key: "2",
      label: "Image 2",
      children: <Image className={itemStyles}  width={1914} height={924} alt="project 1 image" src={lhsChat1} />,
    },
  ];

  return (
    <div className="pb-60">
      <div className="flex flex-row justify-center">
        <div>
          <h1 className={sourceCodePro.className + " text-[#bc6c25] text-8xl"}>
            Paul<br />Sparks
          </h1>
          <h2 className={sourceCodePro.className + " text-[#bc6c25] text-2xl mt-10"}>
            Information Technology &<br />Computer Science
          </h2>
        </div>
        <Image className="rounded-full ml-24 h-[209px] w-[209px] outline outline-[#bc6c25] shadow-lg shadow-[#bc6c25]" width={836 / 4} height={836 / 4} alt="headshot image" src={headshot} />
      </div>
      <div className={sourceCodePro.className + " mt-10 text-[#bc6c25] shadow-2xl p-16 shadow-[#dda15e]"}>
        <Timeline
          items={[
            {
              children: <>
                <h1 className={sourceCodePro.className + " text-[#283618] text-3xl mb-10"}>August 2023 | 19 Years Old</h1>
                <h2 className={sourceCodeProBold.className + " text-xl"}>Resource Map</h2>
                <p className={sourceCodePro.className + " mt-4 text-sm"}>
                  Over the course of a three-month summer co-op at <a href="https://kinetic-vision.com/" target="_blank"><span className="text-[#606c38] underline">Kinetic Vision</span></a>, I worked with a small team to develop an internal web-application in which the user (usually a team manager) can view and alter an employee seating chart.
                  Beyond that, the application also functions as an interactive map of the building, including rooms and points of interest such as fire extinguishers and coffee machines.
                  My contributions include being one of the primary developers on both the front-end and back-end of the tech stack, as well as contributing to the creative and functional decision-making processes.
                </p>
                <Collapse accordion className="mt-5 text-lg mb-10" items={resourceMap} />
              </>,
              className: timelineChildrenStyles,
            },
            {
              children: <>
              <h1 className={sourceCodePro.className + " text-[#283618] text-3xl mb-10"}>March 2023 | 18 Years Old</h1>
              <h2 className={sourceCodeProBold.className + " text-xl"}>LHS Live Chat</h2>
              <p className={sourceCodePro.className + " mt-4 text-sm"}>
                During my senior year of high school, I decided it was time to create my first full-stack web application.
                I created a live chat room for the students at my high school to be able to use to communicate with the other students during the school day.
                It used a web-socket to link the Vue.js frontend with the Express.js backend.
                It was fully deployed on the cloud in a Docker container.
              </p>
              <Collapse accordion className="mt-5 text-lg" items={lhsLiveChat} />

              <h2 className={sourceCodeProBold.className + " text-xl mt-10"}>High School Website Vulnerability Report</h2>
              <p className={sourceCodePro.className + " mt-4 text-sm mb-10"}>
                Around the same time that I created LHS Live Chat, I had an interest in cyber security and penetration testing.
                I decided to go to my High School&apos;s website and attempt to find a vulnerability.
                After some time, I discovered a SQL injection vulnerability on an admin login page. I wrote a Python script to
                execute a timing-based blind SQL injection, which eventually uncovered the contents of all of their database tables.
                In this database, there were the password hashes to the admin logins. I wrote a report about how the vulnerability works
                and how to fix it, then had my IT teacher email it to the relevant departments at my school.
              </p>
            </>,
              className: timelineChildrenStyles,
            },
            {
              children: <>
                <h1 className={sourceCodePro.className + " text-[#283618] text-3xl mb-10"}>February 2022 | 17 Years Old</h1>
                <h2 className={sourceCodeProBold.className + " text-xl mt-10"}>High School Website Vulnerability Report</h2>
                <p className={sourceCodePro.className + " mt-4 text-sm mb-10"}>
                  Around the same time that I created LHS Live Chat, I had an interest in cyber security and penetration testing.
                  I decided to go to my High School&apos;s website and attempt to find a vulnerability.
                  After some time, I discovered a SQL injection vulnerability on an admin login page. I wrote a Python script to
                  execute a timing-based blind SQL injection, which eventually uncovered the contents of all of their database tables.
                  In this database, there were the password hashes to the admin logins. I wrote a report about how the vulnerability works
                  and how to fix it, then had my IT teacher email it to the relevant departments at my school.
                </p>
              </>,
              className: timelineChildrenStyles,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
