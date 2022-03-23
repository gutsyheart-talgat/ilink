import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import cl from "./slider.module.scss";
import MobileStepper from "@mui/material/MobileStepper";
import card from "../../../img/ava.jpg";
import left from "../../../img/left.svg";
import plus from "../../../img/plus.svg";
import right from "../../../img/right.svg";
import Form from "../../Form/Form";
import { useMediaQuery } from "@mui/material";

const banners = [
  {
    id: 1,
    slides: [
      {
        id: 12,
        img: card,
        title: "Буба Бубенцов",
        date: "08.01.2022",
        description:
          "Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.,      ",
      },
      {
        id: 13,
        img: card,
        title: "Илья Анташкевич",
        date: "08.01.2022",
        description:
          "Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.",
      },
    ],
  },
  {
    id: 2,
    slides: [
      {
        id: 22,
        img: card,
        title: "Юрина Маргарита",
        date: "26.12.2021",
        description:
          "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
      },
      {
        id: 23,
        img: card,
        title: "Дмитрий Иванов",
        date: "16.12.2021",
        description:
          "Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.",
      },
    ],
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Slider = ({ showAnswer, setShowAnswer }) => {
  const isMob = useMediaQuery("(max-width:768px");
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [showform, setShowform] = useState(false);
  return (
    <div className={cl.SliderPage}>
      <div className={cl.otzyvy}>
        <div className={cl.otzyvHead}>
          <h2>Отзывы</h2>
          <button
            onClick={() => setShowform(!showform)}
            style={{ cursor: "pointer" }}
          >
            <img src={plus} />
            <p style={isMob ? { display: "none" } : { display: "block" }}>
              Добавить отзыв
            </p>
          </button>
        </div>
        <div className={cl.Slider}>
          <AutoPlaySwipeableViews
            autoplay={false}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ marginBottom: "30px" }}
            className={cl.Swipe}
          >
            {banners.map((_step, index) => {
              const { id, slides } = _step;

              return isMob ? (
                slides.map((step, index) => (
                  <div
                    key={index}
                    style={{ overflow: "hidden" }}
                    className={cl.slider_Mob}
                  >
                    <div>
                      <div>
                        <img src={step.img} className={cl.img} />
                        <h3>{step.title}</h3>
                      </div>
                      <p>{step.date}</p>
                    </div>
                    <p>{step.description}</p>
                  </div>
                ))
              ) : (
                <div className={!isMob && cl.slider}>
                  {slides.map((step, index) => (
                    <div
                      key={index}
                      style={{ overflow: "hidden" }}
                      className={cl.slider_left}
                    >
                      <div>
                        <div>
                          <img src={step.img} className={cl.img} />
                          <h3>{step.title}</h3>
                        </div>
                        <p>{step.date}</p>
                      </div>
                      <p>{step.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </AutoPlaySwipeableViews>
          <MobileStepper
            variant="dots"
            steps={isMob ? 4 : 2}
            position="static"
            activeStep={activeStep}
          />
        </div>
      </div>
      <div
        className={cl.cont}
        style={isMob ? { display: "none" } : { display: "block" }}
      >
        <div className={cl.buttons_cont}>
          <button
            className={cl.buttons}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <img src={left} />
          </button>
          <button
            className={cl.buttons}
            onClick={handleNext}
            disabled={activeStep === banners.length - 1}
          >
            <img src={right} />
          </button>
        </div>
      </div>
      {showform ? (
        <Form
          answer={showAnswer}
          setAnswer={setShowAnswer}
          show={showform}
          setShow={setShowform}
        />
      ) : null}
    </div>
  );
};

export default Slider;
