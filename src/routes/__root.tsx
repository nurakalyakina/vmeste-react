import "../index.css";
import "../App.css";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import vkIcon from "../../public/img/icon_vk.png";
import tgIcon from "../../public/img/icon_telegram.png";
import bwIGIcon from "../../public/img/чб_ig.svg";
import bwVKIcon from "../../public/img/чб_vk.svg";
import bwTGIcon from "../../public/img/чб_tg.svg";
import bwWAIcon from "../../public/img/чб_wa.svg";
import logoIcon from "../../public/img/logo.svg";

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [queryClient] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      }),
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e) => {
      e.preventDefault();
      setIsMenuOpen(true);
    };

    const closeMenu = (e) => {
      e.preventDefault();
      setIsMenuOpen(false);
    };

    return (
      <>
        <header className="header maxw_container">
          <div
            id="headerMenu"
            className={`header_menu${isMenuOpen ? " active" : ""}`}
          >
            <div className="left_links">
              <Link
                className="header_menu__link menu_main"
                id="menu_main"
                to="/"
                activeProps={{
                  className: "menu_active",
                }}
                onClick={() => setIsMenuOpen(false)}
                target="_self"
              >
                Главная
              </Link>
              <Link
                className="header_menu__link menu_price"
                id="menu_prices"
                to="/prices"
                activeProps={{
                  className: "menu_active",
                }}
                target="_self"
                onClick={() => setIsMenuOpen(false)}
              >
                Цены
              </Link>
              <Link
                className="header_menu__link menu_documents"
                id="menu_documents"
                to="/documents"
                target="_self"
                activeProps={{
                  className: "menu_active",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Документы
              </Link>
              <Link
                className="header_menu__link menu_about"
                id="menu_about"
                to="/about"
                target="_self"
                activeProps={{
                  className: "menu_active",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                O нас
              </Link>
              <Link
                className="header_menu__link menu_contacts"
                id="menu_contacts"
                to="/contacts"
                target="_self"
                activeProps={{
                  className: "menu_active",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </div>
            <div className="right_links">
              <a
                className="header_menu__link menu_tel"
                href="tel:79221822122"
                id="menu_tel"
              >
                +7 (922) 182-21-22
              </a>
              <div className="socials_wrapper">
                <a
                  className="socials_icon menu_vk"
                  href="https://vk.com/vmeste_climbing"
                  target="_blank"
                >
                  <img src={`${vkIcon}`} alt="Вконтакте" />
                </a>
                <a
                  className="socials_icon menu_tg"
                  href="https://t.me/vmesteclimbinggym"
                  target="_blank"
                >
                  <img src={`${tgIcon}`} alt="Телеграм" />
                </a>
              </div>
            </div>
          </div>
          <div className="mobile_header">
            <a
              className="header_menu__link menu_tel_mobile"
              href="tel:79221822122"
            >
              +7 (922) 182-21-22
            </a>
            <div className="mobile_actions">
              <button
                className="menu_toggle show_menu"
                style={{ display: isMenuOpen ? "none" : "block" }}
                onClick={toggleMenu}
              >
                МЕНЮ
              </button>
              <button
                className="menu_toggle close_menu"
                style={{ display: isMenuOpen ? "block" : "none" }}
                onClick={closeMenu}
              >
                ЗАКРЫТЬ
              </button>
            </div>
          </div>
        </header>
        <QueryClientProvider client={queryClient}>
          <div className="">
            <Outlet />
          </div>
        </QueryClientProvider>
        <footer className="footer">
          <div className="maxw_container">
            <Link className="footer__logo" to="/">
              <img src={`${logoIcon}`} alt="Логотип Вместе" />
            </Link>
            <div className="footer__buttons">
              <div className="footer_socials">
                <a
                  href="https://vk.com/vmeste_climbing"
                  className="social_icon"
                  target="_blank"
                >
                  <img src={`${bwVKIcon}`} alt="Вконтакте" />
                </a>
                <a
                  href="https://t.me/vmesteclimb"
                  className="social_icon"
                  target="_blank"
                >
                  <img src={`${bwTGIcon}`} alt="Телеграм" />
                </a>
                <a
                  href="https://wa.me/79221822122?text=%D0%A1%D0%BA%D0%B0%D0%BB%D0%BE%D0%B4%D1%80%D0%BE%D0%BC%20%D0%92%D0%BC%D0%B5%D1%81%D1%82%D0%B5%3A%20%D1%81%D0%BA%D0%B0%D0%BB%D0%BE%D0%BB%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%B2%D1%81%D0%B5%D1%85!"
                  className="social_icon"
                  target="_blank"
                >
                  <img src={`${bwWAIcon}`} alt="Ватсап" />
                </a>
                <a
                  href="https://www.instagram.com/vmeste_climbing/"
                  className="social_icon"
                  target="_blank"
                >
                  <img src={`${bwIGIcon}`} alt="Инстаграм" />
                </a>
              </div>
              <a className="footer__tel" href="tel:79221822122">
                +7 (922) 182-21-22
              </a>
            </div>
          </div>
        </footer>
        {/*<TanStackRouterDevtools/>*/}
      </>
    );
  },
});
