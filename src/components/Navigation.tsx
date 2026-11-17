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
        <div className="max-w-7xl mx-auto px-0 sm:px-0 py-3 sm:py-4 relative">
          <div className="flex items-center justify-end">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-primary-400 transition-colors duration-300 absolute left-6 sm:left-8"
            >
              Contents Creator
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 pr-4 sm:pr-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium group overflow-hidden"
                >
                  {/* フィルムストリップ風背景エフェクト */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ 
                      x: '100%',
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* ビデオフレーム風ボーダー */}
                  <motion.div
                    className="absolute inset-0 border border-transparent group-hover:border-primary-400/30"
                    whileHover={{
                      borderColor: 'rgba(99, 102, 241, 0.5)',
                      boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)',
                      transition: { duration: 0.3 }
                    }}
                  />

                  {/* アイコンにカメラシャッター風アニメーション */}
                  <motion.div
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      rotateY: [0, 180, 360],
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="relative z-10"
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>

                  {/* テキストにタイプライター風エフェクト */}
                  <motion.span
                    whileHover={{
                      letterSpacing: '0.05em',
                      transition: { duration: 0.3 }
                    }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* プログレスバー風アンダーライン */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: '100%',
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  />
                </motion.button>
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
            className="fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-gray-900/98 backdrop-blur-md z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-16 sm:pt-20 px-4 sm:px-6">
              <div className="flex-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      x: 15,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.href)}
                    className="relative flex items-center gap-3 sm:gap-4 w-full text-left py-4 sm:py-6 text-gray-300 hover:text-white border-b border-gray-800 transition-colors duration-300 overflow-hidden"
                  >
                    {/* モバイル版フィルムストリップエフェクト */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-purple-400"
                      initial={{ height: 0 }}
                      whileHover={{ 
                        height: '100%',
                        transition: { duration: 0.4 }
                      }}
                    />
                    
                    {/* ビデオプレイエフェクト */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0"
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3 }
                      }}
                    />

                    {/* カメラレンズ風ズームアニメーション */}
                    <motion.div
                      whileHover={{ 
                        scale: [1, 1.3, 1.1],
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      className="relative z-10"
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    
                    {/* テキストにグリッチエフェクト風 */}
                    <motion.span 
                      className="text-base sm:text-lg font-medium relative z-10"
                      whileHover={{
                        textShadow: [
                          '0 0 0 transparent',
                          '2px 0 0 #ff0000, -2px 0 0 #00ffff',
                          '0 0 0 transparent'
                        ],
                        transition: { duration: 0.3, times: [0, 0.5, 1] }
                      }}
                    >
                      {item.name}
                    </motion.span>
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