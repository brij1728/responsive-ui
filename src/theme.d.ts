declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger: React.CSSProperties["color"];
    };
  }
}

export default function createTheme(
  options?: ThemeOptions,
  ...args: object[]
): Theme;
