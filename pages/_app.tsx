import { AppLayout } from "@/components/AppLayout";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { ConfigProvider } from "antd";
import Head from "next/head";



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
      <Head><title>Paul Sparks</title></Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ConfigProvider>
  );
}