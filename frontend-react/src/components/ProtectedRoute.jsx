import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, redirectPath = '/' }) => {
  if (!isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  else return <Outlet />;
};

export default ProtectedRoute;