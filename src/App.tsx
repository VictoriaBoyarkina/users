import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./views/Login";
import SignupPage from "./views/Signup";
import MainPage from "./views/Main";
import NotFoundPage from "./views/NotFound";
import AuthProvider from "./components/AppAuthProvider";
import PrivateRoute from "./components/AppPrivateRoute";
import routes from "./routes";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={routes.loginPage()} element={<LoginPage />} />
            <Route path={routes.signupPage()} element={<SignupPage />} />
            <Route
              path={routes.mainPage()}
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
