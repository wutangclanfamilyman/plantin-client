import { create } from "zustand";
import { NEWS_ONE } from "../../types";

interface NewsState {
  isLoading: boolean;
  news: NEWS_ONE[];
  search: string;
  setSearch: (key: string) => void;
  setNews: (news: NEWS_ONE[]) => void;
  toggleLoading: (flag: boolean) => void;
}

export const useNewsStore = create<NewsState>()((set) => ({
  isLoading: false,
  news: [],
  search: "",
  setSearch: (key: string) => set(() => ({ search: key })),
  setNews: (news: NEWS_ONE[]) => set(() => ({ news: news })),
  toggleLoading: (flag: boolean) => set(() => ({ isLoading: flag })),
}));
