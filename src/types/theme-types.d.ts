// src/theme-types.d.ts
import '@mui/material/Paper';
import '@mui/material/Card';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    soft: true;
  }
}
