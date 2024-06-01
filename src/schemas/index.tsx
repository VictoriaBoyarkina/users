import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string(),
});

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Это поле обязательно")
    .min(3, "Имя должно содержать не менее трех символов")
    .max(20, "Имя должно содержать не более 20 символов")
    .trim(),
  email: yup
    .string()
    .required("Это поле обязательно")
    .email("Должно быть валидным email")
    .trim(),
  password: yup
    .string()
    .trim()
    .required("Это поле обязательно")
    .min(6, "Пароль должен содержать не менее 6 симоволов"),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Это поле обязательно"),
});

export { loginSchema, signupSchema };
