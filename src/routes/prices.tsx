import viteLogo from "/vite.svg";
import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import price1 from "../../public/img/prices_1.png";
import price2 from "../../public/img/prices_2.png";
import bg from "../../public/img/prices_bg.jpg";

export const Route = createFileRoute("/prices")({
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
            <h1>ЦЕНЫ</h1>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="prices">
          <a href={`${price1}`} className="prices__img_anchor">
            <img src={`${price1}`} alt="Прайс 1/2" />
          </a>
          <a href={`${price1}`} className="prices__img_anchor">
            <img src={`${price2}`} alt="Прайс 2/2" />
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
