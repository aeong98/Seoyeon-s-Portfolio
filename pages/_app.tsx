import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Footer from "../components/layout/Footer/Footer";
import Layout from "../components/layout/Layout/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Seoyeon&apos;s Website</title>
        <meta name="description" content="Seoyeon's Web Portfolio" />
        <meta
          name="viewport"
          content="width=device-width initial-scale=1"
        ></meta>
      </Head>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
        <Footer />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
