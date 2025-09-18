import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewsCard = ({ image, name, occupation, location, reviews, jobs }) => {

  const navigate = useNavigate()
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition max-w-sm overflow-hidden">
      {/* Full-width Cover Image */}
      <img
        src={image}
        alt={name}
        className="w-full aspect-[16/9] object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Name + Occupation */}
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{occupation}</p>

        {/* Location + Reviews */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <p>{location}</p>
          <p className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span>{reviews} reviews</span>
          </p>
        </div>

        {/* Jobs */}
        <div className="flex justify-between mt-4 text-sm text-gray-700">
          <p className="px-3 py-1 bg-gray-100 rounded-lg">{jobs[0]}</p>
          <p className="px-3 py-1 bg-gray-100 rounded-lg">{jobs[1]}</p>
        </div>

        {/* Button */}
        <button onClick={()=>(navigate('/profiles'))} className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ReviewsCard;
