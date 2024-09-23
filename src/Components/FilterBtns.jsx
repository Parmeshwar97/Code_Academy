import React from "react";


export default function FilterBtns({ filterData, category, setCategory }) {
  function handleFilter(title) {
    setCategory(title);
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {filterData.map((data) => {
        return (
          <button
            className={`py-1 px-4 text-lg font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 border-2 ${
              data.title === category
                ? "border-white bg-opacity-60"
                : "bg-opacity-50 border-transparent"}`}
            key={data.id}
            onClick={() => handleFilter(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
