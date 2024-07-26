import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import logo from '../Images/logo.png'

const pages = ['Home', 'Causes', 'Events', 'Blog', 'Contact'];
const donateNowText = 'Donate Now';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={logo} alt="logo" />

          {/* For mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#b71c1c',
                    '&:hover': {
                      backgroundColor: 'lightcoral',
                      color: '#b71c1c',
                    },
                    textTransform: 'none',
                  }}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* For desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  mx: 2,
                  color: '#b71c1c',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                {page}
              </Button>
            ))}
            <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: '800',
                    backgroundColor: '#b71c1c',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#b71c1c',
                    },
                  }}
                >
                  <FavoriteBorderIcon sx={{ marginRight: '0.5rem' }} />
                  {donateNowText}
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;