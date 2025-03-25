import React from "react";
import ManagingStudent from "./svg/managingStudent";
const AcademicManagement = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 max-w-6xl mx-auto">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-black leading-tight">
          <span className="text-blue-600">Managing students</span> academic{" "}
          <span className="font-black">life</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          There is more to study than just practicing giving tests. To meet the
          requirement of exams, we need to carefully do the revision,
          repeatedly align our study plan, and understand students' own learning
          curves. This all needs to be done along with school tests and other
          scholarship exams. We manage it all for you so that you can focus on
          learning and worry no more.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
      <ManagingStudent/>
      </div>
    </div>
  );
};

export default AcademicManagement;
