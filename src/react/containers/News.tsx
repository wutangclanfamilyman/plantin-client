import BUnlimited from "../../components/Unlimited";
import { formatDateManual } from "../../helpers/formatDate";
import { NEWS_ONE } from "../../types";

interface NewsContainerProps {
  data: NEWS_ONE[];
}

const NewsContainer: React.FC<NewsContainerProps> = ({ data = [] }) => {
  if (!data.length) return <></>;

  return (
    <div className="news ">
      <div className="container">
        <div className="row">
          <div className="news__category">Interesting</div>
        </div>
        <div className="grid grid-1 grid-3-md gap-24 gap-32-md">
          {data.map((item: NEWS_ONE, index: number) => (
            <>
              {index === 6 && <BUnlimited />}
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
