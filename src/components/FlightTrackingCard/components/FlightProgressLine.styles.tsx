import { grey, blueGrey } from '@mui/material/colors';

const styles = {
  destinationDot: {
    flexShrink: 0,
    borderRadius: '50%',
    bgcolor: blueGrey[700],
    width: 10,
    height: 10,
  },
  solidLine: (width: string) => ({
    height: 2,
    width,
    backgroundImage: `linear-gradient(to right, ${grey[300]}, ${grey[300]})`,
  }),
  dashedLine: (width: string) => ({
    height: 2,
    width,
    backgroundImage:
      `repeating-linear-gradient(to right, ${grey[300]} 0 6px, transparent 6px 12px)`,
  }),
  flightIcon: {
    transform: 'rotate(90deg)',
    fontSize: 40,
    zIndex: 1,
    marginTop: '2px',
    color: blueGrey[500],
  },
};

export default styles;
