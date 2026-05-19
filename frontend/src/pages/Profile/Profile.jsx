import { useState } from "react";

import Layout from "../../components/Layout/Layout";

import "./Profile.css";

import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import calendarIcon from "../../assets/icons/calendar.svg";

import trainingIcon from "../../assets/icons/calendar.svg";
import trendingIcon from "../../assets/icons/trending-up.svg";
import medalIcon from "../../assets/icons/medal.svg";

function Profile() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const profile = {
    name: "Иван Иванов",
    role: "Участник",
    email: "ivan@example.com",
    phone: "+7 (999) 999-99-99",
    clubSince: "мая 2025",
    initials: "ИИ",
    avatar: null
  };

  const stats = [
    {
      icon: trainingIcon,
      label: "Посещено занятий",
      value: 3
    },
    {
      icon: trendingIcon,
      label: "Участие в авралах",
      value: 2
    },
    {
      icon: medalIcon,
      label: "Соревнования",
      value: 0
    }
  ];

  const achievements = [
    {
      emoji: "🎯",
      title: "Первое занятие",
      date: "15 сентября 2025"
    },
    {
      emoji: "💪",
      title: "10 тренировок",
      date: "20 октября 2025"
    },
    {
      emoji: "⛵",
      title: "Первая регата",
      date: "5 ноября 2025"
    },
    {
      emoji: "🛠",
      title: "Помощник клуба",
      date: "10 декабря 2025"
    }
  ];

  const upcomingEvents = [
    {
      title: "Тренировка",
      date: "15 мая",
      status: "registered"
    },
    {
      title: "Аврал",
      date: "18 мая",
      status: "registered"
    }
  ];

  const history = [
    {
      title: "Тренировка",
      date: "2 мая 2026"
    },
    {
      title: "Регата",
      date: "28 апреля 2026"
    }
  ];

  return (
    <Layout>

      <section className="page-header">

        <h1>Личный кабинет</h1>

        <p className="subtitle">
          Ваш профиль и активность в клубе
        </p>

      </section>

      <div className="profile-layout">

        <div className="profile-sidebar">

          <section className="profile-card card">

            <div className="profile-avatar">

              {profile.avatar ? (

                <img
                  src={profile.avatar}
                  alt="avatar"
                  className="profile-avatar-img"
                />

              ) : (
                profile.initials
              )}

            </div>

            <h2 className="profile-name">
              {profile.name}
            </h2>

            <p className="profile-role">
              {profile.role}
            </p>

            <div className="profile-info">

              <div className="profile-info-item">

                <img src={mailIcon} alt="" />

                <span>{profile.email}</span>

              </div>

              <div className="profile-info-item">

                <img src={phoneIcon} alt="" />

                <span>{profile.phone}</span>

              </div>

              <div className="profile-info-item">

                <img src={calendarIcon} alt="" />

                <span>
                  В клубе с {profile.clubSince}
                </span>

              </div>

            </div>

            <button
              className="profile-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Редактировать профиль
            </button>

          </section>

          <section className="stats-card card">

            <h3>Статистика</h3>

            <div className="stats-list">

              {stats.map((item, index) => (

                <div className="stats-item" key={index}>

                  <div className="stats-left">

                    <div className="stats-icon">

                      <img src={item.icon} alt="" />

                    </div>

                    <span>{item.label}</span>

                  </div>

                  <strong>{item.value}</strong>

                </div>

              ))}

            </div>

          </section>

        </div>

        <div className="profile-main">

          <section className="card">

            <h3 className="section-title">
              Достижения
            </h3>

            <div className="achievements-grid">

              {achievements.map((achievement, index) => (

                <div
                  className="achievement-card"
                  key={index}
                >

                  <div className="achievement-emoji">
                    {achievement.emoji}
                  </div>

                  <h4>{achievement.title}</h4>

                  <p>{achievement.date}</p>

                </div>

              ))}

            </div>

          </section>

          <section className="card">

            <h3 className="section-title">
              Ближайшие мероприятия
            </h3>

            <div className="events-list">

              {upcomingEvents.map((event, index) => (

                <div
                  className="profile-event"
                  key={index}
                >

                  <div>

                    <h4>{event.title}</h4>

                    <p>{event.date}</p>

                  </div>

                  <span className="event-badge green">
                    Записан
                  </span>

                </div>

              ))}

            </div>

          </section>

          <section className="card">

            <h3 className="section-title">
              История активности
            </h3>

            <div className="history-list">

              {history.map((item, index) => (

                <div
                  className="history-item"
                  key={index}
                >

                  <div className="history-line"></div>

                  <div className="history-content">

                    <div>

                      <h4>{item.title}</h4>

                      <p>{item.date}</p>

                    </div>

                    <span className="history-status">
                      Завершено
                    </span>

                  </div>

                </div>

              ))}

            </div>

            <a href="/" className="history-link">
              Показать всю историю →
            </a>

          </section>

        </div>

      </div>

      {isModalOpen && (

        <div className="profile-modal">

          <div
            className="profile-modal-overlay"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="profile-modal-content">

            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <h2 className="modal-title">
              Редактировать профиль
            </h2>

            <form className="profile-edit-form">

              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  defaultValue={profile.email}
                />

              </div>

              <div className="form-group">

                <label>Телефон</label>

                <input
                  type="text"
                  defaultValue={profile.phone}
                />

              </div>

              <div className="form-group">

                <label>Новый пароль</label>

                <input
                  type="password"
                  placeholder="Введите пароль"
                />

              </div>

              <div className="form-group">

                <label>Аватар</label>

                <input
                  type="file"
                  accept="image/*"
                />

              </div>

              <button
                type="submit"
                className="profile-btn"
              >
                Сохранить изменения
              </button>

            </form>

          </div>

        </div>

      )}

    </Layout>
  );
}

export default Profile;