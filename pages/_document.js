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
      <Html lang="en">
        
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      
      </Html>
      
    );
  }
}

export default MyDocument;
