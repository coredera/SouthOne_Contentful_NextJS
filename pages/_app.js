
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Fonts from "./_fonts";

 // TODO: Add custom theme configuration to "theme" prop.
 // https://chakra-ui.com/docs/getting-started#add-custom-theme-optional

 function MyApp({ Component, pageProps }) {
   return (
     <ChakraProvider resetCSS theme={theme}>
       <Fonts />
       <Component {...pageProps} />
     </ChakraProvider>
   );
 }

 export default MyApp;