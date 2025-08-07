import React, { useEffect, useState, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Github,
  Linkedin,
  Code,
  Database,
  Brain,
  Rocket,
  Sparkles,
  ChevronDown,
  Terminal,
  Zap
} from 'lucide-react';
import profileImg from '../assets/profile.png';

// Type definitions
interface Role {
  text: string;
  icon: React.ReactNode;
}

interface HeroProps {
  name?: string;
  profileImage?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  description?: string;
}

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      delayChildren: 0.3, 
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      damping: 20, 
      stiffness: 300,
      mass: 0.8
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Custom hook for role cycling
const useRoleCycling = (roles: Role[], interval: number = 3000) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const nextRole = useCallback(() => {
    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
  }, [roles.length]);

  useEffect(() => {
    const timer = setInterval(nextRole, interval);
    return () => clearInterval(timer);
  }, [nextRole, interval]);

  return { currentRole: roles[currentRoleIndex], currentRoleIndex };
};

const Hero: React.FC<HeroProps> = ({
  name = "Abunesh R P",
  profileImage = profileImg,
  githubUrl = "https://github.com/Abunesh126",
  linkedinUrl = "https://www.linkedin.com/in/abunesh-r-p-803677278/",
  description = "I build powerful, scalable web applications and AI-driven solutions by combining expertise in frontend, backend, and data modeling — delivering innovative products with precision and performance."
}) => {
  const roles: Role[] = [
    { text: 'Fullstack Developer', icon: <Code className="w-5 h-5" /> },
    { text: 'Data Analyst', icon: <Database className="w-5 h-5" /> },
    { text: 'AI/ML Developer', icon: <Brain className="w-5 h-5" /> },
    { text: 'Innovation Engineer', icon: <Zap className="w-5 h-5" /> },
  ];

  const { currentRole } = useRoleCycling(roles);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero section"
      role="banner"
    >
      {/* Enhanced background with better gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950" />
        
        {/* Animated background elements */}
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Main content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Status badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/30 dark:border-white/20 shadow-lg">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Available for opportunities
                  </span>
                </div>
              </motion.div>

              {/* Profile image */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative w-48 h-48 sm:w-56 sm:h-56"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt={`${name} - Profile`}
                        className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-2xl"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-indigo-500 shadow-2xl flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-bold text-white">
                          {name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-10 blur-lg" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight"
              >
                {name}
              </motion.h1>

              {/* Dynamic role */}
              <motion.div variants={itemVariants}>
                <motion.div 
                  key={currentRole.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center lg:justify-start gap-3 text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 min-h-[4rem]"
                >
                  {currentRole.icon}
                  <span>{currentRole.text}</span>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                {description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  View Projects
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-gray-800 dark:text-white font-bold rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} className="flex gap-6 justify-center lg:justify-start">
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-white" />
                </motion.a>
                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right column - Enhanced floating elements */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Code snippet 1 */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute top-16 right-8 p-6 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl font-mono text-sm max-w-xs"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">developer.js</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-blue-400">const</div>
                    <div className="text-purple-400 ml-2">developer = {`{`}</div>
                    <div className="text-emerald-400 ml-4">name: '{name.split(' ')[0]}',</div>
                    <div className="text-amber-400 ml-4">passion: 'Innovation',</div>
                    <div className="text-cyan-400 ml-4">skills: ['AI', 'ML', 'Web']</div>
                    <div className="text-purple-400 ml-2">{`}`}</div>
                  </div>
                </motion.div>

                {/* Terminal window */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '2s' }}
                  className="absolute bottom-16 left-8 p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl max-w-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-gray-300">Terminal</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-gray-400">$ npm run innovation</div>
                    <div className="text-green-400">✓ Building the future...</div>
                    <div className="text-blue-400">✓ Compiling dreams...</div>
                    <div className="text-purple-400">✓ Deploying solutions...</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400">Ready to innovate!</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating orb */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '4s' }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                >
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-full opacity-30 blur-2xl animate-pulse" />
                  <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 group"
          aria-label="Scroll to explore more content"
        >
          <span className="text-sm font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;