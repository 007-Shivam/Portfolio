import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedCursorComponent from './components/cursor/CursorComponent';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

import Navbar from './components/navbar/NavbarComponent';
import Intro from './pages/Intro';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';


function App() {
  return (
    <>
      <AnimatedCursorComponent />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Intro />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
      <Analytics /> 
    </>
  );
}

export default App;
