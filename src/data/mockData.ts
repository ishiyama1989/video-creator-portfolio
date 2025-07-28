import { Project, Category, Profile } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'PR動画', slug: 'pr-video', description: 'プロモーション・宣伝動画' },
  { id: '2', name: 'ミュージックビデオ', slug: 'music-video', description: 'アーティストのMV制作' },
  { id: '3', name: 'コーポレート', slug: 'corporate', description: '企業紹介・採用動画' },
  { id: '4', name: 'イベント', slug: 'event', description: 'イベント記録・ライブ映像' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: '母から受け継いだ"おもてなしの心"',
    description: '環富士山名物グルメグランプリ2022 金賞受賞作品\n富士河口湖町の名物グルメを紹介するプロモーション動画。',
    videoUrl: '/videos/motomochi.mp4',
    thumbnailUrl: '/videos/motomochi.jpg',
    category: categories[0],
    tags: ['グルメ', 'プロモーション', '富士河口湖町'],
    client: 'おはぎ屋 もともち',
    year: 2022,
    featured: true,
  },
  {
    id: '2',
    title: '日本一硬い「吉田のうどん」',
    description: '環富士山名物グルメグランプリ2023 4位入賞作品\n富士吉田市の名物グルメを紹介するプロモーション動画。',
    videoUrl: '/videos/yoshidaudon.mp4',
    thumbnailUrl: '/videos/yoshidaudon.jpg',
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
  {
    id: '4',
    title: 'FPVドローン空撮「富士山の絶景」',
    description: 'FPVドローンによる迫力ある富士山空撮映像。\n臨場感溢れる映像美をお楽しみください。',
    videoUrl: '/videos/kawaguchiko.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605197788044-5a67c9c1fb4e?w=800',
    category: categories[3],
    tags: ['ドローン', '空撮', '富士山'],
    client: '観光協会',
    year: 2024,
    featured: true,
  },
  {
    id: '5',
    title: 'ミュージックビデオ「夢の向こう側」',
    description: 'アーティストの想いを映像で表現したMV作品。\n感動的なストーリーと美しい映像が融合。',
    videoUrl: '/videos/kawaguchiko.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    category: categories[1],
    tags: ['MV', '音楽', 'アーティスト'],
    client: 'レコード会社',
    year: 2024,
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
    social: [
      { platform: 'YouTube', url: 'https://youtube.com/@example', icon: 'youtube' },
      { platform: 'Instagram', url: 'https://instagram.com/example', icon: 'instagram' },
      { platform: 'Twitter', url: 'https://twitter.com/example', icon: 'twitter' },
    ],
  },
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' as string,
};