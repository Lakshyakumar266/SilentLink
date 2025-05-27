import { create } from 'zustand';

type Chat = {
  id: string;
  isGroup: boolean;
  participants: string[];
  groupName?: string;
  groupIconUrl?: string;
  lastMessage?: string;
  updatedAt: string;
};

type Message = {
  id: string;
  chatId: string;
  senderId: string;
  text?: string;
  mediaUrl?: string;
  createdAt: string;
};

type ChatStore = {
  userId: string | null;
  setUserId: (id: string) => void;

  currentChatId: string | null;
  setCurrentChatId: (id: string | null) => void;

  chats: Chat[];
  setChats: (chats: Chat[]) => void;

  messages: Message[];
  setMessages: (msgs: Message[]) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),

  currentChatId: null,
  setCurrentChatId: (id) => set({ currentChatId: id }),

  chats: [],
  setChats: (chats) => set({ chats }),

  messages: [],
  setMessages: (msgs) => set({ messages: msgs }),
}));
