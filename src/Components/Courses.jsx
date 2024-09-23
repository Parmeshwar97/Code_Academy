import React from "react";
import Card from "./Card";

export default function Courses({ courses, category }) {
  
  function getData() {
    if (category === "All") {
      let newData = [];
      Object.values(courses).forEach((arr) => {
        let data = Object.values(arr);
        data.forEach((e) => {
          newData.push(...e);
        });
      });
      return newData;
    }
    else{
      return courses.data[category];
    }

  }

  return (
    <div className="flex flex-wrap justify-center items-center mb-4 gap-4">
      {getData().map((course, i) => {
        return <Card key={course.id} info={course} />;
      })}
    </div>
  );
}
