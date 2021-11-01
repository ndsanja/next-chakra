import { mode } from "@chakra-ui/theme-tools";

export const button = {
  variants: {
    primary: (props: any) => ({
      rounded: "none",
      color: mode("primary.on.base", "primary.dark.on.base")(props),
      backgroundColor: mode("primary.base", "primary.dark.base")(props),

      _hover: {
        backgroundColor: mode("primary.600", "primary.300")(props),
      },

      _active: {
        backgroundColor: mode("primary.700", "primary.400")(props),
      },
      _focus: {
        backgroundColor: mode("primary.700", "primary.400")(props),
        ring: 3,
        ringColor: "primary.500",
      },
    }),

    secondary: (props: any) => ({
      rounded: "none",
      color: mode("secondary.on.base", "secondary.dark.on.base")(props),
      backgroundColor: mode("secondary.base", "secondary.dark.base")(props),

      _hover: {
        backgroundColor: mode("secondary.600", "secondary.300")(props),
      },

      _active: {
        backgroundColor: mode("secondary.700", "secondary.400")(props),
      },
      _focus: {
        backgroundColor: mode("secondary.700", "secondary.400")(props),
        ring: 3,
        ringColor: "secondary.500",
      },
    }),

    tertiary: (props: any) => ({
      rounded: "none",
      color: mode("secondary.on.base", "secondary.dark.on.base")(props),
      backgroundColor: mode("secondary.base", "secondary.dark.base")(props),

      _hover: {
        backgroundColor: mode("secondary.600", "secondary.300")(props),
      },

      _active: {
        backgroundColor: mode("secondary.700", "secondary.400")(props),
      },
      _focus: {
        backgroundColor: mode("secondary.700", "secondary.400")(props),
        ring: 3,
        ringColor: "secondary.500",
      },
    }),

    error: (props: any) => ({
      rounded: "none",
      color: mode("secondary.on.base", "secondary.dark.on.base")(props),
      backgroundColor: mode("secondary.base", "secondary.dark.base")(props),

      _hover: {
        backgroundColor: mode("secondary.600", "secondary.300")(props),
      },

      _active: {
        backgroundColor: mode("secondary.700", "secondary.400")(props),
      },
      _focus: {
        backgroundColor: mode("secondary.700", "secondary.400")(props),
        ring: 3,
        ringColor: "secondary.500",
      },
    }),
  },
};
