import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/data/mockData';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:text-primary-400 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ホームに戻る</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              映像制作に関するご相談やお見積もりなど、
              お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    プロジェクトについてお聞かせください
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-lg p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-8">連絡先情報</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">メール</h4>
                        <p className="text-gray-300 text-sm">{profile.contact.email}</p>
                        <p className="text-gray-400 text-xs mt-1">
                          24時間受付・2営業日以内に返信
                        </p>
                      </div>
                    </div>

                    {profile.contact.phone && (
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-medium mb-1">電話</h4>
                          <p className="text-gray-300 text-sm">{profile.contact.phone}</p>
                          <p className="text-gray-400 text-xs mt-1">
                            平日 9:00-18:00
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">対応エリア</h4>
                        <p className="text-gray-300 text-sm">
                          全国（リモート対応可）
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          関東圏は直接打ち合わせも可能
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">営業時間</h4>
                        <p className="text-gray-300 text-sm">
                          平日 9:00-18:00
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          土日祝は事前予約にて対応
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <h4 className="text-white font-medium mb-4">SNS</h4>
                    <div className="flex gap-4">
                      {profile.contact.social.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                        >
                          <span className="text-sm font-medium">
                            {social.platform.charAt(0)}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              よくあるご質問
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: '制作期間はどのくらいかかりますか？',
                  answer: 'プロジェクトの規模により異なりますが、一般的に企画から完成まで4-8週間程度です。お急ぎの場合はご相談ください。'
                },
                {
                  question: '見積もりは無料ですか？',
                  answer: 'はい、お見積もりは無料で承っております。詳細なヒアリングの後、最適なプランをご提案いたします。'
                },
                {
                  question: '修正は何回まで可能ですか？',
                  answer: '基本プランでは3回まで修正対応いたします。それ以上の修正が必要な場合は別途ご相談させていただきます。'
                },
                {
                  question: '遠方でも対応可能ですか？',
                  answer: 'はい、全国対応可能です。オンライン会議システムを活用し、遠方のクライアント様ともスムーズに制作を進めております。'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Q. {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    A. {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}