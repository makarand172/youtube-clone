import { useEffect, useRef, useState } from "react";
import "./FilterButtonList.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const FilterButtonList = () => {
  const scrollContainerRef = useRef(null);
  const [showPrev, setShowPrev] = useState(true);
  const [showNext, setShowNext] = useState(true);
  const [active, setActive] = useState(0);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  // Optional: Update button states (enable/disable) based on scroll position
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setShowPrev(scrollLeft > 0);
      setShowNext(scrollWidth - scrollLeft > clientWidth + 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  const buttonsTitle = [
    "All",
    "Podcasts",
    "Web Development",
    "Sagittarius",
    "Music",
    "Data Structures",
    "Cockpits",
    "News",
    "Live",
    "Mixes",
    "AI",
    "Tarot",
    "Dramedy",
    "Gaming",
    "Shark Tank",
    "Movie music",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];

  return (
    <div className="filter-btn-container">
      {showPrev && (
        <button className="previous" onClick={scrollLeft}>
          <IoIosArrowBack size={22} />
        </button>
      )}
      <div className="filter-btn-list" ref={scrollContainerRef}>
        {buttonsTitle.map((title, index) => (
          <button
            className={active === index ? "active-btn" : ""}
            key={title}
            onClick={() => {
              setActive(index);
            }}
          >
            {title}
          </button>
        ))}
      </div>
      {showNext && (
        <button className="next">
          <IoIosArrowForward size={22} onClick={scrollRight} />
        </button>
      )}
    </div>
  );
};

export default FilterButtonList;
