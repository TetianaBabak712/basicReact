import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png'
import { NavLink } from 'react-router-dom';
import './menuNavigation.css';
import { MENU } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect, useRef } from 'react';
import { setSearch } from '../../store/SearchSlice';


const pages = ['Home', 'TV Show'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const apiSearch = useSelector((state) => state.search.search);
    const searchRef = useRef("");
    const dispatch = useDispatch();

    useEffect(() => {
      searchRef.current.focus();
    }, []);
  
  
  
    const handleSearch = (e) => {
      dispatch(setSearch(e.target.value));
    };
    

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

 

  return (
    <AppBar position="fixed" sx={{backgroundColor: "rgba(0, 0, 0, 0.8)", top: 0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="logo"
            src={logo}
            sx={{
              width: "300px",
              height: "50px",
            }}
          >
        
          </Avatar>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-evenly' }}>
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
                justifyContent: 'space-evenly',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {MENU.map(({name, link}, index) => (
              <NavLink key={index} className={({isActive}) => `navLink ${isActive ? "isActive" : ""}`} to={link}>{name}</NavLink>
            ))}
          </Box>
              <Box>
              <input type='text' value={apiSearch} onChange={handleSearch} ref={searchRef} 
              style={{color:'#fff', backgroundColor: 'rgba(209, 208, 209, .6)', width:"200px", height: '30px', border: 'none',marginRight: "25px"}}
             /> 
              </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
