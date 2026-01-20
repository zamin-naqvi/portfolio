import React from 'react';
import { Project, Experience, Skill } from './types';
import { Palette, Smartphone, Terminal, Layout, PenTool, Layers, Box, Cpu } from 'lucide-react';

export const PORTFOLIO_OWNER = "Zamin";

export const HERO_TAGLINE = "Pure Native Android Engineering & High-Fidelity UX.";

export const ABOUT_TEXT = "I am a specialist Android Developer and UX Designer who believes in the power of native performance. I don't touch web frameworks. My expertise lies in crafting buttery smooth mobile experiences using Kotlin and Jetpack Compose, backed by rigorous architectural patterns. I design interfaces that are not just functional, but aesthetically superior.";

export const EMAIL = "aeroloomstudio@gmail.com";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sonic Stream',
    category: 'Android / Audio',
    description: 'A native high-fidelity music player built with ExoPlayer. Features a complex custom view equalizer drawn directly on the canvas and optimized background playback services.',
    technologies: ['Kotlin', 'Jetpack Compose', 'ExoPlayer', 'Canvas API'],
    imageUrl: 'https://picsum.photos/800/600?random=10',
  },
  {
    id: '2',
    title: 'Zen Architect',
    category: 'Productivity Tool',
    description: 'A task management suite for power users. Built using Clean Architecture and MVVM patterns. Heavily utilizes Room Database for offline-first capabilities and WorkManager for background sync.',
    technologies: ['Kotlin', 'Room DB', 'Dagger Hilt', 'WorkManager'],
    imageUrl: 'https://picsum.photos/800/600?random=11',
  },
  {
    id: '3',
    title: 'Lumina Cam',
    category: 'Camera / AI',
    description: 'A manual camera application leveraging the CameraX API. Integrates on-device ML models (TensorFlow Lite) for real-time scene detection and ISO adjustment recommendations.',
    technologies: ['Android SDK', 'CameraX', 'TensorFlow Lite', 'Coroutines'],
    imageUrl: 'https://picsum.photos/800/600?random=12',
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Independent Android Developer',
    company: 'Google Play Store',
    period: '2024 - Present',
    description: 'Developing and shipping native applications directly to users. Focusing on custom UI implementation, performance profiling, and seamless UX using Kotlin and Jetpack Compose.',
  },
  {
    id: '2',
    role: 'UX Designer',
    company: 'Independent & Private Clients',
    period: '2022 - Present',
    description: 'Crafting high-fidelity prototypes and design systems. Specializing in micro-interactions, motion design, and translating concepts into intuitive mobile interfaces.',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Kotlin', level: 100, category: 'Development', icon: <Terminal className="w-5 h-5" /> },
  { name: 'Jetpack Compose', level: 98, category: 'Development', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Android SDK', level: 95, category: 'Development', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Custom UI & Material', level: 90, category: 'Design', icon: <Palette className="w-5 h-5" /> },
  { name: 'Figma', level: 92, category: 'Design', icon: <PenTool className="w-5 h-5" /> },
  { name: 'Clean Arch.', level: 88, category: 'Development', icon: <Layers className="w-5 h-5" /> },
  { name: 'Coroutines/Flow', level: 94, category: 'Development', icon: <Box className="w-5 h-5" /> },
  { name: 'Prototyping', level: 85, category: 'Design', icon: <Layout className="w-5 h-5" /> },
];