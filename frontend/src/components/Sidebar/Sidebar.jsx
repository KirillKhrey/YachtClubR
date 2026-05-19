import { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

import homeIcon from "../../assets/icons/house.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import eventsIcon from "../../assets/icons/megaphone.svg";
import contactsIcon from "../../assets/icons/life-buoy.svg";
import galleryIcon from "../../assets/icons/image.svg";
import profileIcon from "../../assets/icons/user.svg";
import settingsIcon from "../../assets/icons/settings.svg";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const role = "admin";

  return (
    <>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        <nav className="sidebar-nav">

          <Link
            to="/"
            className="sidebar-link active"
          >
            <img src={homeIcon} alt="" className="sidebar-icon" />
            <span>Главная</span>
          </Link>

          <Link
            to="/tasks"
            className="sidebar-link"
          >
            <img src={calendarIcon} alt="" className="sidebar-icon" />
            <span>Календарь занятий</span>
          </Link>

          <Link
            to="/events"
            className="sidebar-link"
          >
            <img src={eventsIcon} alt="" className="sidebar-icon" />
            <span>События</span>
          </Link>

          <Link
            to="/contacts"
            className="sidebar-link"
          >
            <img src={contactsIcon} alt="" className="sidebar-icon" />
            <span>Контакты</span>
          </Link>

          <Link
            to="/gallery"
            className="sidebar-link"
          >
            <img src={galleryIcon} alt="" className="sidebar-icon" />
            <span>Фотоальбом</span>
          </Link>

          <Link
            to="/profile"
            className="sidebar-link"
          >
            <img src={profileIcon} alt="" className="sidebar-icon" />
            <span>Личный кабинет</span>
          </Link>

          {(role === "admin" || role === "moderator") && (

            <Link
              to="/moderation"
              className="sidebar-link"
            >
              <img src={settingsIcon} alt="" className="sidebar-icon" />
              <span>Админ панель</span>
            </Link>

          )}

        </nav>

      </aside>

      <button
        className="mobile-sidebar-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {isOpen && (

        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />

      )}

    </>
  );
}

export default Sidebar;