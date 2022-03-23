import React from 'react';
import cl from './fail.module.scss'
import fail from '../../img/fail.svg'
import exit from '../../img/exit.svg'
const Fail = () => {
  return (
    <div className={cl.fail}>
      <img className={cl.failImg} src={fail} />
      <div>
        <h2>Что-то не так...</h2>
        <p>Не получилось отправить отзыв. Попробуйте еще раз!</p>
      </div>
      <img src={exit}/>
    </div>
  );
};

export default Fail;