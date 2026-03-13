import React from 'react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  const formatText = (text: string): React.ReactNode => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div
        className={`max-w-[80%] px-4 py-3 text-[14px] font-body leading-relaxed ${
          isBot
            ? 'bg-gloss-surface text-white/90 rounded-2xl rounded-tl-sm'
            : 'bg-gloss-rose text-white rounded-2xl rounded-tr-sm'
        }`}
      >
        {formatText(message)}
      </div>
    </div>
  );
};

export const TypingIndicator: React.FC = () => (
  <div className="flex justify-start mb-3">
    <div className="bg-gloss-surface rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
      <span 
        className="w-2 h-2 bg-white/50 rounded-full animate-[typing-dot_1.4s_ease-in-out_infinite]"
        style={{ animationDelay: '0s' }}
      />
      <span 
        className="w-2 h-2 bg-white/50 rounded-full animate-[typing-dot_1.4s_ease-in-out_infinite]"
        style={{ animationDelay: '0.2s' }}
      />
      <span 
        className="w-2 h-2 bg-white/50 rounded-full animate-[typing-dot_1.4s_ease-in-out_infinite]"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  </div>
);

export default ChatMessage;
