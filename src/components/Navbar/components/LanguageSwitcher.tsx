import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white' }}
            >
                {i18n.language}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => changeLanguage('en')}>
                    {t('navbar.en')}
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('ua')}>
                    {t('navbar.ua')}
                </MenuItem>
            </Menu>
        </div>
    );
};

export default LanguageSwitcher;
