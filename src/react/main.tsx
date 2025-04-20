import ReactDOM from "react-dom/client";
import NewsApp from "./NewsApp";
import SearchNews from "./containers/Search";

const appSelector = document.getElementById("news-app");
if (appSelector) {
  const root = ReactDOM.createRoot(appSelector);
  root.render(<NewsApp />);
}

const searchSelector = document.getElementById("search-news-app");
if (searchSelector) {
  const root = ReactDOM.createRoot(searchSelector);
  root.render(<SearchNews />);
}
