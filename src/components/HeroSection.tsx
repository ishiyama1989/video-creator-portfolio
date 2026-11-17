'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}: HeroSectionProps) {
  // ブラウザは「音ありの自動再生」を禁止しているため、最初は消音で再生する
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.volume = 0.3; // 音声オン時の音量を30%に設定
    video.play().catch(() => {
      // 省電力モードなどで自動再生できない場合は何もしない
    });
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;
    if (video) {
      video.muted = nextMuted;
      if (!nextMuted) {
        video.play().catch(() => {});
      }
    }
    setIsMuted(nextMuted);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <span className="font-semibold">作品を見る</span>
          </button>
        </motion.div>

        {/* Mute Control Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleMute}
          className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300"
          title={isMuted ? '音声をオンにする' : '音声をオフにする'}
        >
          {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToProjects}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}