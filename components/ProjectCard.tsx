import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors duration-500 flex flex-col h-full"
    >
      {/* Number Index for "Stacking" feel */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-black font-mono flex items-center justify-center text-sm font-bold z-20 border border-neutral-800">
        0{index + 1}
      </div>

      {/* Image - Grayscale to Color on hover */}
      <div className="relative h-64 overflow-hidden border-b border-neutral-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-3xl font-serif italic text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
            {project.title}
          </h3>
          <div className="w-12 h-0.5 bg-neutral-700 group-hover:bg-white transition-colors duration-500 mb-4" />
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans flex-grow">
          {project.description}
        </p>

        {/* Tech Stack - Minimal tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 border border-neutral-800 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800 mt-auto">
           <button className="text-neutral-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
             <Github className="w-4 h-4" /> Source
           </button>
           <button className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2">
             View Case Study <ArrowUpRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;