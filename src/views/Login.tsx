import React from "react";
import routes from "../routes";

const Login = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-10 col-sm-8 col-md-4 col-xxl-3">
          <div className="card shadow border-0">
            <div className="card-body d-flex p-3">
              <form className="w-100">
                <h5>Войти</h5>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="form-label fw-medium">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    className="form-control py-2"
                    id="email"
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="form-label fw-medium">
                    Пароль
                  </label>
                  <input
                    type="password"
                    className="form-control py-2"
                    id="password"
                    placeholder="Введите пароль"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Войти
                </button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>
                  Нет аккаунта?
                  {' '}
                </span>
                <a href={routes.signupPage()}>
                  Зарегистрироваться
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
