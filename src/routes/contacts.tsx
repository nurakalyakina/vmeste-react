import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacts")({
  component: App,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero_wrapper">
        <div
          className="hero_image_bg"
          style={{
            position: "relative",
            background: `linear-gradient(to bottom, rgb(69, 69, 69), rgba(255, 255, 255, 0))`,
          }}
        >
          <div className="hero_image_bg__img contacts_bg_override bg-white"></div>
        </div>
        <div className="hero-wrapper">
          <div className="hero contacts_hero">
            <h1>ЧАСЫ РАБОТЫ</h1>
            <p>
              с <b>09:00</b> до <b>23:00</b> без выходных
            </p>
          </div>
        </div>
      </div>
      <main className="main">
        <div className="contacts">
          <div className="contacts_container ">
            <div className="contacts_info contacts_address">
              <h3>Адрес</h3>
              <p>
                г. Екатеринбург, проспект Космонавтов 108Д (ТРЦ Veer Mall), 2
                уровень
              </p>
            </div>
            <div className="contacts_info contacts_links">
              <h3>Связь</h3>
              <a href="tel:79221822122">+7 (922) 182-21-22</a>
              <br />
              <a href="mailto:vmesteclimb@yandex.ru">vmesteclimb@yandex.ru</a>
            </div>
          </div>
          {/*<YMaps query={{ lang: 'en_RU' }}>*/}
          <div className="contacts_map w-full">
            {/*<img src="public/img/map.png" alt="Карта"/>*/}
            {/*<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />*/}
            <iframe
              className="rounded-[25px] w-full"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A24d9cb1918700782f2c8b57b53e78068f9afe91cd6329542fed59f01b812268a&amp;source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
          {/*</YMaps>*/}
        </div>
      </main>
    </>
  );
}

export default App;
