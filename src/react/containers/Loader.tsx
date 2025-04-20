import Skeleton from "../../components/Skeleton";

const Loader = () => (
  <div className="news ">
    <div className="container">
      <div className="row">
        <div className="news__category">Loading...Please stand by</div>
      </div>
      <div className="grid grid-3 gap-24 gap-32-md">
        {[1, 2, 3].map(() => (
          <>
            <Skeleton />
          </>
        ))}
      </div>
    </div>
  </div>
);

export default Loader;
