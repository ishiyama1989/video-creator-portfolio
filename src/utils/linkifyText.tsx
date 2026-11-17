import React from 'react';

export function linkifyText(text: string): React.ReactNode {
  // URLを検出する正規表現
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // テキストをURLで分割
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    // URLの場合はリンクにする
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-300 underline transition-colors"
        >
          {part}
        </a>
      );
    }
    // 通常のテキストの場合はそのまま返す
    return part;
  });
}