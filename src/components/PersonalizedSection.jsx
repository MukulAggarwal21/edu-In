import React from 'react'
import PersonalAssessment from '../components/svg/personalisedAssesment'

export default function PersonalizedSection() {
  return (
    <div className="flex flex-col space-y-16 py-10">
      {/* Personalized Assessment Section */}
      <div className="flex items-center justify-between space-x-10">
        {/* Left - Assessment SVG */}
        <div className="w-1/2">
          <PersonalAssessment />
        </div>

        {/* Right - Text Content */}
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-black">
            Personalized <span className="text-blue-600">Assessment</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            We measure your learning differently. Not just  comparing you <br />among your classmates and peers
            rather, how much you have <br /> learnt and how much your skills in each subject have  grown<br /> .We create tests based on your learning session and exam  <br /> 
             requirement to  understand and modify study plans
            for you.
          </p>
          <p className="text-gray-700 font-medium text-lg mt-4">
            The tests are uniquely created for each student to improve  <br />and advance their respective knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}
