import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="spinner m-8"></div>
      <p className="font-bold text-white text-xl">Loading....</p>
    </div>
  );
}
