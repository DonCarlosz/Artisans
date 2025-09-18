import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border-1 border-neutral-300 transition max-w-sm">
      {/* Icon */}
      <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm">{description}</p>

      {/* Dynamic Link */}
      <Link
        to={link}
        className="mt-4 inline-flex items-center text-secondary text-sm group"
      >
        <span>View Services</span>
        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
};

export default ServiceCard;
