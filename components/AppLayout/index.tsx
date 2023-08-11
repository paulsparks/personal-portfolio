import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { ReactNode } from "react";
import { useRouter } from "next/router";



interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Test",
      key: "/test",
    },
  ]

  const onChange = (key: string) => {
    router.push(key);
  }

  return (
    <Layout className="bg-white">
      <div className="ml-auto mr-auto w-3/4">
        <Layout.Header className="bg-white px-0">
          <Menu items={items} activeKey={router.pathname} mode="horizontal" onSelect={({ key }) => onChange(key)} />
        </Layout.Header>
        <Layout.Content className="p-8">
          {children}
        </Layout.Content>
      </div>
    </Layout>
  );
}