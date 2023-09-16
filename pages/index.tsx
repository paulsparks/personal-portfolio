import type { NextPage } from "next";
import { Collapse, CollapseProps, Timeline } from "antd";
import { Source_Code_Pro } from "next/font/google";
import { Image } from "antd";
import NextImage from "next/image";
import headshot from "/public/assets/images/headshot.png";

const resourceMap1 = "/assets/images/ss1.png";
const resourceMap2 = "/assets/images/ss2.png";
const resourceMap3 = "/assets/images/ss3.png";
const lhsChat1 = "/assets/images/lhschat1.png";
const lhsChat2 = "/assets/images/lhschat2.png";
const keyboard = "/assets/images/keyboard.jpg";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "700" });
const sourceCodeProBold = Source_Code_Pro({
  subsets: ["latin"],
  weight: "900",
});

const HomePage: NextPage = () => {
  const timelineChildrenStyles = "!text-[#bc6c25] font-bold !text-2xl";

  const itemStyles = "rounded-md shadow-md shadow-[#bc6b2562]";

  const resourceMap: CollapseProps["items"] = [
    {
      key: "1",
      label: "Interactive Map Page",
      children: (
        <Image
          preview={{ toolbarRender: () => null, movable: false }}
          className={itemStyles}
          alt="project 1 image"
          src={resourceMap2}
        />
      ),
    },
    {
      key: "2",
      label: "Seats Data Page",
      children: (
        <Image
          preview={{ toolbarRender: () => null, movable: false }}
          className={itemStyles}
          alt="project 1 image"
          src={resourceMap3}
        />
      ),
    },
    {
      key: "3",
      label: "Point of Interest Data Entry Form",
      children: (
        <Image
          preview={{ toolbarRender: () => null, movable: false }}
          className={itemStyles}
          width="50%"
          alt="project 1 image"
          src={resourceMap1}
        />
      ),
    },
  ];

  const lhsLiveChat: CollapseProps["items"] = [
    {
      key: "1",
      label: "Chat Room Page",
      children: (
        <Image
          preview={{ toolbarRender: () => null, movable: false }}
          className={itemStyles}
          alt="project 1 image"
          src={lhsChat2}
        />
      ),
    },
    {
      key: "2",
      label: "Welcome Page",
      children: (
        <Image
          preview={{ toolbarRender: () => null, movable: false }}
          className={itemStyles}
          alt="project 1 image"
          src={lhsChat1}
        />
      ),
    },
  ];

  const keyboardDropdown: CollapseProps["items"] = [
    {
      key: "1",
      label: "The Keyboard",
      children: (
        <Image
          preview={{ toolbarRender: () => null, movable: false }}
          className={itemStyles}
          alt="keyboard image"
          src={keyboard}
        />
      ),
    },
  ];

  return (
    <div className="md:pb-20">
      <div className="flex flex-row justify-center">
        <div>
          <h1
            className={
              sourceCodePro.className +
              " text-[#bc6c25] text-5xl sm:text-7xl md:text-8xl"
            }
          >
            Paul
            <br />
            Sparks
          </h1>
          <h2
            className={
              sourceCodePro.className +
              " text-[#bc6c25] text-md sm:text-lg md:text-2xl mt-10"
            }
          >
            Information Technology &<br />
            Computer Science
          </h2>
        </div>
        <NextImage
          className="rounded-full sm:ml-24 h-[209px] w-[209px] max-sm:w-[140px] max-sm:h-[140px] max-md:w-[170px] max-md:h-[170px] outline outline-[#bc6c25] shadow-lg shadow-[#bc6c25]"
          width={836 / 4}
          height={836 / 4}
          alt="headshot image"
          src={headshot}
        />
      </div>
      <div
        className={
          sourceCodePro.className +
          " mt-10 text-[#bc6c25] shadow-2xl px-4 py-16 sm:p-16 shadow-[#dda15e]"
        }
      >
        <Timeline
          items={[
            {
              children: (
                <>
                  <h1
                    className={
                      sourceCodePro.className +
                      " text-[#283618] md:text-3xl mb-10"
                    }
                  >
                    August 2023 | 19 Years Old
                  </h1>
                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl"
                    }
                  >
                    Resource Map
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm"
                    }
                  >
                    Over the course of a three-month summer co-op at{" "}
                    <a href="https://kinetic-vision.com/" target="_blank">
                      <span className="text-[#606c38] underline">
                        Kinetic Vision
                      </span>
                    </a>
                    , I worked with a small team to develop an internal
                    web-application in which the user (usually a team manager)
                    can view and alter an employee seating chart. Beyond that,
                    the application also functions as an interactive map of the
                    building, including rooms and points of interest such as
                    fire extinguishers and coffee machines. My contributions
                    include being one of the primary developers on both the
                    front-end and back-end of the tech stack, as well as
                    contributing to the creative and functional decision-making
                    processes.
                  </p>
                  <Collapse
                    accordion
                    className="mt-5 text-lg mb-10"
                    items={resourceMap}
                  />
                </>
              ),
              className: timelineChildrenStyles,
            },
            {
              children: (
                <>
                  <h1
                    className={
                      sourceCodePro.className +
                      " text-[#283618] md:text-3xl mb-10"
                    }
                  >
                    March 2023 | 18 Years Old
                  </h1>
                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl"
                    }
                  >
                    LHS Live Chat
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm"
                    }
                  >
                    During my senior year of high school, I decided it was time
                    to create my first full-stack web application. I created a
                    live chat room for the students at my high school to be able
                    to use to communicate with the other students during the
                    school day. It used a web-socket to link the Vue.js frontend
                    with the Express.js backend. It was fully deployed on the
                    cloud in a Docker container.
                  </p>
                  <Collapse
                    accordion
                    className="mt-5 text-lg"
                    items={lhsLiveChat}
                  />

                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl mt-10"
                    }
                  >
                    Website Vulnerability Report
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm mb-10"
                    }
                  >
                    Around the same time that I created LHS Live Chat, I had an
                    interest in cyber security and penetration testing. After
                    practicing on CTF websites, I discovered a SQL injection
                    vulnerability on a real company&apos;s login page. This
                    vulnerability allowed for an attacker to execute a
                    timing-based attack by writing a script that injects
                    cumulative SQL queries. I wrote a report about how the
                    vulnerability works and how to fix it, then emailed the
                    report to the company so they could get it resolved.
                  </p>
                </>
              ),
              className: timelineChildrenStyles,
            },
            {
              children: (
                <>
                  <h1
                    className={
                      sourceCodePro.className +
                      " text-[#283618] md:text-3xl mb-10"
                    }
                  >
                    June 2022 | 18 Years Old
                  </h1>
                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl"
                    }
                  >
                    GE Software Engineering Internship Web App Overhaul
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm mb-10"
                    }
                  >
                    During the summer after my Junior year in high school, I did
                    a Software Engineering internship with General Electric
                    Corporate. This was arranged with the help of INTERalliance
                    of Greater Cincinnati. The fine details of the work I did
                    are confidential, but the general idea is that I overhauled
                    a web application that functioned as an internal tool for GE
                    employees.
                  </p>
                </>
              ),
              className: timelineChildrenStyles,
            },
            {
              children: (
                <>
                  <h1
                    className={
                      sourceCodePro.className +
                      " text-[#283618] md:text-3xl mb-10"
                    }
                  >
                    February 2022 | 17 Years Old
                  </h1>
                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl"
                    }
                  >
                    Unity 3D
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm mb-10"
                    }
                  >
                    Over the course of a few weeks, I completed an interactive
                    online Unity 3D course. Throughout this course, there were
                    many meaningful and in-depth lectures ranging from using the
                    Unity scene view, to writing scripts in C# MonoBehaviour
                    classes, and even trigonometry concepts used in game
                    development. At the end, I made a fully functional game
                    using all the concepts learned throughout the course and
                    from my own personal research.
                  </p>
                </>
              ),
              className: timelineChildrenStyles,
            },
            {
              children: (
                <>
                  <h1
                    className={
                      sourceCodePro.className +
                      " text-[#283618] md:text-3xl mb-10"
                    }
                  >
                    December 2021 | 17 Years Old
                  </h1>
                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl"
                    }
                  >
                    Built Custom Keyboard
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm"
                    }
                  >
                    Build a custom 60% sized keyboard, which involved soldering,
                    research, assembling, part matching, etc.
                  </p>
                  <Collapse
                    accordion
                    className="mt-5 text-lg mb-10"
                    items={keyboardDropdown}
                  />
                </>
              ),
              className: timelineChildrenStyles,
            },
            {
              children: (
                <>
                  <h1
                    className={
                      sourceCodePro.className +
                      " text-[#283618] md:text-3xl mb-10"
                    }
                  >
                    Before 2021 | 16 or Less Years Old
                  </h1>
                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl"
                    }
                  >
                    Video Game Mods
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm"
                    }
                  >
                    During my young teenage years, I made a mod for Minecraft, a
                    mod and multiple maps for Call of Duty Zombies, a mod and
                    map for Garry&apos;s Mod, etc.
                  </p>

                  <h2
                    className={
                      sourceCodeProBold.className + " text-lg md:text-xl mt-10"
                    }
                  >
                    Video Game Servers
                  </h2>
                  <p
                    className={
                      sourceCodePro.className + " mt-4 text-xs sm:text-sm"
                    }
                  >
                    Created, configured, owned, and administrated various video
                    game servers at a very young age. This mostly involved lots
                    of research, beginner networking concepts, editing JSON
                    files, and writing simple custom scripts. One of my servers
                    turned a profit in donations.
                  </p>
                </>
              ),
              className: timelineChildrenStyles,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
