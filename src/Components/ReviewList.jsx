import React from "react";
import ReviewCard from "./ReviewsCard";
import { useNavigate } from "react-router-dom";

const artisans = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    occupation: "Electrician",
    location: "Lagos, Nigeria",
    reviews: 123,
    jobs: ["Wiring", "Repairs"],
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    occupation: "Hair Stylist",
    location: "Abuja, Nigeria",
    reviews: 89,
    jobs: ["Braids", "Styling"],
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    occupation: "Electrician",
    location: "Lagos, Nigeria",
    reviews: 123,
    jobs: ["Wiring", "Repairs"],
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    occupation: "Hair Stylist",
    location: "Abuja, Nigeria",
    reviews: 89,
    jobs: ["Braids", "Styling"],
  },
];

const ReviewList = () => {

  const navigate = useNavigate()
  return (
    <div>
       <div className="flex flex-col justify-center items-center pt-15 pb-10 ">
         <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter pb-2'>
          Recommended for you
        </h3>
        <p className="text-gray-600 tracking-tighter text-sm">Top-rated artisans in your area</p>

      </div>
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {artisans.map((artisan, index) => (
        <ReviewCard key={index} {...artisan} />
      ))}
    </div>
     <div className="flex flex-col justify-center items-center pt-5 pb-10 ">
                 <button onClick={()=>{navigate('/artisans')}} className="mt-6 px-4 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition">
          Browse All Artisans
        </button>

      </div>


    </div>
   
  );
};

export default ReviewList;
