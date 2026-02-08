
import React, { useState, useEffect } from 'react';
import { BilingualText } from './components/BilingualText';
import { TEAM, PARTNERS, FILMS, PROJECTS } from './constants';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const currentMsg = userInput;
    setUserInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: currentMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: currentMsg,
        config: {
          systemInstruction: `You are the AI representative for Compost Yard Studio (堆肥场). 
          The studio is a high-end AIGC digital creative team specializing in automotive commercial shorts and CG.
          Key people: Huang Jianle (Creative/AI Narrative), Hu Kangkang (Art/Cinematography), Xie Bo (Technical/VFX).
          Legacy: 20 years of cinematic VFX experience including Detective Dee and The Old Summer Palace.
          Respond in both Chinese and English professionally. Keep it concise.`
        }
      });

      setChatHistory(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Error connecting to studio intelligence." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const categories = [
    { id: 'AIGC', cn: 'AIGC数字艺术', en: 'AIGC Digital Art' },
    { id: 'TVC', cn: '商业广告', en: 'Commercial Advertising' },
    { id: 'Promotional', cn: '宣传片', en: 'Promotional Brand Films' },
    { id: 'VFX', cn: '视觉特效', en: 'Visual Effects' },
  ];

  // Precise Studio Logo SVG (Brain + 3 Leaves) matching the user's attachment perfectly.
  const StudioLogo = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 120" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Organic Brain Shape with internal loops as seen in the logo */}
      <path d="M50 100 C65 100 85 85 85 65 C85 50 70 45 60 45 C65 35 55 30 50 35 C45 30 35 35 40 45 C30 45 15 50 15 65 C15 85 35 100 50 100 Z" />
      <path d="M30 65 Q45 55 50 70 Q55 85 70 70" strokeWidth="1.5" opacity="0.4" />
      <path d="M35 75 Q50 85 65 75" strokeWidth="1.5" opacity="0.4" />
      
      {/* Growing Plant Stems and Leaves */}
      <path d="M50 45 V20" /> {/* Center stem */}
      <path d="M50 20 C50 20 56 12 50 0 C44 12 50 20 50 20 Z" fill="currentColor" stroke="none" /> {/* Center Leaf */}
      
      <path d="M50 40 Q40 35 25 22" /> {/* Left stem */}
      <path d="M25 22 C25 22 18 18 12 25 C20 32 25 22 25 22 Z" fill="currentColor" stroke="none" /> {/* Left Leaf */}
      
      <path d="M50 40 Q60 35 75 22" /> {/* Right stem */}
      <path d="M75 22 C75 22 82 18 88 25 C80 32 75 22 75 22 Z" fill="currentColor" stroke="none" /> {/* Right Leaf */}
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-white/5' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-500 text-[#00F2FF]">
               <StudioLogo />
            </div>
            <span className="text-base font-bold tracking-tighter text-white uppercase">COMPOST YARD</span>
          </div>
          <div className="hidden md:flex space-x-8 text-[9px] font-medium tracking-[0.3em] uppercase text-slate-400">
            <a href="#hero" className="hover:text-[#00F2FF] transition-colors">Vision</a>
            <a href="#works" className="hover:text-[#00F2FF] transition-colors">Works</a>
            <a href="#trinity" className="hover:text-[#00F2FF] transition-colors">Trinity</a>
            <a href="#legacy" className="hover:text-[#00F2FF] transition-colors">Legacy</a>
            <button 
              onClick={() => setIsAiOpen(true)}
              className="px-3 py-1 border border-[#00F2FF]/30 rounded-full hover:bg-[#00F2FF]/10 transition-all text-[#00F2FF]"
            >
              Ask AI
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            style={{ 
                filter: 'grayscale(100%) brightness(0.35)',
                transform: 'scale(1.01)',
                display: 'block'
            }}
            alt="Hero Background"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-gradient mb-6 tracking-tighter flex flex-wrap justify-center items-center gap-x-4">
            堆肥场 <span className="text-[#00F2FF]/30 font-light">|</span> <span className="text-white">COMPOST YARD</span>
          </h1>
          
          <div className="flex flex-col space-y-2 mb-8">
            <p className="text-base md:text-xl text-[#00F2FF] tracking-[0.3em] font-light neon-glow uppercase">
              AIGC数字创意团队 ｜ 商业短片定制 ｜ CG制作
            </p>
            <p className="text-[9px] md:text-[10px] text-slate-500 tracking-[0.4em] font-light uppercase">
              AIGC Digital Creative Team | Commercial Shorts | CG Production
            </p>
          </div>

          <div className="h-[1px] w-12 bg-[#00F2FF]/30 mx-auto mb-8"></div>
          
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-xs md:text-sm">
            融合20年电影级视效底蕴，驱动AI时代数字营销。<br/>
            <span className="text-slate-500 italic mt-3 block text-[11px] font-light">
              Merging 20 years of cinematic excellence with generative intelligence to drive automotive marketing.
            </span>
          </p>
          
          <div className="mt-10 flex justify-center">
            <a href="#works" className="px-8 py-3 bg-transparent border border-[#00F2FF]/40 text-[#00F2FF] font-bold text-[9px] tracking-widest uppercase hover:bg-[#00F2FF] hover:text-black transition-all duration-500">
              Explore Projects / 探索项目
            </a>
          </div>
        </div>
      </section>

      {/* Work Showcase Section - 2x2 Grid with tight gaps and large visuals */}
      <section id="works" className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <BilingualText cn="作品集" en="Works Showcase" className="items-center" />
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className="mb-12 last:mb-0">
            <div className="flex items-end justify-between mb-4 border-b border-white/5 pb-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white tracking-tight uppercase">{cat.cn}</h3>
                <span className="text-[8px] text-[#00F2FF] tracking-[0.3em] uppercase font-light mt-0.5">{cat.en}</span>
              </div>
              <div className="hidden md:block h-px flex-grow mx-8 bg-gradient-to-r from-white/10 to-transparent"></div>
              <span className="text-slate-600 text-[9px] tracking-widest uppercase">SECTION 0{categories.indexOf(cat)+1}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.filter(p => p.category === cat.id).map((project) => (
                <div 
                  key={project.id} 
                  className="group glass-card relative overflow-hidden aspect-video sm:aspect-square cursor-pointer border-white/10"
                  onClick={() => project.link && project.link !== '#' && window.open(project.link, '_blank')}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-50 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4 className="text-white font-bold text-lg mb-0.5 tracking-tight group-hover:text-[#00F2FF] transition-colors">{project.title}</h4>
                    <p className="text-slate-400 text-[9px] uppercase tracking-widest font-light">{project.titleEn}</p>
                    {project.link && project.link !== '#' && (
                      <div className="mt-4 flex items-center space-x-2 text-[8px] text-[#00F2FF] tracking-widest uppercase font-bold">
                        <span>WATCH REEL</span>
                        <div className="w-6 h-[1px] bg-[#00F2FF]"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Core Trinity Section */}
      <section id="trinity" className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-10">
          <BilingualText cn="核心成员" en="Core Trinity" className="items-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TEAM.map((member, i) => (
            <div key={i} className="glass-card group relative overflow-hidden flex flex-col h-full border-white/5">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="p-6 flex-grow">
                <BilingualText cn={member.name} en={member.nameEn} className="mb-3" />
                <div className="mb-4">
                  <p className="text-[#00F2FF] text-[9px] font-bold uppercase tracking-[0.2em]">{member.role}</p>
                  <p className="text-slate-600 text-[8px] uppercase tracking-tighter mt-1">{member.roleEn}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{member.bio}</p>
                  <p className="text-slate-600 text-[10px] italic leading-relaxed font-light">{member.bioEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Legacy */}
      <section id="legacy" className="py-16 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <BilingualText cn="车企合作伙伴" en="Automotive Partners" className="mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {PARTNERS.map((p, i) => (
                  <div key={i} className="border border-white/5 p-4 flex flex-col items-center justify-center hover:bg-white/5 transition-colors group cursor-default">
                    <span className="text-sm font-bold text-slate-500 group-hover:text-white transition-colors">{p.name}</span>
                    <span className="text-[8px] text-slate-700 uppercase tracking-widest mt-1">{p.nameEn}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <BilingualText cn="电影视效背书" en="Film & VFX Legacy" className="mb-6" />
              <div className="space-y-2">
                {FILMS.map((film, i) => (
                  <div key={i} className="flex items-center space-x-3 group cursor-default">
                    <div className="w-1 h-1 bg-[#00F2FF] rotate-45 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-slate-500 group-hover:text-slate-200 transition-colors tracking-tight text-sm font-light">
                      {film}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center cursor-pointer group text-[#00F2FF]/40 hover:text-[#00F2FF] transition-colors">
             <StudioLogo />
          </div>
          
          <div className="mb-8">
            <BilingualText cn="联系我们，开启AI数字影像新纪元。" en="Connect with us to start the AI digital imaging era." className="items-center mb-4" />
            <div className="inline-block bg-[#00F2FF]/5 px-5 py-2 rounded-full border border-[#00F2FF]/20 text-[11px] font-bold tracking-[0.2em] text-[#00F2FF] uppercase">
              TEL: 胡康康 186-1175-4880
            </div>
          </div>

          <p className="text-slate-800 font-light tracking-[0.8em] uppercase text-[8px]">
            Compost Yard Studio © 2024 | Beijing
          </p>
        </div>
      </footer>

      {/* AI Assistant Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[380px] bg-black/98 backdrop-blur-3xl z-[60] transform transition-transform duration-500 ease-in-out border-l border-white/10 ${isAiOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <BilingualText cn="工作室 AI 助手" en="Studio AI Assistant" />
            <button onClick={() => setIsAiOpen(false)} className="text-slate-700 hover:text-white text-2xl font-light">×</button>
          </div>

          <div className="flex-grow overflow-y-auto mb-6 space-y-6 pr-4 custom-scrollbar">
            {chatHistory.length === 0 && (
              <div className="text-slate-800 text-[10px] italic border-l border-[#00F2FF]/30 pl-4 py-2 leading-relaxed">
                您可以询问关于堆肥场、团队背景或我们的AIGC技术服务。<br/>
                Ask me about Compost Yard, our team, or our AIGC technical services.
              </div>
            )}
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-lg text-xs leading-relaxed ${msg.role === 'user' ? 'bg-[#00F2FF]/5 text-white border border-[#00F2FF]/20' : 'bg-white/5 text-slate-400 border border-white/5'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-[#00F2FF] text-[8px] animate-pulse font-bold tracking-[0.2em] uppercase ml-1">Decoding Response...</div>
            )}
          </div>

          <form onSubmit={handleAskAi} className="relative mt-auto">
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Inquire about our process..."
              className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-xs text-white focus:outline-none focus:border-[#00F2FF]/30 transition-colors"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00F2FF] font-bold text-[8px] tracking-widest uppercase hover:text-white transition-colors">
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-1/3 -right-1/4 w-[25vw] h-[25vw] bg-[#00F2FF]/2 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-1/3 -left-1/4 w-[25vw] h-[25vw] bg-white/2 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;
