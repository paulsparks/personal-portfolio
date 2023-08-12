import { AppLayout } from "@/components/AppLayout";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { ConfigProvider } from "antd";



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#bc6c25",
          colorTextSecondary: "#dda15e",
        }
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ConfigProvider>
  );
}