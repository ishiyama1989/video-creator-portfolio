import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { profile, projects } from '@/data/mockData';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <HeroSection 
          title="映像で物語を紡ぐ"
          subtitle="あなたの想いを映像に込めて、心に響くストーリーをお届けします"
        />
      </section>

      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              作品ギャラリー
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              これまでに手がけた映像作品をご覧ください。
              各プロジェクトに込めた想いとストーリーをお楽しみください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
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
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                      {project.category.name}
                    </span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {project.client && (
                    <p className="text-gray-400 text-sm">
                      クライアント: {project.client}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              プロフィール
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 mb-8 object-cover shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{profile.name}</h3>
              <p className="text-xl text-primary-400 mb-6">{profile.title}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{profile.bio}</p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">スキル</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
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

      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            映像制作のご相談・お見積もりは、お気軽にお問い合わせください。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">メール</h3>
              <p className="text-primary-400">{profile.contact.email}</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">電話</h3>
              <p className="text-primary-400">{profile.contact.phone}</p>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-colors duration-300 transform hover:scale-105 font-semibold"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </main>
  );
}
