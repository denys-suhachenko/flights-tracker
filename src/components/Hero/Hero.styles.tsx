import type { Theme } from '@mui/material';

const styles = {
  mainHeader: {
    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1733302811464-5218db3c0d96?q=80&w=2070')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    position: 'relative',
    pt: 16,
  },
  wrapper: (theme: Theme) => ({
    position: 'relative',
    '&::after': {
      content: '""',
      pointerEvents: 'none',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      boxShadow: theme.shadows[4],
    },
  }),
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    zIndex: 1,
  },
  container: {
    px: 4,
    pt: 6,
    pb: 12,
    position: 'relative',
    zIndex: 2,
  },
};

export default styles;
