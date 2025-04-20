import React from "react";
import { NEWS_ONE } from "../../types";
import { formatDateManual } from "../../helpers/formatDate";

interface LatestNewsProps {
  data: NEWS_ONE | null;
}

const LatestNews: React.FC<LatestNewsProps> = ({ data }) => {
  if (!data) return <></>;

  return (
    <div className="last-news">
      <div className="container">
        <div className="row">
          <div className="red-badge">New</div>
        </div>
        <div className="grid grid-2 gap-16 gap-32-md">
          <div className="last-news__image">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="last-news__content">
            <p className="last-news__content-date">
              {formatDateManual(data.date)} · {data.timeToRead} read
            </p>
            <h2 className="last-news__content-title">{data.title}</h2>
            <p className="last-news__content-text">{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
