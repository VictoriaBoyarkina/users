const apiPath = 'https://reqres.in/api';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  signupPath: () => [apiPath, 'register'].join('/'),
  usersPath: () => [apiPath, 'users?page=2'].join('/'),
  loginPage: () => ['/', 'login'].join(''),
  signupPage: () => ['/', 'signup'].join(''),
  mainPage: () => '/',
};

export default routes;