import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "#fcfffe",
    200: "#FFDF7F",
    300: "#bfd272", 
    50: "#EAC873",
    400: "#E8ED47",
    500: "#FFAA71",
    600: "#FFA4C8",
    700: "#DEF6FE",
    800: "#743D8C",
    900: "#136175",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
