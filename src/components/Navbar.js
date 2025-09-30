import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const testButtonRef = useRef(null);
  const leaveTimeout = useRef(null);

  const toggleDrawer = (open) => () => setMobileOpen(open);

  // Timeout reference for menu close delay
  const closeTimeoutRef = useRef(null);

  // Clear any pending timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuOpen = (menuName, buttonRef) => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    setActiveMenu(menuName);
    setAnchorEl(buttonRef.current);
  };

  const handleMenuClose = () => {
    leaveTimeout.current = setTimeout(() => {
      if (activeMenu) {
        setAnchorEl(null);
        setActiveMenu(null);
      }
    }, 300);
  };

  const cancelMenuClose = () => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
  };

  const handleClick = (menuName, buttonRef) => {
    if (activeMenu === menuName) {
      setAnchorEl(null);
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
      setAnchorEl(buttonRef.current);
    }
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeout.current) {
        clearTimeout(leaveTimeout.current);
      }
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((!menuRef.current || !menuRef.current.contains(event.target)) && 
          (!buttonRef.current || !buttonRef.current.contains(event.target)) &&
          (!testButtonRef.current || !testButtonRef.current.contains(event.target))) {
        setAnchorEl(null);
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const drawer = (
    <Box sx={{ width: 300 }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItemButton component={NavLink} to="/" onClick={toggleDrawer(false)} sx={{ '&.active': { color: 'primary.main' }}}>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/about" onClick={toggleDrawer(false)} sx={{ '&.active': { color: 'primary.main' }}}>
          <ListItemText primary="About" />
        </ListItemButton>

        {/* Investor Relation */}
        <ListItemButton onClick={() => setInvestorOpen((o) => !o)}>
          <ListItemText primary="Investor Relation" />
          {investorOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={investorOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/financial-results" onClick={toggleDrawer(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <ListItemText primary="Financial Results" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} disabled>
              <ListItemText primary="Shareholding Pattern" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/agm-egm-notice" onClick={toggleDrawer(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <ListItemText primary="AGM / EGM Notice" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/stock-exchange-disclosure" onClick={toggleDrawer(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <ListItemText primary="Stock Exchange Disclosure" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} disabled>
              <ListItemText primary="Investor Grievance" />
            </ListItemButton>
            {/* Code Of Conduct */}
            <ListItemButton sx={{ pl: 4 }} disabled>
              <ListItemText primary="Code Of Conduct" />
            </ListItemButton>
            <List sx={{ pl: 6 }}>
              <ListItemButton disabled>
                <ListItemText primary="Directors" />
              </ListItemButton>
              <ListItemButton disabled>
                <ListItemText primary="Employees" />
              </ListItemButton>
            </List>
            {/* Statutory Document */}
            <ListItemButton sx={{ pl: 4 }} disabled>
              <ListItemText primary="Statutory Document" />
            </ListItemButton>
            <List sx={{ pl: 6 }}>
              <ListItemButton disabled>
                <ListItemText primary="Annual Return" />
              </ListItemButton>
              <ListItemButton disabled>
                <ListItemText primary="Other Statutory" />
              </ListItemButton>
            </List>
            <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/shareholders-help-desk/scrutinizers-reports" onClick={toggleDrawer(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <ListItemText primary="Scrutinizer's Reports" />
            </ListItemButton>
            {/* Shareholder's Help Desk */}
            <ListItemButton sx={{ pl: 4 }} disabled>
              <ListItemText primary="Shareholder's Help Desk" />
            </ListItemButton>
            <List sx={{ pl: 6 }}>
              <ListItemButton disabled>
                <ListItemText primary="Contact" />
              </ListItemButton>
              <ListItemButton disabled>
                <ListItemText primary="FAQ" />
              </ListItemButton>
              <ListItemButton component={NavLink} to="/agm-egm-notice" onClick={toggleDrawer(false)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <ListItemText primary="AGM/EGM Notice" />
              </ListItemButton>
            </List>
          </List>
        </Collapse>

        <Divider sx={{ my: 1 }} />
        <ListItemButton component={NavLink} to="/policies" onClick={toggleDrawer(false)} sx={{ '&.active': { color: 'primary.main' }}}>
          <ListItemText primary="Policies" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/contact" onClick={toggleDrawer(false)} sx={{ '&.active': { color: 'primary.main' }}}>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" color="primary" sx={{ textDecoration: 'none', fontWeight: 600 }}>
            Bluehope
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button component={NavLink} to="/" color="inherit" sx={{ '&.active': { color: 'primary.main', borderBottom: '2px solid', borderColor: 'primary.main' }}}>Home</Button>
            <Button component={NavLink} to="/about" color="inherit" sx={{ '&.active': { color: 'primary.main', borderBottom: '2px solid', borderColor: 'primary.main' }}}>About</Button>
            
            <div
              ref={buttonRef}
              onMouseEnter={() => handleMenuOpen('investor', buttonRef)}
              onMouseLeave={handleMenuClose}
              style={{ display: 'inline-block' }}
            >
              <Button 
                color="inherit"
                onClick={() => handleClick('investor', buttonRef)}
                aria-controls="investor-menu"
                aria-haspopup="true"
                aria-expanded={activeMenu === 'investor'}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                  },
                  '&.active': { 
                    color: 'primary.main', 
                    borderBottom: '2px solid', 
                    borderColor: 'primary.main' 
                  },
                  '& .MuiButton-endIcon': {
                    display: 'none'
                  }
                }}
              >
                Investor Relation
              </Button>
              <Menu
                id="investor-menu"
                anchorEl={anchorEl}
                open={activeMenu === 'investor' && Boolean(anchorEl)}
                onClose={() => {
                  setAnchorEl(null);
                  setActiveMenu(null);
                }}
                MenuListProps={{
                  'aria-labelledby': 'investor-button',
                  onMouseEnter: cancelMenuClose,
                  onMouseLeave: handleMenuClose,
                }}
                ref={menuRef}
                disableAutoFocusItem
                keepMounted
                sx={{
                  zIndex: 1301,
                  '& .MuiPaper-root': {
                    mt: 1.5,
                    minWidth: 250,
                    boxShadow: 3,
                    padding: '4px 0',
                  },
                }}
                disableAutoFocus
                disableEnforceFocus
                disablePortal
                style={{ position: 'fixed' }}
              >
                <MenuItem 
                  component={NavLink} 
                  to="/financial-results" 
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }}}
                >
                  Financial Results
                </MenuItem>
                <MenuItem 
                  component={NavLink}
                  to="/annual-reports"
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }}}
                >
                  Annual Reports
                </MenuItem>
                <MenuItem 
                  component={NavLink}
                  to="/investor-presentations"
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }}}
                >
                  Investor Presentations
                </MenuItem>
                <MenuItem disabled>Shareholding Pattern</MenuItem>
                <MenuItem 
                  component={NavLink} 
                  to="/stock-exchange-disclosure" 
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }}}
                >
                  Stock Exchange Disclosure
                </MenuItem>
                <MenuItem disabled>Investor Grievance</MenuItem>
                <Divider />
                <MenuItem disabled>Code Of Conduct</MenuItem>
                <MenuItem disabled sx={{ pl: 4 }}>Directors</MenuItem>
                <MenuItem disabled sx={{ pl: 4 }}>Employees</MenuItem>
                <Divider />
                <MenuItem disabled>Statutory Document</MenuItem>
                <MenuItem disabled sx={{ pl: 4 }}>Annual Return</MenuItem>
                <MenuItem disabled sx={{ pl: 4 }}>Other Statutory</MenuItem>
                <Divider />
                <MenuItem 
                  component={NavLink}
                  to="/board-of-directors"
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }}}
                >
                  Board of Directors
                </MenuItem>
                <MenuItem 
                  component={NavLink}
                  to="/company-policies"
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }}}
                >
                  Company Policies
                </MenuItem>
                <Divider />
                <MenuItem disabled>Shareholder's Help Desk</MenuItem>
                <MenuItem disabled sx={{ pl: 4 }}>Contact</MenuItem>
                <MenuItem disabled sx={{ pl: 4 }}>FAQ</MenuItem>
                <MenuItem 
                  component={NavLink} 
                  to="/agm-egm-notice" 
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }, pl: 4 }}
                >
                  AGM / EGM Notice
                </MenuItem>
                <MenuItem 
                  component={NavLink} 
                  to="/shareholders-help-desk/scrutinizers-reports" 
                  onClick={() => setAnchorEl(null)}
                  sx={{ '&.active': { color: 'primary.main' }, pl: 4 }}
                >
                  Scrutinizer's Reports
                </MenuItem>
              </Menu>
            </div>
            
            <Button component={NavLink} to="/policies" color="inherit" sx={{ '&.active': { color: 'primary.main', borderBottom: '2px solid', borderColor: 'primary.main' }}}>Policies</Button>
            <Button component={NavLink} to="/contact" color="inherit" sx={{ '&.active': { color: 'primary.main', borderBottom: '2px solid', borderColor: 'primary.main' }}}>Contact</Button>
          </Box>

          <IconButton 
            color="inherit" 
            edge="start" 
            sx={{ ml: 1, display: { md: 'none' } }} 
            onClick={toggleDrawer(true)} 
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar; 
