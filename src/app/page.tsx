import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { profile, projects, websites } from '@/data/mockData';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';

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
                {projects.filter(project => project.gallerySection !== 'ビデオポッドキャスト').map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block flex-shrink-0 w-80 sm:w-96 lg:w-[400px]"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <LazyImage
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
                          {project.category?.name || project.gallerySection || 'その他'}
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

      {/* Webサイト制作セクション */}
      <section id="websites" className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Webサイト制作
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 whitespace-pre-line">
              BASEのHTML編集を活用して、テンプレートにとらわれない{'\n'}自由度の高い販売サイトを制作しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {websites.map((site) => (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="aspect-video relative overflow-hidden bg-white flex items-center justify-center">
                  {site.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={site.imageUrl}
                      alt={site.name}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-gray-800">{site.name}</span>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 whitespace-pre-line leading-relaxed">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {site.points.map((point) => (
                      <span
                        key={point}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-600"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-semibold">
                    サイトを見る →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ビデオポッドキャストセクション */}
      <section id="video-podcast" className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              ビデオポッドキャスト
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 whitespace-pre-line">
              現在ディレクターとして企画・制作・配信を担当している番組をご紹介します。
            </p>
          </div>

          {/* 単一番組の特別レイアウト */}
          {(() => {
            const podcastProject = projects.find(project => project.gallerySection === 'ビデオポッドキャスト');
            if (!podcastProject) return null;
            
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* 左側：サムネイル */}
                <div className="order-2 lg:order-1">
                  <div className="relative block overflow-hidden rounded-lg shadow-2xl">
                    <div className="aspect-video relative overflow-hidden">
                      <LazyImage
                        src={podcastProject.thumbnailUrl}
                        alt={podcastProject.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 右側：番組情報 */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                      {podcastProject.gallerySection}
                    </span>
                    <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {podcastProject.year}年〜
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      {podcastProject.title}
                    </h3>
                    <LazyImage
                      src="/videos/tyabudai.png"
                      alt="ちゃぶ台盆地会議 ロゴ"
                      width={60}
                      height={60}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 whitespace-pre-line">
                    {podcastProject.description}
                  </p>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">担当業務</h4>
                    <div className="flex flex-wrap gap-2">
                      {podcastProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://open.spotify.com/show/30TvT3LEA9QN41G6i9CYqY?si=JE0A09N2RxuWJ81lob-kdQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#1DB954] text-white rounded-full hover:bg-[#1ed760] transition-colors font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotifyで聴く
                  </a>
                </div>
              </div>
            );
          })()}
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
              <LazyImage
                src={profile.avatarUrl}
                alt={profile.name}
                width={192}
                height={192}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto lg:mx-0 mb-6 sm:mb-8 object-cover object-left-center shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center lg:text-left">
                {profile.name}
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
