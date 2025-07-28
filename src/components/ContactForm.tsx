'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, DollarSign } from 'lucide-react';
import { ContactForm } from '@/types';

export default function ContactFormComponent() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    budget: '',
    projectType: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'ドローン空撮撮影・編集',
    'ミュージックビデオ撮影・編集',
    'イベント撮影・編集',
    'ウェディング動画撮影・編集',
    'プロモーション動画撮影・編集',
    'LP作成',
    'その他',
  ];

  const budgetRanges = [
    '〜1万円',
    '〜3万円',
    '〜5万円',
    '〜10万円',
    '〜30万円',
    '相談したい',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          budget: '',
          projectType: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.message || 'メッセージの送信に失敗しました。');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('ネットワークエラーが発生しました。後でもう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 mb-8 flex items-center gap-3"
        >
          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
          <div>
            <h3 className="text-green-400 font-semibold mb-1">送信完了</h3>
            <p className="text-green-300 text-sm">
              お問い合わせありがとうございます。2営業日以内にご返信いたします。
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 mb-8 flex items-center gap-3"
        >
          <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-red-400 font-semibold mb-1">送信エラー</h3>
            <p className="text-red-300 text-sm">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            お名前 <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="お名前を入力してください"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            メールアドレス <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="example@email.com"
            />
          </div>
        </div>

        {/* Project Type Field */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
            プロジェクト種別 <span className="text-red-400">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          >
            <option value="">選択してください</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Field */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
            ご予算
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            >
              <option value="">選択してください（任意）</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            メッセージ <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
              placeholder="プロジェクトの詳細、希望納期、その他のご要望をお聞かせください"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              送信中...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              メッセージを送信
            </>
          )}
        </motion.button>
      </form>

      {/* Additional Info */}
      <div className="mt-12 p-6 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">お問い合わせについて</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
            ご返信は2営業日以内にいたします
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
            お見積もりは無料で承っております
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
            秘密保持契約（NDA）の締結も可能です
          </li>
        </ul>
      </div>
    </div>
  );
}