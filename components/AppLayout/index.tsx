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
      label: "Test",
      key: "/test",
      className: itemStyles,
    },
  ]

  const onChange = (key: string) => {
    router.push(key);
  }

  return (
    <Layout className="!bg-[#fefae0] h-full">
      <Layout.Sider className="sm:ml-10 lg:ml-40 !bg-transparent">
      <Timeline
      className="mt-[30rem] mr-10"
        items={[
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
          {
            children: 'Network problems being solved 2015-09-01',
          },
          
        ]}
      />
      </Layout.Sider>
      <div className="ml-auto mr-auto w-3/4">
        <Layout.Header className="!bg-[#fefae0] px-0">
          <Menu className="border-y-0 !bg-[#fefae0]" items={items} activeKey={router.pathname} mode="horizontal" onSelect={({ key }) => onChange(key)} />
        </Layout.Header>
        <Layout.Content className="pt-8 w-3/4">
          {children}
        </Layout.Content>
      </div>
    </Layout>
  );
}