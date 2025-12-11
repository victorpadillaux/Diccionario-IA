import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#020008]"></div>
      
      {/* Gradient Orbs - Adjusted to new palette #0D00A1 to #65006F with slightly higher opacity for mood but keeping bg dark */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0D00A1]/25 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#65006F]/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[30%] left-[60%] transform -translate-x-1/2 w-[500px] h-[500px] bg-[#0D00A1]/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid overlay - extremely subtle */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020008] via-transparent to-[#020008] opacity-90"></div>
    </div>
  );
};