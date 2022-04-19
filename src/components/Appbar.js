import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import './components.css'


const ResponsiveAppBar = ({user}) => {
  let navigate = useNavigate();
  const sx = { backgroundColor: 'white', color: 'black' }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={sx} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate('/')}
            component="div"
            sx={{ ml: 5, display: { xs: 'none', md: 'none', lg: 'flex' }, cursor: 'pointer', color: '#fcbd2e', fontWeight: 600 }}
          >
            Kakarla <span className='logotext'> Dental</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}>
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
                display: { xs: 'block', md: 'block', lg: 'none' },
              }}
            >
              <MenuItem  >
                <Typography onClick={() => navigate('/')} textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem >
                <Typography onClick={() => navigate('/about')} textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem >
                <Typography onClick={() => navigate('/testimonials')} textAlign="center">Testimonials</Typography>
              </MenuItem>
              <MenuItem  >
                <Typography onClick={() => navigate('/specialities')} textAlign="center">Specialities</Typography>
              </MenuItem>
              <MenuItem >
                <Typography onClick={() => navigate('/contact')} textAlign="center">Contact Us</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate('/login')}>
                <Typography textAlign="center">{user?'Appointments':'Login'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' }, fontWeight: 600 }}
          >
            Kakarla Dental
          </Typography>
          <Box sx={{ ml: 30, flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex', }, justifyContent: 'space-around', alignItems: 'center' }}>
            <Link onClick={() => navigate('/')} color="inherit" underline="none" sx={{
              '&:hover': { color: '#fcbd2e', cursor: 'pointer' },
              color: window.location.pathname === '/' && '#fcbd2e', display: 'block', fontWeight: 600
            }}>
              Home
            </Link>
            <Link onClick={() => navigate('/about')} color="inherit" underline="none" sx={{
              '&:hover': { color: '#fcbd2e', cursor: 'pointer' },
              color: window.location.pathname === '/about' && '#fcbd2e', display: 'block', fontWeight: 600
            }}>
              About
            </Link>
            <Link onClick={() => navigate('/testimonials')} color="inherit" underline="none" sx={{
              '&:hover': { color: '#fcbd2e', cursor: 'pointer' },
              color: window.location.pathname === '/testimonials' && '#fcbd2e', display: 'block', fontWeight: 600
            }}>
              Testimonials
            </Link>
            <Link onClick={() => navigate('/specialities')} color="inherit" underline="none" sx={{
              '&:hover': { color: '#fcbd2e', cursor: 'pointer' },
              color: window.location.pathname === '/specialities' && '#fcbd2e', display: 'block', fontWeight: 600
            }}>
              Specialities
            </Link>
            <Link onClick={() => navigate('/contact')} color="inherit" underline="none" sx={{
              '&:hover': { color: '#fcbd2e', cursor: 'pointer' },
              color: window.location.pathname === '/contact' && '#fcbd2e', display: 'block', fontWeight: 600
            }}>
              Contact Us
            </Link>
            <Link onClick={() => navigate('/login')} color="inherit" underline="none" sx={{
              '&:hover': { color: '#fcbd2e', cursor: 'pointer' },
              color: window.location.pathname === '/login' && '#fcbd2e', display: 'block', fontWeight: 600
            }}>
              {user?'Appointments':'Login'}
            </Link>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
