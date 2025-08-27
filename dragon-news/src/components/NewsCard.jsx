import { useState } from "react";
import { FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { MdStar, MdStarBorder } from "react-icons/md";

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    author,
    rating,
    total_view,
    details,
  } = news;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="border rounded-xl bg-base-100 shadow-md mb-6">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <img
          src={image_url}
          alt={title}
          className="w-full h-60 object-cover rounded-lg mb-3"
        />

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-20"
          }`}
        >
          <p className="text-sm text-gray-700">{details}</p>
        </div>

        {/* Read More / Read Less Button */}
        <button
          onClick={toggleReadMore}
          className="mt-2 text-primary font-semibold text-sm hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) =>
            i < Math.round(rating.number) ? (
              <MdStar key={i} />
            ) : (
              <MdStarBorder key={i} />
            )
          )}
          <span className="ml-1 text-gray-600 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
