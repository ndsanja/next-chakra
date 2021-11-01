export const initNeutral = {
  white: "#FFFFFF",
  black: "#000000",
  50: "#FAFAFA",
  100: "#F4F4F5",
  200: "#E4E4E7",
  300: "#D4D4D8",
  400: "#A1A1AA",
  500: "#71717A",
  600: "#52525B",
  700: "#3F3F46",
  800: "#27272A",
  900: "#18181B",
};

export const initNeutralVariant = {
  white: "#FFFFFF",
  black: "#000000",
  50: "#F8FAFC",
  100: "#F1F5F9",
  200: "#E2E8F0",
  300: "#CBD5E1",
  400: "#94A3B8",
  500: "#64748B",
  600: "#475569",
  700: "#334155",
  800: "#1E293B",
  900: "#0F172A",
};

export const initPrimary = {
  white: "#FFFFFF",
  black: "#000000",
  50: "#ECFEFF",
  100: "#CFFAFE",
  200: "#A5F3FC",
  300: "#67E8F9",
  400: "#22D3EE",
  500: "#06B6D4",
  600: "#0891B2",
  700: "#0E7490",
  800: "#155E75",
  900: "#164E63",
};

export const initSecondary = {
  white: "#FFFFFF",
  black: "#000000",
  50: "#FFF1F2",
  100: "#FFE4E6",
  200: "#FECDD3",
  300: "#FDA4AF",
  400: "#FB7185",
  500: "#F43F5E",
  600: "#E11D48",
  700: "#BE123C",
  800: "#9F1239",
  900: "#881337",
};

export const primary = {
  50: initPrimary[50],
  100: initPrimary[100],
  200: initPrimary[200],
  300: initPrimary[300],
  400: initPrimary[400],
  500: initPrimary[500],
  600: initPrimary[600],
  700: initPrimary[700],
  800: initPrimary[800],
  900: initPrimary[900],

  base: initPrimary[500],
  container: initPrimary[100],
  on: {
    base: initPrimary.white,
    container: initPrimary[900],
  },
  dark: {
    base: initPrimary[200],
    container: initPrimary[700],
    on: {
      base: initPrimary[800],
      container: initPrimary[100],
    },
  },
};

export const secondary = {
  50: initSecondary[50],
  100: initSecondary[100],
  200: initSecondary[200],
  300: initSecondary[300],
  400: initSecondary[400],
  500: initSecondary[500],
  600: initSecondary[600],
  700: initSecondary[700],
  800: initSecondary[800],
  900: initSecondary[900],

  base: initSecondary[500],
  container: initSecondary[100],
  on: {
    base: initSecondary.white,
    container: initSecondary[900],
  },
  dark: {
    base: initSecondary[200],
    container: initSecondary[700],
    on: {
      base: initSecondary[800],
      container: initSecondary[100],
    },
  },
};

export const tertiary = {
  50: initSecondary[50],
  100: initSecondary[100],
  200: initSecondary[200],
  300: initSecondary[300],
  400: initSecondary[400],
  500: initSecondary[500],
  600: initSecondary[600],
  700: initSecondary[700],
  800: initSecondary[800],
  900: initSecondary[900],

  base: initSecondary[500],
  container: initSecondary[100],
  on: {
    base: initSecondary.white,
    container: initSecondary[900],
  },
  dark: {
    base: initSecondary[200],
    container: initSecondary[700],
    on: {
      base: initSecondary[800],
      container: initSecondary[100],
    },
  },
};

export const error = {
  50: initSecondary[50],
  100: initSecondary[100],
  200: initSecondary[200],
  300: initSecondary[300],
  400: initSecondary[400],
  500: initSecondary[500],
  600: initSecondary[600],
  700: initSecondary[700],
  800: initSecondary[800],
  900: initSecondary[900],

  base: initSecondary[500],
  container: initSecondary[100],
  on: {
    base: initSecondary.white,
    container: initSecondary[900],
  },
  dark: {
    base: initSecondary[200],
    container: initSecondary[700],
    on: {
      base: initSecondary[800],
      container: initSecondary[100],
    },
  },
};

export const neutral = {
  50: initNeutral[50],
  100: initNeutral[100],
  200: initNeutral[200],
  300: initNeutral[300],
  400: initNeutral[400],
  500: initNeutral[500],
  600: initNeutral[600],
  700: initNeutral[700],
  800: initNeutral[800],
  900: initNeutral[900],
};

export const NeutralVariant = {
  50: initNeutralVariant[50],
  100: initNeutralVariant[100],
  200: initNeutralVariant[200],
  300: initNeutralVariant[300],
  400: initNeutralVariant[400],
  500: initNeutralVariant[500],
  600: initNeutralVariant[600],
  700: initNeutralVariant[700],
  800: initNeutralVariant[800],
  900: initNeutralVariant[900],
};

export const background = {
  base: initNeutral[50],
  on: {
    base: initNeutral[900],
  },
  dark: {
    base: initNeutral[900],
    on: {
      base: initNeutral[100],
    },
  },
};

export const surface = {
  base: initNeutral[50],
  inverse: initNeutral[800],
  on: {
    base: initNeutral[900],
    inverse: initNeutral[50],
  },
  dark: {
    base: initNeutral[900],
    inverse: initNeutral[100],

    on: {
      base: initNeutral[100],
      inverse: initNeutral[800],
    },
  },
  variant: {
    base: initNeutralVariant[100],
    on: {
      base: initNeutralVariant[700],
    },
    dark: {
      base: initNeutralVariant[700],
      on: {
        base: initNeutralVariant[200],
      },
    },
  },
};

export const outline = {
  base: initNeutral[400],
  dark: {
    base: initNeutral[300],
  },
};
