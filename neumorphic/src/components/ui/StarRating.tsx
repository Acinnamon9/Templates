import React, { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  label?: string;
  totalStars?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  label,
  totalStars = 5,
  initialRating = 0,
  onChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div>
      {label && (
        <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3 block">
          {label}
        </label>
      )}
      <div className="flex gap-2" role="radiogroup" aria-label={label || "Rating"}>
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          const isActive = starValue <= (hover || rating);

          return (
            <button
              key={starValue}
              type="button"
              className={`neu-focus p-2 rounded-xl transition-all duration-200 transform hover:scale-115 active:scale-95 ${
                isActive ? "neu-inset scale-105" : "neu-raised"
              }`}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              onClick={() => handleRating(starValue)}
              aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
              aria-checked={rating === starValue}
              role="radio"
            >
              <Star
                className={`w-6 h-6 transition-colors duration-300 ${
                  isActive 
                    ? "fill-yellow-400 text-yellow-500" 
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
