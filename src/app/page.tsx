import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { profile, projects } from '@/data/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <HeroSection 
          title="映像で物語を紡ぐ"
          subtitle="あなたの想いを映像に込めて、心に響くストーリーをお届けします"
          videoUrl="/videos/kawaguchiko.mp4"
        />
      </section>

      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              作品ギャラリー
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 whitespace-pre-line">
              これまでに手がけた映像作品をご覧ください。{'\n'}各プロジェクトに込めた想いとストーリーをお楽しみください。
            </p>
          </div>

          {/* スライダー表示 */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 sm:gap-8 pb-4" style={{width: 'fit-content'}}>
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block flex-shrink-0"
                    style={{width: '300px'}}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-primary-500 text-white rounded-full p-4 hover:bg-primary-600 transition-colors">
                          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 text-xs sm:text-sm rounded-full">
                          {project.category.name}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">{project.year}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-3 sm:mb-4 line-clamp-3 whitespace-pre-line">
                        {project.description}
                      </p>
                      
                      {project.client && (
                        <p className="text-gray-400 text-xs sm:text-sm">
                          クライアント: {project.client}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              プロフィール
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                width={192}
                height={192}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto lg:mx-0 mb-6 sm:mb-8 object-cover shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center lg:text-left">
                石田麻也<span className="text-base sm:text-lg font-normal text-gray-300 ml-2">（いしだ　まや）</span>
              </h3>
              <p className="text-lg sm:text-xl text-primary-400 mb-4 sm:mb-6 text-center lg:text-left">{profile.title}</p>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{profile.bio}</p>
              
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center lg:text-left">スキル</h4>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            お問い合わせ
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-2">
            映像制作のご相談・お見積もりは、お気軽にお問い合わせください。
          </p>
          
          
          <Link 
            href="/contact"
            className="inline-block bg-primary-500 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full hover:bg-primary-600 transition-colors duration-300 transform hover:scale-105 font-semibold text-base sm:text-lg"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </main>
  );
}
