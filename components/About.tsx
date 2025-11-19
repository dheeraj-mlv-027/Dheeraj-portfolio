import React from 'react';
import { SectionId, ABOUT_TEXT } from '../constants';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-neo-blue border-t-3 border-neo-black relative overflow-hidden">
      {/* Background Noise/Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Title Card */}
            <div className="md:w-1/3 bg-neo-black text-neo-white p-6 border-3 border-neo-white shadow-[8px_8px_0px_0px_#fff] -rotate-1">
              <User size={48} className="mb-4 text-neo-yellow" />
              <h2 className="text-4xl font-black uppercase break-words">Who Am I?</h2>
              <div className="mt-4 h-2 bg-neo-pink w-full"></div>
            </div>

            {/* Content Card */}
            <div className="md:w-2/3 bg-neo-white border-3 border-neo-black p-8 md:p-12 shadow-neo-xl rotate-1">
              <p className="font-mono text-lg md:text-xl leading-relaxed">
                <span className="bg-neo-yellow px-1 font-bold mr-2">Def:</span>
                {ABOUT_TEXT}
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="bg-gray-100 p-4 border-2 border-neo-black text-center">
                    <span className="block text-3xl font-black">IIT</span>
                    <span className="font-mono text-sm">Mandi Grad</span>
                 </div>
                 <div className="bg-gray-100 p-4 border-2 border-neo-black text-center">
                    <span className="block text-3xl font-black">3+</span>
                    <span className="font-mono text-sm">Yrs Exp (inc. Intern)</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;