import React, { useState } from "react";

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { question: 'How does STUDYTable AI tutor work?', answer: 'Our AI-powered system analyzes your performance across various tests and creates personalized study recommendations.' },
    { question: 'Can STUDYTable help with both school and competitive exams?', answer: 'Yes, our platform caters to JEE, NEET, and board exam preparation with specialized content for each.' },
    { question: 'How much time do I need to spend on STUDYTable daily?', answer: 'It depends on your learning pace and goals. Our AI tutor creates personalized schedules based on your needs.' },
    { question: 'Do I need prior knowledge before starting with STUDYTable?', answer: 'No, the AI tutor adjusts to your current level and helps you progress from there.' }
  ];

  return (
    <div className="max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left text-black font-medium flex justify-between items-center"
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-6 py-4 bg-gray-50 text-black transition-all duration-300 ${activeFaq === index ? 'block' : 'hidden'}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
