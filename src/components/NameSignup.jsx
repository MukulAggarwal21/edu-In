import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import Footer from "./footer";

export default function NameSignup() {
  const totalSteps = 8;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    class: '',
    subject: '',
    marks10thClass: '',
    marks10thMaths: '',
    marks10thScience: '',
    marks11thClass: '',
    marks11thMaths: '',
    marks11thScience: '',
    competitiveExams: '',
    phoneNumber: ''
  });

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-12">
        STUDY<span className="text-black">table</span>
      </h1>

      {/* Form Section */}
      <div className="flex flex-col items-center w-full max-w-md mt-6">
        {step === 1 && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What is your Name? "
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          />
        )}
        {step === 2 && (
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          />
        )}
        {step === 3 && (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          />
        )}
        {step === 4 && (
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          >
            <option value="" disabled selected>
              Class (For the Academic year 2025-2026)
            </option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
            <option value="class3">Class 3</option>
            {/* Add more classes as needed */}
          </select>
        )}
        {step === 5 && (
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          >
            <option value="" disabled selected>
              Subject
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            {/* Add more subjects as needed */}
          </select>
        )}
        {step === 6 && (
          <div className="w-full max-h-50 overflow-y-auto no-scrollbar">
            <h2 className="text-lg font-medium mb-4 text-center">10th Class Details</h2>
            <select
              name="marks10thClass"
              value={formData.marks10thClass}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-4"
            >
              <option value="" disabled selected>
                Marks in 10th Class
              </option>
              <option value="90">More than 90%</option>
              <option value="75">More than 75%</option>
              <option value="60">More than 60%</option>
            </select>
            <select
              name="marks10thMaths"
              value={formData.marks10thMaths}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-4"
            >
              <option value="" disabled selected>
                Marks in Maths
              </option>
              <option value="90">More than 90%</option>
              <option value="75">More than 75%</option>
              <option value="60">More than 60%</option>
            </select>
            <select
              name="marks10thScience"
              value={formData.marks10thScience}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
            >
              <option value="" disabled selected>
                Marks in Science
              </option>
              <option value="90">More than 90%</option>
              <option value="75">More than 75%</option>
              <option value="60">More than 60%</option>
            </select>
            <h2 className="text-lg font-medium mb-4 text-center">11th Class Details</h2>
            <select
              name="marks11thClass"
              value={formData.marks11thClass}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-4"
            >
              <option value="" disabled selected>
                Marks in 11th Class
              </option>
              <option value="90">More than 90%</option>
              <option value="75">More than 75%</option>
              <option value="60">More than 60%</option>
            </select>
            <select
              name="marks11thMaths"
              value={formData.marks11thMaths}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-4"
            >
              <option value="" disabled selected>
                Marks in Maths
              </option>
              <option value="90">More than 90%</option>
              <option value="75">More than 75%</option>
              <option value="60">More than 60%</option>
            </select>
            <select
              name="marks11thScience"
              value={formData.marks11thScience}
              onChange={handleChange}
              className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
            >
              <option value="" disabled selected>
                Marks in Science
              </option>
              <option value="90">More than 90%</option>
              <option value="75">More than 75%</option>
              <option value="60">More than 60%</option>
            </select>
          </div>
        )}
        {step === 7 && (
          <input
            type="text"
            name="competitiveExams"
            value={formData.competitiveExams}
            onChange={handleChange}
            placeholder="Competitive Exams"
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          />
        )}
        {step === 8 && (
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border-b border-gray-400 outline-none text-lg w-full py-2 mb-10"
          />
        )}

        {/* Buttons & Progress Bar */}
        <div className="flex justify-between items-center w-2xl mt-16">
          <Button
            variant="outline"
            className="px-8"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            ← Previous
          </Button>

          {/* Progress Bar in Center */}
          <div className="w-1/3">
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <Button
            className="px-8"
            onClick={handleNext}
            disabled={step === totalSteps}
          >
            Next →
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}