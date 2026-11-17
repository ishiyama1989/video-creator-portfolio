import { Project, Category, Profile } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'PR動画', slug: 'pr-video', description: 'プロモーション・宣伝動画' },
  { id: '2', name: 'ミュージックビデオ', slug: 'music-video', description: 'アーティストのMV制作' },
  { id: '3', name: 'コーポレート', slug: 'corporate', description: '企業紹介・採用動画' },
  { id: '4', name: 'イベント', slug: 'event', description: 'イベント記録・ライブ映像' },
  { id: '5', name: 'YouTube動画', slug: 'youtube-video', description: 'YouTubeチャンネル向け動画制作' },
  { id: '6', name: 'ドローン空撮', slug: 'drone-aerial', description: 'FPVドローンによる空撮映像' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: '母から受け継いだ"おもてなしの心"',
    description: '環富士山名物グルメグランプリ2022 金賞受賞作品\n富士河口湖町の名物グルメを紹介するプロモーション動画。\nhttps://ohagiyamotomochi.com/',
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
    description: '環富士山名物グルメグランプリ2023 4位入賞作品\n富士吉田市の名物グルメを紹介するプロモーション動画。\nhttps://www.instagram.com/shirasu_udon.fujiyoshida/',
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
    title: '「おやじのグルメ」season１',
    description: 'YouTube「かーくんちゃんねる」の立ち上げ、過去数十本の動画の撮影、編集を担当。 https://www.youtube.com/channel/UC2p0zmc3LlBtGtVrxibIBSA',
    videoUrl: 'https://youtu.be/bVMq0LH31Wk',
    youtubeId: 'bVMq0LH31Wk',
    thumbnailUrl: '/videos/maxresdefault.jpeg',
    category: categories[4],
    tags: ['YouTube', 'グルメ', 'インタビュー'],
    client: 'かーくんちゃんねる',
    year: 2023,
  },
  {
    id: '4',
    title: 'FPVドローン空撮「富士山の絶景」',
    description: 'FPVドローンによる迫力ある富士山空撮映像。\n臨場感溢れる映像美をお楽しみください。',
    videoUrl: '/videos/kawaguchiko.mp4',
    thumbnailUrl: '/videos/kawaguchiko.jpg',
    category: categories[5],
    tags: ['FPVドローン','ドローン', '空撮', '富士山'],
    client: '自主制作',
    year: 2025,
    featured: true,
  },
  {
    id: '5',
    title: '「山中湖でワカサギ釣り！快適&楽しい」',
    description: 'ももちゃんねる 山梨応援\nhttps://www.youtube.com/@YouTuber-ih8uc/videos',
    videoUrl: 'https://youtu.be/js2o8N-YT-U',
    youtubeId: 'js2o8N-YT-U',
    thumbnailUrl: 'https://img.youtube.com/vi/js2o8N-YT-U/hqdefault.jpg',
    category: categories[4],
    tags: ['YouTube', '動画編集', '動画撮影'],
    client: 'ももちゃんねる 山梨応援',
    year: 2025,
  },
  {
    id: '6',
    title: 'ちゃぶ台盆地会議',
    description: 'ディレクターとして企画・制作・配信を担当するビデオポッドキャスト。\n山梨の魅力や地域の文化について深く掘り下げる対談番組として継続配信中。地域活性化に貢献する情報発信を行っています。',
    videoUrl: 'https://open.spotify.com/show/30TvT3LEA9QN41G6i9CYqY?si=JE0A09N2RxuWJ81lob-kdQ',
    thumbnailUrl: '/videos/chabudai.jpg',
    category: undefined,
    tags: ['ビデオポッドキャスト', 'ディレクション', '企画制作', '配信'],
    client: '自主制作',
    year: 2025,
    featured: false,
    gallerySection: 'ビデオポッドキャスト',
  },
];

export const profile: Profile = {
  name: 'Maya',
  title: '映像クリエイター',
  bio: '映像制作を通じて、地域の魅力や企業の想いを伝える動画コンテンツを制作しています。FPVドローンによる迫力ある空撮からYouTube動画編集まで、幅広い映像制作に対応いたします。',
  skills: [
    'Final Cut Pro',
    'FPVドローン',
    'Vivecoding',
    'LP作成',
    'YouTube動画編集',
    'SNS運用代行',
  ],
  experience: [
    {
      title: '映像クリエイター',
      company: 'フリーランス',
      period: '2018 - 現在',
      description: 'ミュージックビデオやイベント映像の制作を中心に活動。多様なジャンルの映像制作に携わる。',
    },
  ],
  contact: {
    email: 'mmyy03220302profuri@gmail.com',
    social: [],
  },
  avatarUrl: `/videos/DSC08718.jpeg?v=${Date.now()}` as string,
};
// 制作したWebサイト（BASEのHTML編集で作った販売サイト）
export interface Website {
  id: string;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
  points: string[];
}

export const websites: Website[] = [
  {
    id: 'ishidafarm',
    name: 'ISHIDA FARM',
    url: 'https://ishidafarm.base.ec/',
    description:
      '山梨県笛吹市の家族経営の果樹園のオンラインショップ。デラウェア・すもも・桃を販売しています。\nBASEのHTML編集機能を使い、テンプレートにはない自由なデザインで、農園の想いが伝わるサイトに仕上げました。',
    imageUrl:
      'https://baseec-img-mng.akamaized.net/images/user/logo/8411bd70a674c8aa4b96206d8acc5f9c.png',
    points: ['企画', 'デザイン', 'HTML/CSS編集', 'BASE構築'],
  },
  {
    id: 'ishiyama-kousakusho',
    name: 'いしやま工作所',
    url: 'https://ikousakusho.base.shop/',
    description:
      'ステンドグラスや木工、3Dプリントなど、ジャンルにとらわれないハンドメイド作品のショップ。\nBASEのHTML編集で、作品番号やYouTube・Instagramへの導線など、作り手の顔が見えるオリジナルのページ構成にしました。',
    imageUrl:
      'https://baseec-img-mng.akamaized.net/images/user/logo/cf723cdfc86af8a718e46a6c8dacd72e.png',
    points: ['企画', 'デザイン', 'HTML/CSS編集', 'BASE構築'],
  },
];
