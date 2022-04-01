// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  ...chakraTheme.fonts,
  heading: "castledown-heavy",
  body: "castledown-regular",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "20em",
  //lg: "64em",
 
});

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
};

const theme = extendTheme({ overrides });

export default theme

// 3. Pass the `theme` prop to the `ChakraProvider`
/**function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  );
}**/
