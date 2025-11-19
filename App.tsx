import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SpaceScene from './components/SpaceScene';

const App: React.FC = () => {
  return (
    <main className="bg-neo-bg min-h-screen text-neo-black selection:bg-neo-black selection:text-neo-yellow overflow-hidden">
      
      {/* 3D Background Artifact */}
      <Suspense fallback={null}>
        <SpaceScene />
      </Suspense>

      <Navbar />
      
      <div className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default App;