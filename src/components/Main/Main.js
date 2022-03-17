import React from 'react';
import cl from './main.module.scss'
import ava from '../../img/photo.jpg'
const Main = () => {
  return (
    <div className={cl.main}>
      <h1>Добро пожаловать в академию!</h1>
      <div className={cl.about}>
        <div className={cl.ava}/>
        <div className={cl.aboutText}>
          <div className={cl.marg}>
            <div className={cl.top}>
              <h2 className={cl.name}>Талгат Джайликеев</h2>
              <p className={cl.date}>11.02.2002</p>
            </div>
            <div className={cl.info}>
              <p>Город: <span>Бишкек</span></p>
              <p>Пол: <span>Мужчина</span></p>
              <p>Возраст: <span>20</span></p>
            </div>
            <p>
              О себе: Всем привет! Меня зовут Яна, мне 22 года, я студент. Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно, например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты! 
              BTW: И да, у меня есть милая кошка :)
            </p>
          </div>
        </div>
      </div>
      <div className={cl.otzyvy}></div>
    </div>
  )
}

export default Main;