//import ContentWrapperStyles from "@styles/ContentWrapper.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "/pages/_fonts";

export default function ContentWrapper({ children }) {
  return <div className={ChakraProvider}><Fonts />{children}</div>;
  //return <div className={ContentWrapperStyles.container}>{children}</div>;
}
