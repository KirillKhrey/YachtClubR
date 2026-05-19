import { useState } from "react";

import "./Header.css";

import logo from "../../assets/icons/yacht_logo.svg";
import moonIcon from "../../assets/icons/moon.svg";
import bellIcon from "../../assets/icons/bell.svg";

function Header() {

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="header">

      <div className="header-container">

        <div className="header-logo">

          <img
            src={logo}
            alt="logo"
            className="header-logo-icon"
          />

          <div className="header-logo-text">

            <span className="header-title">
              Яхт-клуб
            </span>

            <span className="header-subtitle">
              Московский Политех
            </span>

          </div>

        </div>

        <div className="header-actions">

          <button className="header-icon-btn">

            <img
              src={moonIcon}
              alt="theme"
              className="header-icon"
            />

          </button>

          <div className="notification-wrapper">

            <button
              className="header-icon-btn"
              onClick={() =>
                setIsNotificationsOpen(!isNotificationsOpen)
              }
            >

              <img
                src={bellIcon}
                alt="notifications"
                className="header-icon"
              />

            </button>

            {isNotificationsOpen && (

              <div className="notification-dropdown">

                <div className="notification-header">
                  Уведомления
                </div>

                <div className="notification-list">

                </div>

                <button className="notification-read-btn">
                  Отметить все как прочитанные
                </button>

              </div>

            )}

          </div>

          <button className="logout-btn">
            Выйти
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;