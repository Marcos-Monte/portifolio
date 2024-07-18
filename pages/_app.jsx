import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Portifólio de Marcos Monte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marcos Monte</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
