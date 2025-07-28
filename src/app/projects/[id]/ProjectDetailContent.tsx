'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/mockData';
import { Project } from '@/types';

export default function ProjectDetailContent({ id }: { id: string }) {
  const [project, setProject] = useState<Project | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">プロジェクトが見つかりません</h1>
          <Link 
            href="/"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  const handlePlayVideo = () => {
    console.log('Playing video:', project?.videoUrl);
    setIsVideoPlaying(true);
  };

  const relatedProjects = projects.filter(p => 
    p.id !== project.id && p.category.id === project.category.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:text-primary-400 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ポートフォリオに戻る</span>
          </Link>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Video Section */}
        <section className="relative">
          <div className="aspect-video max-w-6xl mx-auto">
            {isVideoPlaying ? (
              <video
                className="w-full h-full object-cover rounded-lg"
                controls
                autoPlay
                poster={project.thumbnailUrl}
                onError={(e) => {
                  console.error('Video load error:', e);
                  setIsVideoPlaying(false);
                }}
              >
                <source src={project.videoUrl} type="video/mp4" />
                <p className="text-white p-4">お使いのブラウザは動画の再生をサポートしていません。</p>
              </video>
            ) : (
              <div 
                className="relative w-full h-full bg-cover bg-center rounded-lg overflow-hidden cursor-pointer group"
                style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                onClick={handlePlayVideo}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 text-white rounded-full p-6 shadow-lg hover:bg-primary-600 transition-colors"
                  >
                    <Play className="w-12 h-12 ml-1" />
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project Details */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                    {project.category.name}
                  </span>
                  {project.featured && (
                    <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                      注目作品
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Extended Description */}
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    この作品では、最新の映像技術と創造的なストーリーテリングを組み合わせて、
                    視聴者の心に深く響く映像体験を創り出しました。制作過程では、
                    クライアントの要望を丁寧にヒアリングし、ブランドの価値観と目標を
                    映像で表現することに重点を置きました。
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mt-6">
                    特に撮影においては、自然光を最大限に活用し、被写体の魅力を
                    引き出すライティング設計を行いました。ポストプロダクションでは、
                    カラーグレーディングと音響デザインにこだわり、
                    一貫したブランドイメージを構築しています。
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800 rounded-lg p-6 sticky top-24"
              >
                <h3 className="text-xl font-semibold text-white mb-6">プロジェクト詳細</h3>
                
                <div className="space-y-4">
                  {project.client && (
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-primary-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">クライアント</p>
                        <p className="text-white font-medium">{project.client}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">制作年</p>
                      <p className="text-white font-medium">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">タグ</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <Link
                    href="/#contact"
                    className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    お問い合わせ
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="bg-gray-800 py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                関連作品
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/projects/${relatedProject.id}`}
                      className="group block bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={relatedProject.thumbnailUrl}
                          alt={relatedProject.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {relatedProject.year} • {relatedProject.category.name}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}