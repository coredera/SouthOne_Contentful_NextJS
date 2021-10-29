import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "#002B5B",
    200: "#FFDF7F",
    300: "#8FD8FF",
    400: "#E8ED47",
    500: "#FFAA71",
    600: "#FFA4C8",
    700: "#FFFFFF",
    800: "#743D8C",
    900: "#A42C21",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
