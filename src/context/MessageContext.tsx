import { createContext, useState, useContext, ReactNode } from 'react';
import { Message } from '../types';
import { MESSAGES } from '../components/messages/Messages';

type MessagesContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
};

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined
);

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
};

type MessagesProviderProps = {
  children: ReactNode;
};

export const MessagesProvider = ({ children }: MessagesProviderProps) => {
  const [messages, setMessages] = useState<Message[]>(MESSAGES);

  const addMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};
