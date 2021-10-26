
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../styles/customTheme";
//import Fonts from "./Fonts.js";

import "@fontsource/roboto/latin.css";

 // TODO: Add custom theme configuration to "theme" prop.
 // https://chakra-ui.com/docs/getting-started#add-custom-theme-optional

const theme = customTheme;

 function MyApp({ Component, pageProps }) {
   return (
     <ChakraProvider theme={customTheme}>
       <Component {...pageProps} />
     </ChakraProvider>
   );
 }

 export default MyApp;