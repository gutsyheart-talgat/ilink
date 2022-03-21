import React from "react";
import cl from "./form.module.scss";
import { Formik } from "formik";
import exit from "../../img/exit.svg";
import plus from "../../img/plus.svg";
import info from "../../img/info.svg";
import * as yup from "yup";
const initialValues = {
  name: "",
  desc: "",
  photo: "",
};
const validateSchema = yup.object().shape({
  name: yup.string().required("Введите ваше имя!"),
  desc: yup.string().required("Введите ваше имя!"),
});
const Form = ({ show, setShow }) => {
  const pressBtn = () => {
    let data = new FormData();
    data.append("photo", initialValues.photo);
  };
  return (
    <div className={cl.Form__container}>
      <div className={cl.Form}>
        <div className={cl.formHead}>
          <h2>Отзыв</h2>
          <button style={{ cursor: "pointer" }} onClick={() => setShow(false)}>
            <img src={exit} />
          </button>
        </div>
        <Formik
          onSubmit={(values) => {
            alert([`${JSON.stringify(values, null, 4)}`]);
            setShow(false);
          }}
          initialValues={initialValues}
          className={cl.formik}
          validationSchema={validateSchema}
        >
          {({ values, touched, errors, handleSubmit, handleChange }) => (
            <form className={cl.forms} onSubmit={handleSubmit}>
              <div>
                <label>
                  <p>Как вас зовут?</p>
                  <input
                    placeholder="Имя Фамилия"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </label>

                <label className={cl.addPhoto} onClick={() => pressBtn()}>
                  <img src={plus} />
                  Загрузить фото
                  <input
                    type="file"
                    name="photo"
                    value={values.photo}
                    onChange={handleChange}
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>
              {errors.name && touched.name && (
                <p className={cl.error}>{errors.name}</p>
              )}
              <label>
                <p>Все ли вам понравилось?</p>
                <input
                  placeholder="Напишите пару слов о вашем опыте..."
                  name="desc"
                  value={values.desc}
                  onChange={handleChange}
                />
              </label>
              {errors.desc && touched.desc && (
                <p className={cl.error}>{errors.desc}</p>
              )}
              <div className={cl.foot}>
                <button type="submit">Отправить отзыв</button>
                <div>
                  <img src={info} />
                  <p>Все отзывы проходят модерацию в течение 2 часов</p>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
