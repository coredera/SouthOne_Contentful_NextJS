/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
//import { EmotionCache } from "@emotion/cache";
//import { CacheProvider } from "@emotion/react";
//import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
//import Head from "next/head";

//import "@fontsource/roboto/latin.css";
import Fonts from './Fonts.js'

//import defaultSEOConfig from "../../next-seo.config";
//import Layout from "components/layout";
//import createEmotionCache from "styles/createEmotionCache";
//import customTheme from "../styles/customTheme";
 
import customTheme from "../styles/customTheme";

import Head from "next/head";
//import "../styles/global.css";

//const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
 // emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
 // emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    
      <ChakraProvider theme={customTheme}>
       
        <Fonts />
        <Head children={undefined} />
        <Component {...pageProps} />
      </ChakraProvider>
   
  );
};

MyApp.defaultProps = {
  //emotionCache: clientSideEmotionCache,
};

export default MyApp;
