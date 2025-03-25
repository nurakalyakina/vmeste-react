import viteLogo from "/vite.svg";
import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import bg from "../../public/img/documents_bg.jpg";
import docIcon from "../../public/img/document_icon.svg";

import doc1 from "../../public/documents/ТБ_взрослые.pdf";
import doc2 from "../../public/documents/ТБ_дети.pdf";
import doc3 from "../../public/documents/Согласие_взрослые.pdf";
import doc4 from "../../public/documents/Согласие_дети.pdf";
import doc5 from "../../public/documents/договор_детская_школа.pdf";
import doc6 from "../../public/documents/Заявление_на_допуск_на_свободное_посещение_до_16_лет.pdf";
import doc7 from "../../public/documents/Фото_видео_съемка_взрослые.pdf";
import doc8 from "../../public/documents/Фото_видео_съемка.pdf";

export const Route = createFileRoute("/documents")({
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
            <h1>ДОКУМЕНТЫ</h1>
          </div>
        </div>
      </div>
      <main className="main">
        <div className="documents_container ">
          <div className="documents_wrapper">
            <a className="documents_link" target="_blank" href={`${doc1}`}>
              <img src={`${docIcon}`} alt="ИТБ “ВМЕСТЕ”" />
              <p>ИТБ “ВМЕСТЕ”</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc2}`}>
              <img src={`${docIcon}`} alt="ИТБ “ВМЕСТЕ” (ДЕТИ)" />
              <p>ИТБ “ВМЕСТЕ” (ДЕТИ)</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc3}`}>
              <img
                src={`${docIcon}`}
                alt="ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ (ВЗРОСЛЫЕ)"
              />
              <p>ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ (ВЗРОСЛЫЕ)</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc4}`}>
              <img
                src={`${docIcon}`}
                alt="ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ (ДЕТИ)"
              />
              <p>ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ (ДЕТИ)</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc5}`}>
              <img src={`${docIcon}`} alt="ДОГОВОР ДЕТСКАЯ ШКОЛА" />
              <p>ДОГОВОР ДЕТСКАЯ ШКОЛА</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc6}`}>
              <img
                src={`${docIcon}`}
                alt="ЗАЯВЛЕНИЕ НА ПОСЕЩЕНИЕ ДО 16-ти ЛЕТ"
              />
              <p>ЗАЯВЛЕНИЕ НА ПОСЕЩЕНИЕ ДО 16-ти ЛЕТ</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc7}`}>
              <img
                src={`${docIcon}`}
                alt="СОГЛАСИЕ НА ФОТО И ВИДЕО СЪЕМКУ (ВЗРОСЛЫЕ)"
              />
              <p>СОГЛАСИЕ НА ФОТО И ВИДЕО СЪЕМКУ (ВЗРОСЛЫЕ)</p>
            </a>
            <a className="documents_link" target="_blank" href={`${doc8}`}>
              <img
                src={`${docIcon}`}
                alt="СОГЛАСИЕ НА ФОТО И ВИДЕО СЪЕМКУ (ДЕТИ)"
              />
              <p>СОГЛАСИЕ НА ФОТО И ВИДЕО СЪЕМКУ (ДЕТИ)</p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
