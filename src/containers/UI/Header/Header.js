import React from 'react';
import './Header.css';
import { Button } from 'antd';

const Header = () => {
   return (
      <header className="Header">
         <Button className="Header-button" type="primary">LogOut</Button>
      </header>
   )
}
export default Header;