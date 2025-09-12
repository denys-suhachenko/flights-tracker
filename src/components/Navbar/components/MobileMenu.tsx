import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { t } from 'i18next';

interface MobileMenuProps {
  pages?: string[];
}

const MobileMenu = ({ pages }: MobileMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <IconButton
        aria-controls={!!anchorEl ? 'navbar-mobile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={!!anchorEl ? 'true' : undefined}
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="navbar-mobile-menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        {pages?.map((page) => (
          <MenuItem key={page} onClick={() => setAnchorEl(null)}>
            {t(`navbar.items.${page}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MobileMenu;
