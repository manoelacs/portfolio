const figmaColors: tFigmaColors = {
  orange: '#ff9c1b',
  red: '#ec1b09',
  redOrange: '#e80505',
  white: '#ffffff',
  grayLight: '#f2f5f9',
  grayMedium: '#E1E8EF',
  black: '#161516',
  background: '#F2F5F9',
};
const figmaDarkColors: tFigmaColors = {
  orange: '#ff9c1b',
  red: '#ec1b09',
  redOrange: '#e80505',
  white: '#161516', // Dark equivalent of white
  grayLight: '#333333', // Darker shade for light gray
  grayMedium: '#4f4f4f', // Darker shade for medium gray
  black: '#f2f5f9', // Light equivalent of black
  background: '#1a1a1a', // Dark background color
};

const generateTheme = (colors: tFigmaColors) => ({
  figma: {
    ...colors,
  },
  //Default theme
  background: colors.background,
  foreground: colors.black,
  card: {
    DEFAULT: colors.white,
    foreground: colors.black,
  },
  primary: {
    DEFAULT: colors.grayMedium,
    foreground: colors.black,
  },
  seconday: {
    DEFAULT: colors.orange,
    foreground: colors.white,
  },
  muted: {
    DEFAULT: colors.grayLight,
    foreground: colors.grayMedium,
  },
  accent: {
    DEFAULT: colors.orange,
    foreground: colors.white,
  },
  destructive: {
    DEFAULT: colors.red,
    foreground: colors.white,
  },
  border: colors.black,
  input: colors.black,
  ring: colors.black,
});

const lightTheme = generateTheme(figmaColors);
const darkTheme = generateTheme(figmaDarkColors);

export { darkTheme, figmaColors, lightTheme };

type tFigmaColors = {
  orange: string;
  red: string;
  redOrange: string;
  white: string;
  grayLight: string;
  grayMedium: string;
  black: string;
  background: string;
};
