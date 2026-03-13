import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { chatbotQA } from '@/data/chatbotData';
import ChatMessage, { TypingIndicator } from './ChatMessage';
import QuickReplies from './QuickReplies';
import type { ChatbotQA } from '@/data/chatbotData';

const ChatbotPanel: React.FC = () => {
  const { chatOpen, closeChat, messages, addMessage } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getBotResponse = (userInput: string): ChatbotQA => {
    const input = userInput.toLowerCase().trim();
    
    const match = chatbotQA
      .filter(qa => qa.id !== 'fallback')
      .find(qa => qa.keywords.some(kw => input.includes(kw)));
    
    return match || chatbotQA.find(qa => qa.id === 'fallback')!;
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    
    addMessage({ role: 'user', text });
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(text);
      addMessage({ role: 'bot', text: response.response });
      setQuickReplies(response.quickReplies);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  // Auto-greeting on first open
  useEffect(() => {
    if (chatOpen && !hasGreeted && messages.length === 0) {
      setTimeout(() => {
        addMessage({ 
          role: 'bot', 
          text: "Hey there! 👋 I'm the LECHERY assistant. I can help you find the perfect shiny tights, pantyhose, or thigh-highs for any occasion. What brings you here today?" 
        });
        setQuickReplies(["Find my size", "View new drops", "Track my order", "Best sellers", "Bundle deals"]);
        setHasGreeted(true);
      }, 500);
    }
  }, [chatOpen, hasGreeted, messages.length, addMessage]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!chatOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-96 h-[520px] bg-gloss-dark rounded-3xl shadow-2xl overflow-hidden z-[9999] flex flex-col">
      {/* Header */}
      <div className="bg-gloss-rose p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="font-display text-gloss-rose text-[18px]">L</span>
          </div>
          <div>
            <h3 className="font-body font-medium text-white text-[14px]">LECHERY Assistant</h3>
            <p className="text-white/70 text-[11px]">Online · Usually replies instantly</p>
          </div>
        </div>
        <button 
          onClick={closeChat}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gloss-dark">
        {messages.map((msg) => (
          <ChatMessage 
            key={msg.id} 
            message={msg.text} 
            isBot={msg.role === 'bot'} 
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
        
        {/* Quick Replies */}
        {!isTyping && quickReplies.length > 0 && (
          <QuickReplies 
            replies={quickReplies} 
            onReplyClick={handleQuickReply} 
          />
        )}
      </div>

      {/* Input Row */}
      <div className="border-t border-white/10 p-3 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
          placeholder="Type a message..."
          className="flex-1 bg-gloss-surface text-white rounded-full px-4 py-2 text-[14px] placeholder-white/30 outline-none focus:ring-1 focus:ring-gloss-rose"
        />
        <button
          onClick={() => handleSendMessage(inputValue)}
          disabled={!inputValue.trim()}
          className="bg-gloss-rose rounded-full p-2 w-9 h-9 flex items-center justify-center hover:bg-gloss-rose-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatbotPanel;
