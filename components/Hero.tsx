import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SectionId } from '../constants';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="min-h-screen pt-32 pb-12 px-4 flex flex-col justify-center overflow-hidden relative">
      
      {/* Background Patterns */}
      <div className="absolute top-40 right-[-5%] w-64 h-64 bg-neo-pink rounded-full border-3 border-neo-black shadow-neo-xl hidden lg:block animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-[-2%] w-40 h-40 bg-neo-green rotate-12 border-3 border-neo-black shadow-neo-lg hidden lg:block"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block bg-neo-blue text-white px-4 py-2 border-3 border-neo-black shadow-neo mb-6 font-mono font-bold -rotate-2"
          >
            FULL STACK ENGINEER 🚀
          </motion.div>

          {/* Massive Name */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-black mb-8 tracking-tighter">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              DHEERAJ
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-stroke-3 text-transparent bg-clip-text bg-neo-black lg:ml-32"
              style={{ WebkitTextStroke: '3px black', color: 'transparent' }}
            >
              M.L.V
            </motion.div>
          </h1>

          {/* Tagline Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7 bg-neo-white border-3 border-neo-black p-6 md:p-10 shadow-neo-lg"
            >
              <p className="text-xl md:text-3xl font-bold leading-snug">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="font-mono mt-6 text-gray-600 border-l-4 border-neo-yellow pl-4">
                Based in Gurgaon. Scaling systems. Automating workflows.
              </p>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col justify-end">
               <motion.button
                 onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
                 whileHover={{ scale: 1.02, rotate: 1 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-neo-yellow w-full p-6 border-3 border-neo-black shadow-neo-lg font-black text-2xl flex items-center justify-between group hover:bg-neo-pink transition-colors neo-button"
               >
                 SEE WORK
                 <ArrowDownRight size={32} className="group-hover:rotate-45 transition-transform" />
               </motion.button>
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="absolute bottom-12 left-0 right-0 bg-neo-black text-neo-yellow border-y-3 border-neo-black py-3 rotate-1 scale-105 transform">
        <div className="flex animate-marquee whitespace-nowrap font-mono font-bold text-lg gap-8">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>PYTHON</span>
              <span>///</span>
              <span>DJANGO</span>
              <span>///</span>
              <span>TYPESCRIPT</span>
              <span>///</span>
              <span>REACT</span>
              <span>///</span>
              <span>AWS</span>
              <span>///</span>
              <span>DOCKER</span>
              <span>///</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;