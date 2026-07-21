import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import {NextUIProvider} from "@nextui-org/system";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider className="bg-zinc-800">
      <Head>
        <title>Nontaphat&apos;s Portfolio | Software Developer</title>
        <meta name="description" content="Nontaphat's Coding Projects | Software Developer" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}
