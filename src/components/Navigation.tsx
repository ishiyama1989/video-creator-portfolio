'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, User, Mail } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'ホーム', href: '#home', icon: Play },
  { name: '作品', href: '#projects', icon: Play },
  { name: 'プロフィール', href: '#profile', icon: User },
  { name: 'お問い合わせ', href: '/contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External links, let Next.js handle routing
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-primary-400 transition-colors duration-300"
            >
              VideoCreator
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-primary-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900/98 backdrop-blur-md z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-4 w-full text-left py-6 text-gray-300 hover:text-white border-b border-gray-800 transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-lg font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="py-6 border-t border-gray-800"
              >
                <p className="text-gray-400 text-sm mb-2">お問い合わせ</p>
                <p className="text-white font-medium">contact@example.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}