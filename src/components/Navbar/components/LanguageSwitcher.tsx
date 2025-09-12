import { useState } from 'react';
import {
  Box,
  IconButton,
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
  uk: {
    icon: FlagIconUA,
  },
};

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="language-button"
        aria-label="Change language"
        aria-controls={!!anchorEl ? 'language-switcher' : undefined}
        aria-haspopup="true"
        aria-expanded={!!anchorEl ? 'true' : undefined}
        disableRipple
        disableFocusRipple
        size="small"
        sx={{
          lineHeight: 0,
          color: 'inherit',
          borderRadius: 0,
          p: 0,
          width: 22,
          height: 16,
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Box
          component="img"
          src={langs[i18n.language].icon}
          alt={i18n.language}
          loading="lazy"
          sx={{ display: 'block', width: 22, height: 16 }}
        />
      </IconButton>

      <Menu
        id="language-switcher"
        anchorEl={anchorEl}
        open={!!anchorEl}
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
          <MenuItem key={lang} onClick={() => changeLanguage(lang)}>
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
    </>
  );
};

export default LanguageSwitcher;
