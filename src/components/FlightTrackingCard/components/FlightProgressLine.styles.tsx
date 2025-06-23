const styles = {
    destinationDot: {
        position: 'relative',
        width: 10,
        height: 10,
        borderRadius: '50%',
        bgcolor: 'success.main',
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            height: 2,
            width: 200,
            transform: 'translateY(-50%)',
        },
    },
    departureDotLine: {
        '&::before': {
            left: '100%',
            backgroundImage: 'linear-gradient(to right, grey, grey)',
        },
    },
    arrivalDotLine: {
        '&::after': {
            right: '100%',
            backgroundImage:
                'repeating-linear-gradient(to right, grey 0 6px, transparent 6px 12px)',
        },
    },
    flightIcon: {
        transform: 'rotate(90deg)',
        fontSize: 40,
        zIndex: 1,
        marginTop: '2px',
        color: 'blue.500',
    },
};

export default styles;
