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


const ResponsiveAppBar = ({ user }) => {
  let navigate = useNavigate();
  const sx = { backgroundColor: 'white', color: 'black' }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

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
            sx={{ ml: 5, display: { xs: 'none', md: 'none', lg: 'flex' }, cursor: 'pointer', fontWeight: 600 }}
          >
            MEET <span className='logotext'> IITIANS</span>
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
                vertical: 'bottom',
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
                <Typography ar onClick={() => navigate('/testimonials')} textAlign="center">Testimonials</Typography>
              </MenuItem>
              <MenuItem  >
                <div >
                  <Typography aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick1}
                    textAlign="center">Courses</Typography>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open1}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </MenuItem>
              <MenuItem >
                <Typography onClick={() => navigate('/contact')} textAlign="center">Contact Us</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate('/login')}>
                <Typography textAlign="center">{user ? 'Appointments' : 'Login'}</Typography>
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
            <div>
              <Link aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
                underline="none"
                sx={{ '&:hover': { color: '#fcbd2e', cursor: 'pointer' }, color: window.location.pathname === '/courses' && '#fcbd2e', display: 'block', fontWeight: 600 }}>
                Courses
              </Link>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>

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
              {user ? 'Appointments' : 'Login'}
            </Link>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
