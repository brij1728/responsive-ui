declare module "@mui/material/styles/createPalette" {
  interface Palette {
    otherColor: {
      main?: string;
    };
  }
  interface PaletteOptions {
    otherColor: {
      main?: string;
    };
  }
}

export default function createPalette(palette: PaletteOptions): Palette;
