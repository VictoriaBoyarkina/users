import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode, FC } from 'react';
import { useAuth } from "../hooks/index";
import routes from '../routes';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      to={routes.loginPage()}
      state={{ from: location }}
    />
  );
};

export default PrivateRoute;
