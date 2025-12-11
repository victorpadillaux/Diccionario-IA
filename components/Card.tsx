import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, FileText } from 'lucide-react';
import { TermItem } from '../types';

interface CardProps {
  item: TermItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div 
      layout
      className={`relative group rounded-2xl overflow-hidden border transition-all duration-500 ease-out ${
        isOpen 
          ? 'bg-[#050014]/90 border-[#65006F] shadow-[0_0_50px_-10px_rgba(101,0,111,0.4)] backdrop-blur-xl' 
          : 'bg-[#0D00A1]/[0.03] border-white/10 hover:border-[#65006F]/80 hover:bg-[#0D00A1]/[0.08] hover:shadow-[0_0_30px_-5px_rgba(13,0,161,0.3)] backdrop-blur-sm'
      }`}
    >
      {/* Accordion Header */}
      <button 
        onClick={toggleOpen}
        className="w-full p-5 flex items-center justify-between text-left focus:outline-none z-10 relative group-hover:translate-x-1 transition-transform duration-300"
      >
        <div className="flex items-center gap-4 overflow-hidden">
          {/* Icon with gradient background for max contrast */}
          <div className={`flex-shrink-0 p-2.5 rounded-lg transition-all duration-500 shadow-lg ${
            isOpen 
              ? 'bg-gradient-to-br from-[#0D00A1] to-[#65006F] text-white ring-2 ring-[#65006F]/50' 
              : 'bg-[#0D00A1]/10 text-[#a89eff] border border-[#0D00A1]/30 group-hover:bg-gradient-to-br group-hover:from-[#0D00A1] group-hover:to-[#65006F] group-hover:text-white group-hover:border-transparent'
          }`}>
            <Icon size={20} strokeWidth={2} />
          </div>
          {/* Title on single line */}
          <h3 className={`text-lg font-sans font-semibold tracking-wide transition-colors duration-300 truncate ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
            {item.title}
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className={`flex-shrink-0 ml-4 transition-colors duration-300 ${isOpen ? 'text-[#c68aff]' : 'text-slate-500 group-hover:text-[#c68aff]'}`}
        >
          <ChevronDown size={20} strokeWidth={2} />
        </motion.div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-2 space-y-6">
              
              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#65006F]/50 to-transparent opacity-70"></div>

              {/* Video Placeholder */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#8a75ff] uppercase tracking-[0.2em]">
                  <Play size={10} fill="currentColor" />
                  <span>Video Explicativo</span>
                </div>
                <div className={`w-full aspect-video rounded-lg border border-[#0D00A1]/30 bg-black/60 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group/video transition-all hover:border-[#65006F]/60 hover:shadow-[0_0_20px_-5px_rgba(101,0,111,0.3)] ${!item.videoUrl ? 'cursor-pointer' : ''}`}>
                  {item.videoUrl ? (
                    <iframe 
                      src={item.videoUrl} 
                      className="w-full h-full" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      allowFullScreen 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0D00A1]/20 via-transparent to-[#65006F]/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center mb-3 group-hover/video:scale-110 group-hover/video:bg-[#65006F] group-hover/video:border-transparent transition-all duration-300 backdrop-blur-md shadow-lg">
                        <Play size={24} className="text-white ml-1 fill-current" />
                      </div>
                      
                      <span className="text-xs font-medium tracking-wide text-slate-400 group-hover/video:text-white transition-colors">
                        &lt;!-- Video Vimeo --&gt;
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Transcription Placeholder */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#d48aff] uppercase tracking-[0.2em]">
                  <FileText size={12} />
                  <span>Transcripción</span>
                </div>
                <div className="p-5 rounded-lg bg-[#0D00A1]/10 border border-[#0D00A1]/20 text-slate-300 text-sm leading-7 font-light relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0D00A1] to-[#65006F] rounded-l-lg opacity-50"></div>
                  {item.transcription ? (
                    <p className="text-slate-300 leading-relaxed opacity-90">
                      {item.transcription}
                    </p>
                  ) : (
                    <>
                      <p className="italic opacity-70 mb-3 text-xs text-[#a89eff]">
                         &lt;!-- Contenido de la transcripción --&gt;
                      </p>
                      <div className="space-y-3 opacity-40">
                         <div className="h-1.5 w-full bg-[#8a75ff] rounded-full"></div>
                         <div className="h-1.5 w-[92%] bg-[#8a75ff] rounded-full"></div>
                         <div className="h-1.5 w-[96%] bg-[#8a75ff] rounded-full"></div>
                         <div className="h-1.5 w-[85%] bg-[#8a75ff] rounded-full"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};