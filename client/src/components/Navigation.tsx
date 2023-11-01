import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, InputBase } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Search as SearchIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { styled, createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import products from '../data/products.json';
import SearchBar from './SearchBar';

const theme = createTheme();

const Search = styled('div')({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  marginLeft: theme.spacing(2),
  width: '700px', 
});

const SearchIconWrapper = styled('div')({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black', 
});

const Input = styled(InputBase)(({ theme }) => ({
  input: {
    color: 'black', 
  },
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
}));

const Navigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuId, setMenuId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuId: string) => {
    setAnchorEl(event.currentTarget);
    setMenuId(menuId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(undefined);
  };

  const generateCategoryClickHandler = (category: string, producer?: string) => {
    navigate(`/category/${category}/${producer || ''}`);
    handleMenuClose();
  };

  const handleLoginClick = () => {
    console.log("Login button clicked");
  };

  const handleSignupClick = () => {
    console.log("Signup button clicked");
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchResults([]); 
  };

  const handleProductClick = (product: { id: any; }) => {
    navigate(`/products/${product.id}`);
    handleSearchClose(); 
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'common.white' }}>
          My Online Store
        </Typography>
        <Button
          aria-controls="smartphones-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuOpen(event, 'smartphones-menu')}
          sx={{ textDecoration: 'none', color: 'common.white',  marginLeft: '0', marginRight: '10px' }}
        >
          Smartphones
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="smartphones-menu"
          anchorEl={anchorEl}
          open={menuId === 'smartphones-menu'}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => generateCategoryClickHandler('smartphone', 'Apple')}>
            iPhone
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('smartphone', 'Samsung')}>
            Samsung Galaxy
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('smartphone', 'Xiaomi')}>
            Xiaomi
          </MenuItem>
        </Menu>
        <Button
          aria-controls="laptops-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuOpen(event, 'laptops-menu')}
          sx={{ textDecoration: 'none', color: 'common.white',  marginLeft: '0', marginRight: '10px' }}
        >
          Laptops
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="laptops-menu"
          anchorEl={anchorEl}
          open={menuId === 'laptops-menu'}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => generateCategoryClickHandler('laptop', 'Apple')}>
            MacBook
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('laptop', 'Asus')}>
            Asus
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('laptop', 'Dell')}>
            Dell
          </MenuItem>
        </Menu>
        <Button
          aria-controls="tablets-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuOpen(event, 'tablets-menu')}
          sx={{ textDecoration: 'none', color: 'common.white',  marginLeft: '0', marginRight: '10px' }}
        >
          Tablets
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="tablets-menu"
          anchorEl={anchorEl}
          open={menuId === 'tablets-menu'}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => generateCategoryClickHandler('tablet', 'Apple')}>
            iPad
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('tablet', 'Samsung')}>
            Samsung Galaxy Tab
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('tablet', 'Lenovo')}>
            Lenovo
          </MenuItem>
        </Menu>
        <Button
          aria-controls="headphones-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuOpen(event, 'headphones-menu')}
          sx={{ textDecoration: 'none', color: 'common.white',  marginLeft: '0', marginRight: '10px' }}
        >
          Headphones
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="headphones-menu"
          anchorEl={anchorEl}
          open={menuId === 'headphones-menu'}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => generateCategoryClickHandler('headphone', 'Apple')}>
            AirPods
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('headphone', 'Samsung')}>
            Samsung Earbuds
          </MenuItem>
          <MenuItem onClick={() => generateCategoryClickHandler('headphone', 'JBL')}>
            JBL
          </MenuItem>
        </Menu>
        <Button
          onClick={handleLoginClick}
          sx={{ textDecoration: 'none', color: 'common.white',  marginLeft: '0', marginRight: '10px' }}
        >
          Login
        </Button>


        <Button
          onClick={handleSignupClick}
          sx={{ textDecoration: 'none', color: 'common.white',  marginLeft: '0', marginRight: '10px' }}
        >
          Signup
        </Button>
        <Button
          onClick={handleSearchOpen} 
          sx={{ textDecoration: 'none', color: 'common.white', marginLeft: '0', marginRight: '10px' }}
        >
          <SearchIcon />
        </Button>
        {isSearchOpen && (
          <SearchBar products={products} />
        )}
        <div>
          <Button
            component={Link}
            to="/shopping-cart"
            sx={{ textDecoration: 'none', color: 'common.white', marginRight: '10px' }}
          >
            <ShoppingCartIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;