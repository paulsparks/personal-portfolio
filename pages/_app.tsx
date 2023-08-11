import { AppLayout } from "@/components/AppLayout";
import type { AppProps } from "next/app";
import "../styles/global.css";



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}