import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </AnimatePresence>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
//         <AnimatedBackground />
//         <div className="relative z-10">
//           <Navbar />
//           <AnimatedRoutes />
//         </div>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      {/* 1. Use a relative container so children can layer correctly */}
      <div className="relative min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: '#0f172a' }}>
        
        {/* 2. Background stays at the very bottom (z-0) */}
        <AnimatedBackground /> 
        
        {/* 3. Content sits on top (z-10) with a transparent background */}
        <div className="relative z-10 bg-transparent">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
