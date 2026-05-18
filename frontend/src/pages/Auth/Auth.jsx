import { useState } from "react";
import "./Auth.css";
import logo from "../../assets/icons/yacht_logo.svg";

function Auth() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">

      <div className="auth-card">

        <div className="auth-logo">
          <img
            src={logo}
            alt="logo"
            className="logo-icon"
          />

          <h2>Яхт-клуб МП</h2>
          <p>Московский Политех</p>
        </div>

        <div className="auth-tabs">

          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Вход
          </button>

          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </button>

        </div>

        {isLogin ? (

          <form className="auth-form">

            <label>Email</label>

            <input
              type="email"
              autoComplete="email"
              required
            />

            <label>Пароль</label>

            <input
              type="password"
              autoComplete="current-password"
              minLength="6"
              required
            />

            <div className="auth-options">

              <label className="remember-label">

                <input type="checkbox" />
                Запомнить меня

              </label>

              <a href="/">
                Забыли пароль?
              </a>

            </div>

            <button type="submit" className="submit-btn">
              Войти
            </button>

          </form>

        ) : (

          <form className="auth-form">

            <label>Email</label>

            <input
              type="email"
              autoComplete="email"
              required
            />

            <label>Пароль</label>

            <input
              type="password"
              autoComplete="new-password"
              minLength="6"
              required
            />

            <label>ФИО</label>

            <input type="text" required />

            <label>Учебная группа</label>

            <input type="text" required />

            <label>Телефон</label>

            <input type="tel" required />

            <button type="submit" className="submit-btn">
              Подать заявку на вступление
            </button>

          </form>

        )}

      </div>

    </div>
  );
}

export default Auth;