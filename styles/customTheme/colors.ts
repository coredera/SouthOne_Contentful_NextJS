import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "#fcfffe",
    200: "#FFDF7F",
    300: "#8FD8FF",
    50: "#f5fcfc",
    400: "#E8ED47",
    500: "#FFAA71",
    600: "#FFA4C8",
    700: "#DEF6FE",
    800: "#743D8C",
    900: "#A42C21",
    150: "#1b9ca4",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
