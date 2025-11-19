import React from 'react';
import { SectionId, PERSONAL_INFO } from '../constants';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-neo-black text-white relative">
      {/* Decorative lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <h2 className="text-5xl md:text-8xl font-black mb-8 text-neo-green">
          START LINK?
        </h2>
        
        <p className="font-mono text-gray-400 mb-12 max-w-xl mx-auto">
          Initiate a handshake protocol. Available for freelance contracts, full-time employment, or random tech discussions.
        </p>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-4 bg-neo-pink text-neo-black text-2xl md:text-4xl font-black px-8 py-6 border-4 border-white hover:bg-white hover:text-neo-black transition-all shadow-[8px_8px_0px_0px_#5D5FEF] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
        >
          SEND EMAIL <Send size={32} />
        </a>

        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {PERSONAL_INFO.social.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="bg-neo-white text-neo-black p-4 border-3 border-neo-black shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <footer className="mt-24 font-mono text-xs text-gray-600">
          © {new Date().getFullYear()} DHEERAJ M.L.V // NO RIGHTS RESERVED // COPY THIS DESIGN
        </footer>

      </div>
    </section>
  );
};

export default Contact;