import React from "react";
import { Wrench, Scissors, Home, CardSim, FileEdit } from "lucide-react";
import ServiceCard from "./ServiceCard";


const services = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Home & Building Services",
    description: "Plumbers, Electricians, Carpenters",
    link: "/buildings",
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Personal Care",
    description: "Book barbers, hairstylists, and beauty professionals.",
    link: "/personal-care",
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Fashion and Beauty",
    description: "Cleaning, maintenance, and more from trusted providers.",
    link: "/home-services",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Repairs",
    description: "Fix appliances, plumbing, and electrical issues quickly.",
    link: "/repairs",
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Personal",
    description: "Book barbers, hairstylists, and beauty professionals.",
    link: "/personal-care",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Home Services",
    description: "Cleaning, maintenance, and more from trusted providers.",
    link: "/home-services",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Repairs",
    description: "Fix appliances, plumbing, and electrical issues quickly.",
    link: "/repairs",
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Personal Care",
    description: "Book barbers, hairstylists, and beauty professionals.",
    link: "/personal-care",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Home Services",
    description: "Cleaning, maintenance, and more from trusted providers.",
    link: "/home-services",
  },
];

const ServicesList = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-15 pb-10 ">
         <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter pb-2'>
          What Services do you need?
        </h3>
        <p className="text-gray-600 tracking-tighter text-sm">Browse by category to find the perfect artisan for your project</p>

      </div>
             

    
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}
    </div>
    </div>
  );
};

export default ServicesList;
