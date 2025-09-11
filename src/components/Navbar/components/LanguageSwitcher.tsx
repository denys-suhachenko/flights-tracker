import { useState } from 'react';
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import FlagIconEN from '@app/assets/images/flags/us.svg';
import FlagIconUA from '@app/assets/images/flags/ua.svg';

const langs: Record<string, { icon: string }> = {
  en: {
    icon: FlagIconEN,
  },
  ua: {
    icon: FlagIconUA,
  },
};

// en-GB to en
const simplifyLocale = (lang: string) => {
  return lang.split('-')[0];
};

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
        <img src={langs[simplifyLocale(i18n.language)].icon} height={16} />
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
        {Object.entries(langs).map(([lang, val]) => (
          <MenuItem onClick={() => changeLanguage(lang)}>
            <ListItemIcon>
              <img src={val.icon} alt={lang} height={16} />
            </ListItemIcon>
            <ListItemText
              primary={t(`navbar.${lang}`, {
                defaultValue: lang,
              })}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
