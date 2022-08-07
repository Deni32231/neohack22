import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


import Login from './pages/Login';
import Registration from './pages/Registration';
import Cabinet from './pages/Cabinet'
import Main from './pages/Main';
import Admin from './pages/Admin';
import Course from './pages/Course';
import Lesson from './pages/Lesson';
import Test from './pages/Test';



function App() {


  return (
    <div className="min-h-screen flex flex-col justify-between text-slate-200 transition-all">
      <Header>
        <Routes>
          <Route path='/front' element={<Main />} />
          <Route path='/front/admin' element={<Admin />} />
          <Route path='/front/cabinet' element={<Cabinet />} />
          <Route path='/front/login' element={<Login />} />
          <Route path='/front/registration' element={<Registration />} />
          <Route path='/front/course/:id' element={<Course />} />
          <Route path='/front/course/:id/lesson/:id' element={<Lesson />} />
          <Route path='/front/course/:id/test/:id' element={<Test />} />
          <Route path='/*' element={<Navigate to="/front"/>} />
        </Routes>
      </Header>
      <Footer />
    </div>
  );
}

export default App;
