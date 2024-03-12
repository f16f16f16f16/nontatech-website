import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";


function App({ Component, pageProps }) {
  return (
    <NextUIProvider className="bg-white">
      <Head>
        <title>Nontaphat's Portfolio | Web Developer</title>
        <meta name="description" content="Nontaphat's Coding Projects | Software Developer" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}

export default App;