import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import {
  primary,
  secondary,
  tertiary,
  error,
  neutral,
  NeutralVariant,
  surface,
  background,
  outline,
} from "./colorHex";
import { button } from "./variants";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "primary.base",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};
const brandRing = {
  _focus: {
    ring: 3,
    ringColor: "primary.base",
  },
};

const theme = extendTheme(
  {
    colors: {
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
      error: error,
      neutral: neutral,
      neutralVariant: NeutralVariant,
      surface: surface,
      background: background,
      outline: outline,
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: button,
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
