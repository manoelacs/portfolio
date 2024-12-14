const figmaLightColors: tFigmaColors = {
  orange: '#ff9c1b', // Accent and primary button color
  orangeLight: '#FFEBD1', // Lighter accent color
  red: '#ec1b09', // Destructive action color
  redOrange: '#e80505', // Alerts or warnings

  white: '#ffffff', // Primary text color on dark backgrounds
  black: '#000000', // Primary text color on light backgrounds
  foreground: '#161516', // Main text color (dark gray for contrast)

  grayLight: '#f2f5f9', // Background for cards and sections
  grayMedium: '#e1e8ef', // Borders and input backgrounds

  background: '#f2f5f9', // Main background color (off-white)
};

const figmaDarkColors: tFigmaColors = {
  orange: '#ff9c1b', // Accent color remains consistent
  orangeLight: '#4A3B2F', // Lighter accent color
  red: '#ec1b09', // Destructive action color remains
  redOrange: '#e80505', // Alerts or warnings

  white: '#000000', // Light text on dark backgrounds
  black: '#000000', // Primary text color on light backgrounds
  foreground: '#e5e7eb', // Main text color (light gray)

  grayLight: '#2d2f33', // Background for cards and sections
  grayMedium: '#3c3f44', // Borders and input backgrounds

  background: '#1a1c1e', // Main background color (dark gray)
};

const generateTheme = (colors: tFigmaColors) => ({
  figma: {
    ...colors,
  },
  border: colors.grayMedium,
  input: colors.grayMedium,
  ring: colors.orange,
  background: colors.background,
  foreground: colors.foreground,

  primary: {
    DEFAULT: colors.white,
    foreground: colors.foreground,
  },
  secondary: {
    DEFAULT: colors.grayMedium,
    foreground: colors.foreground,
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
});

const lightTheme = generateTheme(figmaLightColors);
const darkTheme = generateTheme(figmaDarkColors);

export { darkTheme, lightTheme };

type tFigmaColors = {
  orange: string;
  orangeLight: string;
  red: string;
  redOrange: string;
  white: string;
  black: string;
  grayLight: string;
  grayMedium: string;
  foreground: string;
  background: string;
};
