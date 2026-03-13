import { createContext, useState, useContext, useCallback, type ReactNode } from 'react';

export interface ChatMessage {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

interface ChatContextType {
  chatOpen: boolean;
  messages: ChatMessage[];
  hasNewMessage: boolean;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: Omit<ChatMessage, 'id'>) => void;
  clearMessages: () => void;
  notifyNewMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const toggleChat = useCallback(() => {
    setChatOpen(prev => {
      if (!prev) {
        setHasNewMessage(false);
      }
      return !prev;
    });
  }, []);

  const openChat = useCallback(() => {
    setChatOpen(true);
    setHasNewMessage(false);
  }, []);

  const closeChat = useCallback(() => {
    setChatOpen(false);
  }, []);

  const addMessage = useCallback((message: Omit<ChatMessage, 'id'>) => {
    setMessages(prev => [...prev, { ...message, id: Date.now() }]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const notifyNewMessage = useCallback(() => {
    setHasNewMessage(prev => {
      if (!chatOpen) {
        return true;
      }
      return prev;
    });
  }, [chatOpen]);

  const value: ChatContextType = {
    chatOpen,
    messages,
    hasNewMessage,
    toggleChat,
    openChat,
    closeChat,
    addMessage,
    clearMessages,
    notifyNewMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContext;
