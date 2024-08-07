import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
        <img src= {assets.logo} alt="" className='logo' />
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile-App</li>
          <li>Contact-Us</li>
        </ul>
        <div className="navbar-right">
          <img src= {assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src= {assets.basket_icon} alt="" />

          </div>
          <button>sign in</button>
          
        </div>
    </div>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>

  )
}

export default Navbar
