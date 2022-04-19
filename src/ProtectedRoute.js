import React from "react";
import { Navigate } from "react-router-dom";
import Header from './components/Header';
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './images/logo192.png';
import SimpleBackdrop from "./components/SimpleBackdrop";


function ProtectedRoute({ component: Component, user, requiredRoles, userRole, isLoginChecked }) {
  const style = { height: '70px', width: '70px' }
  return (!isLoginChecked ? <SimpleBackdrop open={true}/> :
    user ?
      requiredRoles.includes(userRole) ?
        <div>
          <Header role={userRole} uid={user.uid} />
          <Component role={userRole}
            uid={user.uid}
          />
          <FloatingWhatsApp phoneNumber="+919951207401"
            accountName="Kakarla"
            avatar={logo}
            allowClickAway
            notification
            notificationDelay={30000}
            styles={style}
          />
        </div>
        : <Navigate to="/appointment" />
      : <Navigate to="/login" />

  );
}

export default ProtectedRoute;
