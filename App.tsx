import React, { useState } from 'react';
import { PORTFOLIO_OWNER, HERO_TAGLINE, PROJECTS, SKILLS, EXPERIENCE, ABOUT_TEXT, EMAIL } from './constants';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';
import { ArrowDown, Mail, Github, Linkedin, Smartphone, PenTool, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Background Grid - Static & Aesthetic */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern bg-[length:40px_40px]" />

      {/* Floating Tab Bar - Minimalist */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl"
        >
          <a href="#" className="font-display font-bold text-lg tracking-tight text-white">
            {PORTFOLIO_OWNER}<span className="text-neutral-500">.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>

          <a href="#contact" className="hidden md:block px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors">
            Hire Me
          </a>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            <a href="#work" className="text-4xl font-serif italic text-white" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <a href="#expertise" className="text-4xl font-serif italic text-white" onClick={() => setIsMobileMenuOpen(false)}>Expertise</a>
            <a href="#about" className="text-4xl font-serif italic text-white" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="text-xl font-mono text-neutral-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Angular & Stacking */}
      <section className="min-h-screen flex flex-col justify-center px-6 relative pt-20 overflow-hidden">
        {/* Decorative Skewed Line */}
        <div className="absolute top-0 right-0 w-[1px] h-screen bg-neutral-800 rotate-12 translate-x-32 hidden lg:block pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Text Block */}
          <div className="lg:col-span-8 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-white"></div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">Android & UX Specialist</span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
                NATIVE <br />
                <span className="font-serif italic font-light text-neutral-500 pl-4 md:pl-12 block transform -rotate-2 origin-left">perfectionist</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed border-l border-neutral-800 pl-8 ml-2">
                {HERO_TAGLINE} <br />
                <span className="text-white">Kotlin. Jetpack Compose.</span> No web fluff.
              </p>
            </motion.div>
          </div>

          {/* Abstract "Stacking" Visual */}
          <div className="lg:col-span-4 relative h-[400px] hidden lg:block perspective-1000">
            <motion.div 
              initial={{ opacity: 0, y: 50, rotateZ: 0 }}
              animate={{ opacity: 1, y: 0, rotateZ: 6 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-10 right-10 w-64 h-80 bg-neutral-800 border border-neutral-700 z-0 shadow-2xl" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, rotateZ: 0 }}
              animate={{ opacity: 1, y: 0, rotateZ: -3 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-20 right-20 w-64 h-80 bg-neutral-900 border border-neutral-700 z-10 flex items-center justify-center shadow-2xl"
            >
               <Smartphone className="text-neutral-700 w-24 h-24" strokeWidth={1} />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 lg:left-12 flex gap-4 text-xs font-mono text-neutral-600">
          <span>LAT: 34.0522° N</span>
          <span>LNG: 118.2437° W</span>
          <span>SCROLL FOR DATA</span>
        </div>
      </section>

      {/* Expertise Section - Bento Grid Style */}
      <section id="expertise" className="py-32 px-6 border-t border-neutral-900 bg-neutral-950/50 relative">
        {/* Angular Background Element */}
        <div className="absolute inset-0 bg-surface skew-y-1 transform origin-top-left -z-10 translate-y-20 h-full w-full opacity-50" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase">
              Core <span className="font-serif italic text-neutral-600 lowercase">stack</span>
            </h2>
            <p className="font-mono text-xs text-neutral-500 mt-4 md:mt-0 max-w-xs text-right">
              /01 — TECH ARSENAL<br/>
              Optimized for performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {/* Large Card */}
             <div className="md:col-span-2 md:row-span-2 bg-white text-black p-10 flex flex-col justify-between group min-h-[300px]">
                <Smartphone className="w-12 h-12 mb-4" strokeWidth={1.5} />
                <div>
                  <h3 className="text-4xl font-bold font-display mb-2">Android Native</h3>
                  <p className="font-serif italic text-neutral-600">Kotlin & Jetpack Compose</p>
                  <p className="mt-4 text-sm font-sans opacity-80">
                    Building robust, scalable applications directly for the OS. No bridges, no hybrid compromises. Pure native power.
                  </p>
                </div>
             </div>

             {/* Small Cards */}
             {SKILLS.slice(3, 7).map((skill, i) => (
               <div key={i} className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:bg-neutral-800 transition-colors">
                  <div className="text-white opacity-50">{skill.icon}</div>
                  <div>
                    <h4 className="font-mono text-xs text-neutral-500 mb-1">{skill.category}</h4>
                    <p className="font-bold text-white">{skill.name}</p>
                  </div>
               </div>
             ))}

             <div className="md:col-span-2 bg-neutral-900 border border-neutral-800 p-10 flex items-center justify-between group">
                <div>
                   <h3 className="text-2xl font-bold text-white mb-1">UI/UX Design</h3>
                   <p className="font-serif italic text-neutral-500">Visual & Interaction</p>
                </div>
                <PenTool className="w-12 h-12 text-white opacity-20 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
             </div>
          </div>
        </div>
      </section>

      {/* Work Section - Stacked Layout */}
      <section id="work" className="py-32 px-6 bg-background border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
           <div className="mb-24">
             <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-4">/02 — Selected Projects</span>
             <h2 className="text-6xl md:text-8xl font-display font-bold text-white">
               Deployments
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {PROJECTS.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
           </div>
        </div>
      </section>

      {/* Experience - Minimal List with Angular Timeline */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif italic text-white mb-16 text-center">Professional Timeline</h2>
          <div className="space-y-12 border-l border-neutral-800 pl-8 ml-4 md:ml-0">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Angular Diamond Marker */}
                <div className="absolute -left-[37px] top-2 w-4 h-4 bg-black border border-white rotate-45 group-hover:bg-white transition-colors duration-300"></div>
                
                <span className="font-mono text-xs text-neutral-500 mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-neutral-400 font-serif italic mb-4">{exp.company}</h4>
                <p className="text-neutral-500 max-w-xl">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact - Stark */}
      <section id="contact" className="py-32 px-6 bg-black text-center relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900 rotate-45 opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Smartphone className="w-16 h-16 mx-auto text-white mb-8 opacity-20" strokeWidth={1} />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Let's build <br /> <span className="text-outline">Native</span>
          </h2>
          <p className="text-neutral-500 mb-12 max-w-md mx-auto">
            Open for Android (Kotlin) and UX Design opportunities.
          </p>
          
          <a href={`mailto:${EMAIL}`} className="inline-block border border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            {EMAIL}
          </a>

          <div className="flex justify-center gap-8 mt-20 opacity-50">
            <a href="#" className="hover:text-white transition-colors"><Github /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin /></a>
          </div>
          
          <div className="mt-20 pt-8 border-t border-neutral-900 text-neutral-600 text-xs font-mono">
            <p>DESIGNED & DEVELOPED BY {PORTFOLIO_OWNER}</p>
            <p className="mt-2">KOTLIN / COMPOSE / FIGMA</p>
          </div>
        </div>
      </section>

      <ChatBot />
    </div>
  );
};

export default App;