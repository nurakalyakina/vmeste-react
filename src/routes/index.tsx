import { useState } from "react";

import { createFileRoute, Link } from "@tanstack/react-router";

import logo from "../../public/img/logo.svg";
import square from "../../public/img/square.svg";
import bg from "../../public/img/index_bg.jpg";
import contentBg from "../../public/img/index-content.png";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero_wrapper">
        <div className="hero_image_bg">
          <div
            className="hero_image_bg__img"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
        <div className="hero-wrapper">
          <div className="hero">
            <div className="hero__logo mt-20 sm:mt-0 md:mt-4">
              <img src={`${logo}`} alt="Логотип Вместе" />
            </div>
            <div className="hero__title my-2 max-w-[600px] px-4 md:px-4">
              Боулдеринг - минимум снаряжения, максимум удовольствия!
            </div>
            <div className="flex flex-col">
              <div className="hero__text">Ежедневно</div>
              <div className="hero__worktime">с 09:00 до 23:00</div>
            </div>
          </div>
        </div>
      </div>
      <main className="main">
        <div className="index_container">
          <div className="index_content__wrapper">
            <img
              className="index-bg"
              src={`${contentBg}`}
              alt="Фоновая картинка"
            />
            <div className="index_content">
              <h2 className="my-8">Услуги</h2>
              <Link to="/prices" className="index_content__block">
                <div className="pr-4">Самостоятельное посещение</div>
                <div className="index_content__block__options">
                  <img className="figure" src={`${square}`} alt="" />
                  <div className="wrapper">
                    <div className="text_wrap">
                      <p className="index_options">разовое</p>
                      <p className="index_options">абонемент</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/prices" className="index_content__block">
                <div className="pr-4">С тренером</div>
                <div className="index_content__block__options">
                  <img className="figure" src={`${square}`} alt="" />
                  <div className="wrapper">
                    <div className="text_wrap">
                      <p className="index_options">групповые тренировки</p>
                      <p className="index_options">индивидуальные тренировки</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-12 mt-8">
              <div className="index_content__rental">
                <h3>Аренда экипировки</h3>
              </div>
              <div className="index_content__newcomers">
                <h3 className="mb-4">Новичкам</h3>
                <p>
                  Не знаете с чего начать?
                  <br />
                  Свяжитесь с нами, мы подскажем!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
