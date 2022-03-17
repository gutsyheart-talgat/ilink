import React from 'react';
import cl from './header.module.scss'
import avatar from '../../img/photo.jpg'
import logo from '../../img/logo.svg'
import prof from '../../img/Profile.svg'

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.account}>
        <div className={cl.ava}/>
        <p>Талгат <span>Джайликеев</span></p>
      </div>
      <img src={logo} alt='logo' className={cl.logo}/>
      <button className={cl.btn}>
        <p>Панель управления</p>
        <img src={prof} alt="prof" />
      </button>
    </div>
  );
};

export default Header;