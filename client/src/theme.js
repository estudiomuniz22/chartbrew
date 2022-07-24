import { createTheme } from "@nextui-org/react";

import { darkTransparent, dark } from "./config/colors";

const lightTheme = {
  colors: {
    blue50: "#EAFAFF",
    blue100: "#BBE2EF",
    blue200: "#8AC9DD",
    blue300: "#66B4CD",
    blue400: "#3E9CBB",
    blue500: "#2E90B0",
    blue600: "#1A7FA0",
    blue700: "#045E7B",
    blue800: "#033646",
    blue900: "#002B39",
    blue1000: "#091720",

    orange50: "#FFF6F3",
    orange100: "#FFECE4",
    orange200: "#EAFAFF",
    orange300: "#FFDED2",
    orange400: "#FFB89E",
    orange500: "#F8A78A",
    orange600: "#F69977",
    orange700: "#F28057",
    orange800: "#F17041",
    orange900: "#E54F18",

    green50: "#E9FFF2",
    green100: "#C0F1D4",
    green200: "#95E5B5",
    green300: "#73D199",
    green400: "#45CC7B",
    green500: "#20D267",
    green600: "#0FC457",
    green700: "#04B149",
    green800: "#05983F",
    green900: "#00762F",

    red50: "#FFF4F4",
    red100: "#FEDDDD",
    red200: "#FBC0C0",
    red300: "#FCA5A5",
    red400: "#F48484",
    red500: "#F36060",
    red600: "#EF4444",
    red700: "#E53232",
    red800: "#DE1313",
    red900: "#C90808",

    primary: "$blue600",
    secondary: "$orange600",

    primaryLight: "$blue200",
    primaryLightHover: "$blue300",
    primaryLightActive: "$blue400",
    primaryLightContrast: "$blue600",
    primaryBorder: "$blue500",
    primaryBorderHover: "$blue600",
    primarySolidHover: "$blue700",
    primarySolidContrast: "$blue50",
    primaryShadow: "$blue500",

    secondaryLight: "$orange200",
    secondaryLightHover: "$orange300",
    secondaryLightActive: "$orange400",
    secondaryLightContrast: "$orange600",
    secondaryBorder: "$orange500",
    secondaryBorderHover: "$orange600",
    secondarySolidHover: "$orange700",
    secondarySolidContrast: "$orange50",
    secondaryShadow: "$orange500",

    gradient: "linear-gradient(112deg, $blue600 -3.59%, $blue600 -20.3%, $orange800 80.46%)",
    gradientShadow: "linear-gradient(112deg, $blue600 -3.59%, $blue600 -20.3%, $orange800 80.46%)",
    link: "#5E1DAD",
    headerBackground: darkTransparent(0.8),
    background: "#F2F6FB",
    backgroundContrast: "#fff",
  },
  space: {},
  fonts: {
    sans: "Inter, sans-serif",
  },
  fontWeights: {
    medium: "600",
  }
};

const darkTheme = {
  colors: {
    blue1000: "#EAFAFF",
    blue900: "#BBE2EF",
    blue800: "#8AC9DD",
    blue700: "#66B4CD",
    blue600: "#3E9CBB",
    blue500: "#2E90B0",
    blue400: "#1A7FA0",
    blue300: "#045E7B",
    blue200: "#033646",
    blue100: "#002B39",
    blue50: "#091720",

    orange900: "#FFF6F3",
    orange800: "#FFECE4",
    orange700: "#EAFAFF",
    orange600: "#FFDED2",
    orange500: "#FFB89E",
    orange400: "#F8A78A",
    orange300: "#F69977",
    orange200: "#F28057",
    orange100: "#F17041",
    orange50: "#E54F18",

    green900: "#E9FFF2",
    green800: "#C0F1D4",
    green700: "#95E5B5",
    green600: "#73D199",
    green500: "#45CC7B",
    green400: "#20D267",
    green300: "#0FC457",
    green200: "#04B149",
    green100: "#05983F",
    green50: "#00762F",

    red50: "#FFF4F4",
    red100: "#FEDDDD",
    red200: "#FBC0C0",
    red300: "#FCA5A5",
    red400: "#F48484",
    red500: "#F36060",
    red600: "#EF4444",
    red700: "#E53232",
    red800: "#DE1313",
    red900: "#C90808",

    primary: "$blue600",
    secondary: "$orange600",

    primaryLight: "$blue200",
    primaryLightHover: "$blue300",
    primaryLightActive: "$blue400",
    primaryLightContrast: "$blue600",
    primaryBorder: "$blue500",
    primaryBorderHover: "$blue600",
    primarySolidHover: "$blue700",
    primarySolidContrast: "$blue50",
    primaryShadow: "$blue500",

    secondaryLight: "$orange200",
    secondaryLightHover: "$orange300",
    secondaryLightActive: "$orange400",
    secondaryLightContrast: "$orange600",
    secondaryBorder: "$orange500",
    secondaryBorderHover: "$orange600",
    secondarySolidHover: "$orange700",
    secondarySolidContrast: "$orange50",
    secondaryShadow: "$orange500",

    gradient: "linear-gradient(112deg, $blue600 -3.59%, $blue600 -20.3%, $orange800 80.46%)",
    gradientShadow: "linear-gradient(112deg, $blue600 -3.59%, $blue600 -20.3%, $orange800 80.46%)",
    link: "#5E1DAD",
    headerBackground: darkTransparent(0.8),
    background: "#000",
    backgroundContrast: dark,
  },
  space: {},
  fonts: {
    sans: "Inter, sans-serif",
  },
  fontWeights: {
    medium: "600",
  }
};

function getThemeConfig(type = "light") {
  return createTheme({
    type,
    theme: type === "light" ? lightTheme : darkTheme,
  });
}

export default getThemeConfig;