import React from 'react';
import { SectionId, SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-neo-yellow border-t-3 border-neo-black">
      <div className="container mx-auto px-4">
        
        <div className="bg-neo-white border-3 border-neo-black p-8 md:p-16 shadow-neo-xl max-w-5xl mx-auto transform -rotate-1">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center uppercase">
            Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((group) => (
              <div key={group.category} className="relative">
                <h3 className="font-black text-xl mb-4 bg-neo-black text-white inline-block px-2 transform -skew-x-12">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-white border-2 border-neo-black px-3 py-1 font-mono text-sm font-bold hover:bg-neo-pink hover:text-white transition-colors cursor-default shadow-[2px_2px_0px_0px_#000]"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;