import type { Theme } from '@mui/material';

import HeroImage from '@app/assets/images/hero.png';

const styles = {
  mainHeader: {
    backgroundImage: `url(${HeroImage})`,
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
  navbarAnchor: {
    position: 'absolute',
    top: 0,
    height: 1,
    width: 1,
    pointerEvents: 'none',
  },
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
