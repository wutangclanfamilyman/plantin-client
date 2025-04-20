import { NEWS_ONE } from "../types";

export function getClosestNews(news: NEWS_ONE[]): NEWS_ONE | null {
  const today = new Date();

  let closest: NEWS_ONE | null = null;
  let minDiff = Infinity;

  for (const item of news) {
    const itemDate = new Date(item.date);
    const diff = Math.abs(today.getTime() - itemDate.getTime());

    if (diff < minDiff) {
      minDiff = diff;
      closest = item;
    }
  }

  return closest ? closest : null;
}
