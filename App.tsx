import React from 'react';
import { Background } from './components/Background';
import { Card } from './components/Card';
import { terms } from './data';
import { Cpu, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-slate-200 font-sans selection:bg-[#65006F]/30 selection:text-white">
      <Background />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        
        {/* Header Section */}
        <header className="text-center mb-20 relative">
          <div className="inline-flex items-center justify-center py-1.5 px-4 mb-8 rounded-full bg-[#0D00A1]/20 border border-[#0D00A1]/30 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(13,0,161,0.3)]">
            <Sparkles size={12} className="text-[#a580f5] mr-2" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100 font-sans">
              Edición 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Diccionario de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D00A1] to-[#65006F] brightness-[2.5] saturate-150 filter drop-shadow-[0_2px_10px_rgba(101,0,111,0.5)]">
              Inteligencia Artificial
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-lg text-slate-300 font-light mt-6">
            <div className="p-1.5 rounded-full bg-[#0D00A1]/20 border border-[#0D00A1]/30">
               <Cpu size={16} className="text-[#8e7aff]" />
            </div>
            <p className="tracking-wide">Explicado por <span className="font-semibold text-white">RoboJon</span></p>
          </div>
        </header>

        {/* Grid Section - Using Flex wrap for true centering of last row */}
        <main className="flex flex-wrap justify-center gap-6 relative z-10">
          {terms.map((term) => (
            <div 
              key={term.id} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Card item={term} />
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-10 border-t border-white/10 text-center text-slate-400 text-xs font-light tracking-wider">
          <p>© {new Date().getFullYear()} RoboJon AI Dictionary. Todos los derechos reservados.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;