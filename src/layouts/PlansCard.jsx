import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Button from "../layouts/Button";

const PlansCard = (props) => {
  const features = [
    "Daily complimentary sessions with a personal trainer.",
    "Access to gym facilities during operational hours.",
    "Access to all rooms.",
    "Use of advanced gym equipment.",
  ];

  const renderCircle = (index) => {
    if (props.title === "Trial Plan") {
      return index === 0 ? (
        <AiFillCheckCircle className="mr-2 mt-1 text-green-500" size={25} />
      ) : (
        <AiFillCloseCircle className="mr-2 mt-1 text-red-500" size={25} />
      );
    } else if (props.title === "Gold Plan") {
      return index < features.length / 2 ? (
        <AiFillCheckCircle className="mr-2 mt-1 text-green-500" size={25} />
      ) : (
        <AiFillCloseCircle className="mr-2 mt-1 text-red-500" size={25} />
      );
    } else {
      return props.price > 0 ? (
        <AiFillCheckCircle className="mr-2 mt-1 text-green-500" size={25} />
      ) : (
        <AiFillCloseCircle className="mr-2 mt-1 text-red-500" size={25} />
      );
    }
  };

  return (
    <div className="flex flex-col bg-gray-950 w-full md:w-1/3 p-8 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg text-center text-white mb-4">
        {props.title}
      </h2>

      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <h3 className="font-semibold text-lg text-white">{props.price}</h3>
      </div>

      <div className="flex flex-col items-start mt-6 text-white">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start mb-3">
            {renderCircle(index)}
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button title="Buy Plan" />
      </div>
    </div>
  );
};

export default PlansCard;
