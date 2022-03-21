import React, { useEffect, useState } from "react";
import cl from "./main.module.scss";
import food from "../../img/DogFood.svg";
import avatar from '../../img/photo.jpg'
import Slider from './Slider/Slider'

const Main = () => {
  return (
    <div className={cl.main}>
      <h1>Добро пожаловать в академию!</h1>
      <div className={cl.about}>
        <img src={avatar} className={cl.ava}/>
        <div className={cl.aboutText}>
          <div className={cl.marg}>
            <div className={cl.top}>
              <h2 className={cl.name}>Талгат Джайликеев</h2>
              <p className={cl.date}>11.02.2002</p>
            </div>
            <div className={cl.info}>
              <p>
                Город: <span>Бишкек</span>
              </p>
              <p>
                Пол: <span>Мужчина</span>
              </p>
              <p>
                Возраст: <span>20</span>
              </p>
            </div>
            <p className={cl.aboutMe}>
              О себе:{" "}
              <span>
                Всем привет! Меня зовут Талгат, мне 20 лет, я студент. Учусь на
                программиста. Недавно, например, я начала проходить курс на
                известной платформе, который поможет мне устроиться на работу
                моей мечты!
              </span>
            </p>
            <div className={cl.pet}>
              <img src={food} />
              <p>
                Домашнее животное: <span>нет</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider/>
    </div>
  );
};

export default Main;
