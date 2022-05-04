import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Header from './components/Header';
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './images/logo192.png';


function ProtectedRoute({ component: Component, user, requiredRoles }) {
  const style = { height: '70px', width: '70px' }
  const { state } = useLocation();
  let userData = state?.token ? state : user
  return (
    (userData?.token) ?
      requiredRoles.includes(userData.role) ?
        <div>
          <Header role={userData.role} />
          <Component role={userData.role} />
          <FloatingWhatsApp phoneNumber="+919951207401"
            accountName="Kakarla"
            avatar={logo}
            allowClickAway
            notification
            notificationDelay={30000}
            styles={style}
          />
        </div>
        : <Navigate to="/" />
      : <Navigate to="/login" />

  );
}

export default ProtectedRoute;
