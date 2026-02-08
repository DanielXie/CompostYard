
import React from 'react';

interface BilingualTextProps {
  cn: string;
  en: string;
  className?: string;
  subtle?: boolean;
}

export const BilingualText: React.FC<BilingualTextProps> = ({ cn, en, className = "", subtle = false }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className={`font-bold tracking-tight ${subtle ? 'text-slate-300' : 'text-white'}`}>{cn}</span>
      <span className={`text-xs uppercase tracking-[0.2em] font-light mt-1 ${subtle ? 'text-slate-500' : 'text-[#00F2FF]/80'}`}>
        {en}
      </span>
    </div>
  );
};
