import { Descriptions, DescriptionsProps } from "antd";
import { NextPage } from "next";
import { sourceCodePro } from "./contact";

export const Contact: NextPage = () => {
  const itemStyles =
    sourceCodePro.className + " text-[#bc6c25] text-sm sm:text-xl";
  const secondaryItemStyles =
    sourceCodePro.className + " text-[#283618] text-xs sm:text-lg";

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: <p className={itemStyles}>Email</p>,
      children: <p className={secondaryItemStyles}>psparks1225@gmail.com</p>,
    },
    {
      key: "2",
      label: <p className={itemStyles}>Phone</p>,
      children: <p className={secondaryItemStyles}>(513) 800-8623</p>,
    },
    {
      key: "3",
      label: <p className={itemStyles}>LinkedIn</p>,
      children: (
        <a
          href="https://www.linkedin.com/in/paul-sparks-it"
          target="_blank"
          className={secondaryItemStyles}
        >
          <span className="text-[#606c38] underline">
            https://www.linkedin.com/in/paul-sparks-it
          </span>
        </a>
      ),
    },
    {
      key: "4",
      label: <p className={itemStyles}>GitHub</p>,
      children: (
        <a
          href="https://github.com/paulsparks"
          target="_blank"
          className={secondaryItemStyles}
        >
          <span className="text-[#606c38] underline">
            https://github.com/paulsparks
          </span>
        </a>
      ),
    },
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1
        className={
          sourceCodePro.className +
          " text-[#bc6c25] text-5xl sm:text-7xl md:text-8xl"
        }
      >
        Contact
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Me
        <br />
        <DownOutlined />
      </h1>
      <Descriptions column={1} items={items} />
    </div>
  );
};
