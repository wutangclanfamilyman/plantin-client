import React from "react";
import { NEWS_ONE } from "../../types";
import { formatDateManual } from "../../helpers/formatDate";

interface TopNewsProps {
  data: NEWS_ONE[];
}

const TopNews: React.FC<TopNewsProps> = ({ data = [] }) => {
  if (!data.length) return <></>;

  return (
    <div className="news news--top">
      <div className="container">
        <div className="row">
          <div className="news__category">TOP of the Day</div>
        </div>
        <div className="grid grid-2 gap-32">
          {data.map((item: NEWS_ONE) => (
            <div className="news-one">
              <div className="news-one__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-one__date">
                {formatDateManual(item.date)} · {item.timeToRead} read
              </div>
              <h3 className="news-one__title">{item.title}</h3>
              <p className="news-one__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNews;
