import React from "react";
import cl from "./success.module.scss";
import exit from "../../img/exit.svg";
import success from "../../img/success.svg";
const Success = ({show,setShow}) => {
  return (
    <div className={cl.success}>
      <img className={cl.successImg} src={success} />
      <div>
        <h2>Успешно!</h2>
        <p>Спасибо за отзыв о нашей компании :)</p>
      </div>
      <button onClick={()=>setShow(false)}><img src={exit}/></button>
    </div>
  );
};

export default Success;
