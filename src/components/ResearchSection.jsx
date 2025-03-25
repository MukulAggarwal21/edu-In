import React from "react";

const ResearchSection = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-8 mb-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          How we came to this?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          We observed and researched for three years in a variety of students.
          Where the best needs more attention to do better, and the struggling
          students need more attention to improve their abilities. All students
          need personal attention. Based on the notion of "Personal attention,"
          we have built our algorithm and AI tutor to cater to each child uniquely.
        </p>
        <button className="bg-[#2563EB] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ResearchSection;
