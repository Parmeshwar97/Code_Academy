import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
export default function Card({ info }) {
  let description = info.description.slice(0, 98) + "...";
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
    !isLiked
      ? toast.success("Added to Favorites")
      : toast.warning("Removed from Favorites");
  }

  return (
    <div className="bg-gray-800 w-[300px] text-white rounded-md">
      <div className="relative">
        <img
          className="rounded-t-md"
          src={info.image.url}
          alt={info.image.alt}
        />
        <span className="absolute right-3 bottom-[-12px] cursor-pointer bg-white p-1 rounded-full">
          {isLiked ? (
            <FcLike className="size-6" onClick={handleLike} />
          ) : (
            <FcLikePlaceholder className="size-6" onClick={handleLike} />
          )}
        </span>
      </div>
      <div className="p-3">
        <h2 className="font-bold">{info.title}</h2>
        <p className="font-semibold text-balance pt-2">{description}</p>
      </div>
    </div>
  );
}
