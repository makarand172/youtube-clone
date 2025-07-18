import { useEffect, useState } from "react";
import { applicationConstants } from "../utils/appConstants";
import { useDispatch, useSelector } from "react-redux";
import { addCacheData } from "../store/slices/searchCacheSlice";

export const useDebounce = (input = "", delay = 300) => {
  const [debouncedList, setDebouncedList] = useState([]);
  const dispatch = useDispatch();
  const cacheData = useSelector((store) => store.searchCache.cache);

  const getAutoSuggest = async (inpt) => {
    const response = await fetch(
      applicationConstants.GOOGLE_AUTO_SUGGEST_API + inpt
    );

    const json = await response.json();

    setDebouncedList(json[1]);
    dispatch(addCacheData({ [json[0]]: json[1] }));
  };
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (!input) return;
      if (input in cacheData) {
        setDebouncedList(cacheData[input]);
      } else {
        getAutoSuggest(input);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [input, delay]);
  return debouncedList;
};
