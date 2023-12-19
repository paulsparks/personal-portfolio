import {
  ArrowDownOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Descriptions, DescriptionsProps } from "antd";
import { NextPage } from "next";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "700" });

const Contact: NextPage = () => {
  const itemStyles =
    sourceCodePro.className + " text-[#bc6c25] text-2xl sm:text-4xl";
  const secondaryItemStyles =
    sourceCodePro.className +
    " text-[#283618] text-xs sm:text-lg p-4 pl-0 pt-0";

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: (
        <p className={itemStyles}>
          <MailOutlined />
        </p>
      ),
      children: <p className={secondaryItemStyles}>psparks1225@gmail.com</p>,
    },
    {
      key: "2",
      label: (
        <p className={itemStyles}>
          <PhoneOutlined />
        </p>
      ),
      children: <p className={secondaryItemStyles}>(513) 800-8623</p>,
    },
    {
      key: "3",
      label: (
        <p className={itemStyles}>
          <LinkedinOutlined />
        </p>
      ),
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
      label: (
        <p className={itemStyles}>
          <GithubOutlined />
        </p>
      ),
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
    <div className="min-md:p-4 !pt-0 md:p-8">
      <h1
        className={
          sourceCodePro.className +
          " text-[#bc6c25] text-4xl sm:text-6xl md:text-7xl lg:text-8xl md:pb-10 mx-auto text-center"
        }
      >
        Contact Me
      </h1>
      <Descriptions
        className="mt-10 text-[#bc6c25] shadow-2xl px-4 pt-6 sm:p-16 shadow-[#dda15e]"
        colon={false}
        layout="vertical"
        column={2}
        items={items}
      />
    </div>
  );
};

export default Contact;
