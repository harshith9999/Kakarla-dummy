import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Lecture from './pages/lectures/Lecture';
import Home from './pages/home/Home';
import Testimonials from './pages/testimonials/Testimonials';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProtectedRoute from './ProtectedRoute';
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
import ViewLecture from './pages/lectures/ViewLecture';

function App() {
  var user = JSON.parse(localStorage.getItem('login'));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user}/>} exact />
        <Route path="/about" element={<About user={user}/>} exact />
        <Route path="/testimonials" element={<Testimonials user={user}/>} exact />
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
        <Route path="/login" key='patient' element={<Login user={user}  />} exact />
        <Route path="/admin-login" key='admin' element={<Login/>} exact />
        <Route path="/lecture" key='add-lecture' element={<ProtectedRoute component={Lecture}
          user={user} requiredRoles={['admin']} 
        />} exact />
        <Route path="/lecture/:id" key='edit-lecture' element={<ProtectedRoute component={Lecture}
          user={user} requiredRoles={['admin']}  
        />} exact />
        <Route path="/view-lectures" key='view-lectures' element={<ProtectedRoute component={ViewLecture}
          user={user} requiredRoles={['admin']} 
        />} exact />
        <Route path="*" element={<Home />} exact />
      </Routes>
    </Router>
  )
}

export default App;
