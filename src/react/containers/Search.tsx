import React, { useCallback } from "react";
import { debounce } from "../../helpers/debounce";
import { useNewsStore } from "../store";
import { delay } from "../../helpers/delay";

const SearchNews = () => {
  const { setSearch, toggleLoading } = useNewsStore((s) => s);

  const handleSearch = async (value: string) => {
    toggleLoading(true);

    await delay(1000);

    setSearch(value);

    toggleLoading(false);
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

  return (
    <form className="b-green__form">
      <label className="b-green__form-control">
        <input
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            debouncedSearch(e.target.value)
          }
        />
      </label>
    </form>
  );
};

export default SearchNews;
