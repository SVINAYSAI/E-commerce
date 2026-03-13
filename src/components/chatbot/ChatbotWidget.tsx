import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import ChatbotPanel from './ChatbotPanel';

const ChatbotWidget: React.FC = () => {
  const { chatOpen, toggleChat, hasNewMessage } = useChat();

  return (
    <>
      {/* Floating Button */}
      {!chatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 bg-gloss-rose rounded-full shadow-xl flex items-center justify-center z-[9999] hover:bg-gloss-rose-dark transition-colors group"
        >
          {/* Pulse Ring Animation */}
          <span className="absolute inset-0 rounded-full bg-gloss-rose animate-pulse-ring" />
          
          {/* Chat Icon */}
          <MessageCircle size={24} className="text-white relative z-10" />
          
          {/* Notification Dot */}
          {hasNewMessage && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-gloss-rose rounded-full" />
            </span>
          )}
        </button>
      )}

      {/* Chat Panel */}
      <ChatbotPanel />
    </>
  );
};

export default ChatbotWidget;
