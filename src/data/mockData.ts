import { Project, Category, Profile } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'コマーシャル', slug: 'commercial', description: 'TVCMやWeb広告動画' },
  { id: '2', name: 'ミュージックビデオ', slug: 'music-video', description: 'アーティストのMV制作' },
  { id: '3', name: 'コーポレート', slug: 'corporate', description: '企業紹介・採用動画' },
  { id: '4', name: 'イベント', slug: 'event', description: 'イベント記録・ライブ映像' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'ブランドCM「未来への扉」',
    description: '新しい時代を切り開く企業のブランドイメージを表現したコマーシャル動画。',
    videoUrl: '/videos/motomochi.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1533562618677-54cc0e6f8a46?w=800',
    category: categories[0],
    tags: ['ブランディング', 'コマーシャル', '4K'],
    client: '株式会社Example',
    year: 2024,
    featured: true,
  },
  {
    id: '2',
    title: '日本一硬いうどん「吉田のうどん」',
    description: '富士吉田市の名物グルメを紹介するプロモーション動画。',
    videoUrl: '/videos/yoshidaudon.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    category: categories[0],
    tags: ['グルメ', 'プロモーション', '富士吉田市'],
    client: '白須うどん',
    year: 2023,
    featured: true,
  },
  {
    id: '3',
    title: '企業採用動画「共に歩む未来」',
    description: '成長企業の魅力と社員の想いを伝える採用動画。',
    videoUrl: '/videos/河口湖2.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    category: categories[2],
    tags: ['採用', '企業', 'インタビュー'],
    client: 'Example Corporation',
    year: 2023,
  },
];

export const profile: Profile = {
  name: '石田麻也（いしだ　まや）',
  title: '映像クリエイター',
  bio: '映像制作を通じて、地域の魅力や企業の想いを伝える動画コンテンツを制作しています。FPVドローンによる迫力ある空撮からYouTube動画編集まで、幅広い映像制作に対応いたします。',
  skills: [
    'Final Cut Pro',
    'FPVドローン',
    'Vivecoding',
    'LP作成',
    'YouTube動画編集',
  ],
  experience: [
    {
      title: 'シニア映像ディレクター',
      company: '株式会社クリエイティブスタジオ',
      period: '2020 - 現在',
      description: '大手企業のブランディング動画やTVCMの制作を担当。チームリーダーとしてプロジェクト全体の管理も行う。',
    },
    {
      title: '映像クリエイター',
      company: 'フリーランス',
      period: '2018 - 2020',
      description: 'ミュージックビデオやイベント映像の制作を中心に活動。多様なジャンルの映像制作に携わる。',
    },
  ],
  contact: {
    email: 'contact@example.com',
    phone: '090-1234-5678',
    social: [
      { platform: 'YouTube', url: 'https://youtube.com/@example', icon: 'youtube' },
      { platform: 'Instagram', url: 'https://instagram.com/example', icon: 'instagram' },
      { platform: 'Twitter', url: 'https://twitter.com/example', icon: 'twitter' },
    ],
  },
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' as string,
};