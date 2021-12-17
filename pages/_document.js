import Document, { Html, Head, Main, NextScript } from "next/document";

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
      <Html lang="en" >
        <Head>
          {/* Google Tag Manager - Global base code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKM32MM');
               `,
            }}
          />
        
        <base href="https://gd-blog.netlify.app/" />
        </Head>

        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WKM32MM"
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
