import React from "react";

const SquareCard = ({ image, title, description, CSS }: any) => {
    const textColor = CSS === "bg-white" ? "text-[#111218]" : "text-[#C8C9D0]";
    const paddingClass = image === "/vector.svg" ? "px-8" : "pl-8";

  return (
    <div className={`flex-shrink-0 w-[300px] max-h-[380px] py-6 ${paddingClass} rounded-xl z-20 ${CSS || "bg-[#111218]"} flex flex-col justify-between relative mx-4`}>
      {/* Image with default width and controlled height */}
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain"
      />

      {/* Text container */}
      <div className="absolute bottom-6">
        <h2 className={`text-lg font-normal ${textColor}`}>{title}</h2>
        <p className={`mt-1 text-sm ${textColor === "text-[#111218]" ? "text-[#9C9EAB]" : "text-[#868898]"} font-medium`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SquareCard;
