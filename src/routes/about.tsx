import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import Carousel from "../components/Carousel.tsx";

import bg from "../../public/img/about_bg.jpg";

export const Route = createFileRoute("/about")({
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
            <h1>О НАС</h1>
          </div>
        </div>
      </div>
      <main className="main">
        <div className="about_carousel_container py-20">
          <div className="carousel_constraints mb-8">
            <Carousel />
            {/*<img src="public/img/carousel.png" alt="Фото скалодрома Вместе" className="about_carousel"/>*/}
          </div>
          <div className="about_container max-w-[200px]">
            <p>
              <span className="accent_span drop-shadow shadow-green-800">
                "ВМЕСТЕ"
              </span>{" "}
              – это ваш скалодром в Екатеринбурге! Современный, удобный и
              дружелюбный. Здесь каждый найдет свою трассу, независимо от уровня
              подготовки. Скалолазание – это не только спорт, но и крутое
              комьюнити, где все поддерживают друг друга!
            </p>
            <p>
              Откройте для себя <b>боулдеринг</b> в{" "}
              <span className="accent_span drop-shadow shadow-green-800">
                "ВМЕСТЕ"
              </span>
              ! В отличие от классического скалолазания с веревкой, боулдеринг –
              это лазание по коротким, но сложным трассам на небольшой высоте.
              Это отличный способ прокачать силу, координацию и стратегическое
              мышление, а мягкий мат обеспечит безопасное приземление.
            </p>
            <p>
              У нас можно заниматься самостоятельно или с тренером. Мы ждем
              взрослых и детей, новичков и профи! Для начинающих есть прокат
              всего необходимого снаряжения.
            </p>
            <p>
              Приходите{" "}
              <span className="accent_span drop-shadow shadow-green-800">
                "ВМЕСТЕ"
              </span>{" "}
              – будет <b>круто!</b>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
