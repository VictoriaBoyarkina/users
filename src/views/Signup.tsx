import { useState, useRef, useEffect } from "react";
import { MouseEvent } from "react";
import React from "react";
import routes from "../routes";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/index";
import cn from "classnames";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios, {AxiosError, AxiosResponse } from 'axios';

const Signup = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, []);
  

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeOff);

  const handleToggle = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    const target = e.currentTarget as HTMLInputElement;

    console.log(target);

    if (target.id=== "passwordToggle") {
      if (passwordType === "password") {
        setPasswordIcon(eye);
        setPasswordType("text");
      } else {
        setPasswordIcon(eyeOff);
        setPasswordType("password");
      }
    } else {
      if (confirmPasswordType === "password") {
        setConfirmPasswordIcon(eye);
        setConfirmPasswordType("text");
      } else {
        setConfirmPasswordIcon(eyeOff);
        setConfirmPasswordType("password");
      }
    }
  };

  const navigate = useNavigate();
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema: signupSchema,
    onSubmit: async (values, { setErrors }) => {
      try {
        setSubmitting(true);
        const response = await axios.post(routes.signupPath(), {
          email: values.email,
          password: values.password
        });
        console.log(response);
        // auth.saveToken(JSON.stringify(res.data));
        auth.logIn();
        navigate(routes.mainPage());
        setSubmitting(false);
      } catch (error) {
        console.log(error)
        setSubmitting(false);
        // if (axios.isAxiosError(error)) {
        //   if (error.response?.status === 409) {
        //     setAuthFailed(true);
        //     return;
        //   }
        // }

        if (error instanceof Error) {
          if (error.message === "Network Error") {
            console.log(error.message);
          }
        }
      }
    },
  });

  const getInputClass = (
    error: string | undefined,
    touched: boolean | undefined,
    authFailed: boolean
  ): string =>
    cn("form-control", "py-2", {
      invalid: (error && touched) || authFailed,
    });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-10 col-sm-8 col-md-4 col-xxl-3">
          <div className="card shadow border-0">
            <div className="card-body d-flex p-3">
              <form className="w-100" onSubmit={handleSubmit}>
                <h5>Регистрация</h5>
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="form-label fw-medium">
                    Имя
                  </label>
                  <input
                    name="name"
                    type="text"
                    ref={inputEl}
                    className={getInputClass(
                      errors.name,
                      touched.name ?? false,
                      authFailed
                    )}
                    id="name"
                    placeholder="Ваше имя"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <small className="text-danger">{errors.name}</small>
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="form-label fw-medium">
                    Электронная почта
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={getInputClass(
                      errors.email,
                      touched.email ?? false,
                      authFailed
                    )}
                    id="email"
                    placeholder="example@mail.com"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <small className="text-danger">{errors.email}</small>
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="form-label fw-medium">
                    Пароль
                  </label>
                  <div className="d-flex position-relative">
                    <input
                      type={passwordType}
                      name="password"
                      className={getInputClass(
                        errors.password,
                        touched.password ?? false,
                        authFailed
                      )}
                      id="password"
                      placeholder="Введите пароль"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <span
                      className="position-absolute end-0 p-2"
                      style={{ cursor: "pointer" }}
                      onClick={handleToggle}
                      id="passwordToggle"
                      role="button"
                      aria-label="Toggle confirm password visibility"
                    >
                      <Icon
                        icon={passwordIcon}
                        size={15}
                      />
                    </span>
                  </div>
                  <small className="text-danger">{errors.password}</small>
                </div>
                <div className="mb-3 text-start">
                  <label
                    htmlFor="passwordConfirmation"
                    className="form-label fw-medium"
                  >
                    Подтвердите пароль
                  </label>
                  <div className="d-flex position-relative">
                    <input
                      type={confirmPasswordType}
                      name="confirmPassword"
                      className={getInputClass(
                        errors.confirmPassword,
                        touched.confirmPassword ?? false,
                        authFailed
                      )}
                      id="passwordConfirmation"
                      placeholder="Подтвердите пароль"
                      onChange={handleChange}
                      value={values.confirmPassword}
                    />

                    <span
                      className="position-absolute end-0 p-2"
                      onClick={handleToggle}
                      id="confirmPasswordToggle"
                      style={{ cursor: "pointer" }}
                      role="button"
                      aria-label="Toggle confirm password visibility"
                    >
                      <Icon icon={confirmPasswordIcon} size={15} />
                    </span>
                  </div>
                  <small className="text-danger">
                    {errors.confirmPassword}
                  </small>
                </div>
                <button type="submit" className="btn custom-btn w-100 py-2">
                  Зарегистрироваться
                </button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Есть аккаунт? </span>
                <a href={routes.loginPage()}>Войти</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
