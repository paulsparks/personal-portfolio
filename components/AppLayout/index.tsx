import { Layout, Menu, Timeline } from "antd";
import type { MenuProps } from "antd";
import { ReactNode } from "react";
import { useRouter } from "next/router";



interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();

  // https://coolors.co/palette/606c38-283618-fefae0-dda15e-bc6c25
  const itemStyles = "!text-[#bc6c25] font-bold"

  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "/",
      className: itemStyles,
    },
    {
      label: "Contact",
      key: "/contact",
      className: itemStyles,
    },
  ]

  const onChange = (key: string) => {
    router.push(key);
  }

  return (
    <Layout className="!bg-[#fefae0] h-full">
      <div className="ml-auto mr-auto w-full md:w-11/12 lg:w-4/5 2xl:w-3/4">
        <Layout.Header className="!bg-[#fefae0] px-0">
          <Menu className="border-y-0 !bg-[#fefae0]" items={items} activeKey={router.pathname} mode="horizontal" onSelect={({ key }) => onChange(key)} />
        </Layout.Header>
        <Layout.Content className="pt-8 w-full md:w-4/5 2xl:w-3/4 ml-auto mr-auto">
          {children}
        </Layout.Content>
      </div>
    </Layout>
  );
}
