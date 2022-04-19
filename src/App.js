import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Appointment from './pages/appointment/Appointment';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProtectedRoute from './ProtectedRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc } from "firebase/firestore";
import Specialities from './pages/specialities/Specialities';
import Veneers from './staticPages/Veneers';
import ToothJewellery from './staticPages/ToothJewellery';
import ImplantDentistry from './staticPages/ImplantDentistry';
import LaserDentistry from './staticPages/LaserDentistry';
import Orthodontics from './staticPages/Orthodontics';
import CosmeticReshaping from './staticPages/CosmeticReshaping';
import CeramicCrowns from './staticPages/CeramicCrowns';
import PartialAndComplete from './staticPages/PartialAndComplete';
import ToothFilling from './staticPages/ToothFilling';
import EstheticDentistry from './staticPages/EstheticDentistry';
import CosmeticDentistry from './staticPages/CosmeticDentistry';

function App() {
  const [user, setUser] = useState()
  const [isLoginChecked, setIsLoginChecked] = useState(false);
  const [userData, setUserData] = useState({ role: 'patient' })

  const fetchUserData = async (phoneNumber) => {
    setIsLoginChecked(false)
    const userRef = await getDoc(doc(db, `users/${phoneNumber}`))
    const docData = userRef.data()
    setUserData(docData)
    setIsLoginChecked(true);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data)
      if (data) {
        fetchUserData(data.phoneNumber)
      }
      else {
        setIsLoginChecked(true);
      }
    })

  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user}/>} exact />
        <Route path="/about" element={<About user={user}/>} exact />
        <Route path="/specialities" element={<Specialities user={user}/>} exact />
        <Route path="/veneers" element={<Veneers user={user}/>} exact />
        <Route path="/tooth-jewellery" element={<ToothJewellery user={user} />} exact />
        <Route path="/implant-dentistry" element={<ImplantDentistry user={user} />} exact />
        <Route path="/laser-dentistry" element={<LaserDentistry user={user} />} exact />
        <Route path="/orthodontics" element={<Orthodontics user={user} />} exact />
        <Route path="/cosmetic-reshaping" element={<CosmeticReshaping user={user} />} exact />
        <Route path="/ceramic-crowns" element={<CeramicCrowns user={user} />} exact />
        <Route path="/partial-and-complete" element={<PartialAndComplete user={user} />} exact />
        <Route path="/tooth-filling" element={<ToothFilling user={user} />} exact />
        <Route path="/esthetic-dentistry" element={<EstheticDentistry user={user} />} exact />
        <Route path="/cosmetic-dentistry" element={<CosmeticDentistry user={user} />} exact />
        <Route path="/contact" element={<Contact user={user} />} exact />
        <Route path="/login" key='patient' element={<Login user={user} isLoginChecked={isLoginChecked} />} exact />
        <Route path="/admin-login" key='admin' element={<Login user={user} />} exact />
        <Route path="/appointment" key='add-appointment' element={<ProtectedRoute component={Appointment}
          user={user} requiredRoles={['admin', 'patient']} isLoginChecked={isLoginChecked}
          userRole={userData?.role}
        />} exact />
        <Route path="*" element={<Home />} exact />
      </Routes>
    </Router>
  )
}

export default App;
