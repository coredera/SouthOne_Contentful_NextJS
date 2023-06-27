import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

//import {
//  ChakraProvider,
//  Container,
//  extendTheme,
//  Heading,
//  Stack,
//  Text,
//} from '@chakra-ui/react'

//import {Fonts} from "./Fonts.js";
//import { gtheme } from "../styles/customTheme/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager - Global base code */}

          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `

           

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied'
  });

  






               `,
            }}
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
          ></script>

          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `

           

 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}', { page_path: window.location.pathname });


  gtag('event', 'page_view', {
    page_title: window.location.pathname,
    page_location: window.location.pathname
  });



               `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
`,
            }}
          />
        </Head>

        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id="
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>

          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
