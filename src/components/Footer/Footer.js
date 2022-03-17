import React from 'react';
import cl from './footer.module.scss'
import vk from '../../img/vk.svg'
import sub from '../../img/Subtract.svg'
import tg from '../../img/tg.svg'
const Footer = () => {
  return (
    <div className={cl.footer}>
      <p>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
      <div className={cl.links}>
        <button><img alt='vk' src={vk}/></button>
        <button><img alt='sub' src={sub}/></button>
        <button><img alt='tg' src={tg}/></button>
      </div>
    </div>
  );
};

export default Footer;