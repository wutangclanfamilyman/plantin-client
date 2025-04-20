import { useEffect, useState } from "react";
import LatestNews from "./containers/LatestNews";
import NewsContainer from "./containers/News";
import TopNews from "./containers/TopNews";
import { NEWS_ONE } from "../types";
import { getClosestNews } from "../helpers/getClosestNews";
import { useNewsStore } from "./store";
import NotFound from "../components/NotFound";
import Loader from "./containers/Loader";

const NEWS = [
  {
    id: 1,
    title: "Tips & Tricks For Cutting",
    text: "Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or... Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or...",
    date: "2025-04-20",
    timeToRead: "7 min",
    image: "/images/last-news-image.png",
    is_top: false,
  },
  {
    id: 2,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage. Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage.",
    date: "2025-04-17",
    timeToRead: "12 min",
    image: "/images/news/1.png",
    is_top: true,
  },
  {
    id: 3,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage. Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage.",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/2.png",
    is_top: true,
  },
  {
    id: 4,
    title: "Plant pot secrets",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage. Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage.",
    date: "2025-04-10",
    timeToRead: "10 min",
    image: "/images/news/3.png",
    is_top: false,
  },
  {
    id: 5,
    title: "Watering mastery",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage. Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage.",
    date: "2025-04-13",
    timeToRead: "10 min",
    image: "/images/news/4.png",
    is_top: false,
  },
  {
    id: 6,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-02-27",
    timeToRead: "20 min",
    image: "/images/news/5.png",
    is_top: false,
  },
  {
    id: 7,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-03-16",
    timeToRead: "7 min",
    image: "/images/news/1.png",
    is_top: false,
  },
  {
    id: 8,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2024-12-20",
    timeToRead: "7 min",
    image: "/images/news/2.png",
    is_top: false,
  },
  {
    id: 9,
    title: "Plant pot secrets",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/3.png",
    is_top: false,
  },
  {
    id: 10,
    title: "Watering mastery",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/4.png",
    is_top: false,
  },
  {
    id: 11,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/5.png",
    is_top: false,
  },
  {
    id: 12,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/1.png",
    is_top: false,
  },
  {
    id: 13,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/2.png",
    is_top: false,
  },
  {
    id: 14,
    title: "Plant pot secrets",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/3.png",
    is_top: false,
  },
  {
    id: 15,
    title: "Watering mastery",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/4.png",
    is_top: false,
  },
  {
    id: 16,
    title: "Professional Repot",
    text: "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...",
    date: "2025-04-17",
    timeToRead: "7 min",
    image: "/images/news/5.png",
    is_top: false,
  },
];

const NewsApp = () => {
  const { news, setNews, search, isLoading } = useNewsStore((s) => s);

  useEffect(() => {
    setNews(NEWS);
  }, []);

  useEffect(() => {
    if (!search) {
      return setNews(NEWS);
    }

    const searchedNews = NEWS.filter(
      (item: NEWS_ONE) =>
        item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    ).sort(
      (a: NEWS_ONE, b: NEWS_ONE) =>
        new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );

    setNews(searchedNews);
  }, [search]);

  const latest_news: NEWS_ONE | null = getClosestNews(news);

  const top_news = news.filter((item: NEWS_ONE) => item.is_top);

  const _news = news
    .filter((item: NEWS_ONE) => item.id !== latest_news?.id && !item.is_top)
    .sort(
      (a: NEWS_ONE, b: NEWS_ONE) =>
        new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!isLoading && !news.length)
    return (
      <div>
        <NotFound />
      </div>
    );

  if (search && !isLoading)
    return (
      <div>
        <NewsContainer data={news} />
      </div>
    );

  return (
    <div>
      <LatestNews data={latest_news} />

      <TopNews data={top_news} />

      <NewsContainer data={_news} />
    </div>
  );
};

export default NewsApp;
