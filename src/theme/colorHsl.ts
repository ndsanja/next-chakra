export const initSecondary = {
  hColor: 148,
  sColor: "94%",
  lColor: "40",
};

export const initPrimary = {
  white: "#FFFFFF",
  black: "#000000",
  hColor: 0,
  sColor: "100%",
  lColor: "31%",
};

export const step = {
  900: "10%",
  800: "20%",
  700: "30%",
  600: "40%",
  500: "50%",
  400: "60%",
  300: "70%",
  200: "80%",
  100: "90%",
  50: "95%",
};

export const primary = {
  50: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[50]})`,
  100: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[100]})`,
  200: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[200]})`,
  300: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[300]})`,
  400: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[400]})`,
  500: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[500]})`,
  600: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[600]})`,
  700: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[700]})`,
  800: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[800]})`,
  900: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[900]})`,
  base: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[500]})`,
  container: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[100]})`,
  on: {
    base: initPrimary.white,
    container: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[900]})`,
  },
  dark: {
    base: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[200]})`,
    container: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[700]})`,
    on: {
      base: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[800]})`,
      container: `hsl(${initPrimary.hColor},${initPrimary.sColor},${step[100]})`,
    },
  },
};
