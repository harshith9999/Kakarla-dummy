import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Lecture from './pages/lectures/Lecture';
import ViewBookClasses from './pages/bookClass/ViewBookClass';
import Home from './pages/home/Home';
import Testimonials from './pages/testimonials/Testimonials';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProtectedRoute from './ProtectedRoute';
import ViewLecture from './pages/lectures/ViewLecture';
import BookClass from './pages/bookClass/BookClass';

function App() {
  var user = JSON.parse(localStorage.getItem('login'));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user}/>} exact />
        <Route path="/about" element={<About user={user}/>} exact />
        <Route path="/testimonials" element={<Testimonials user={user}/>} exact />
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
        <Route path="/view-booked-demos" key='view-booked-demos' element={<ProtectedRoute component={ViewBookClasses}
          user={user} requiredRoles={['admin']} 
        />} exact />
        <Route path="/demo-class/:id" key='edit-demo-class' element={<ProtectedRoute component={BookClass}
          user={user} requiredRoles={['admin']}  
        />} exact />
        <Route path="*" element={<Home />} exact />
      </Routes>
    </Router>
  )
}

export default App;
