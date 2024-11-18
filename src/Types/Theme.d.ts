// src/types/theme.d.ts
import { PaletteOptions } from '@mui/material/styles/createPalette';

// Extend MUI's palette type to include 'loadingBg'
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    loadingBg: string;
  }
  interface PaletteOptions {
    loadingBg?: string;
  }
}