import React from 'react';
import './Header.css';
import { Button } from 'antd';
import Modals from '../Modals/Modals';

const Header = () => {
   return (
      <header className="Header">
         <Modals
         />
         <Button className="Header-button" type="primary">LogOut</Button>
      </header>
   )
}
export default Header;