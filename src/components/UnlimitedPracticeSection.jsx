import UnlimitedPractice from "../assets/svg/unlimited"

export default function UnlimitedPracticeSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center justify-between space-x-10">
        {/* Left Side - Text Content */}
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-black">
            Unlimited <span className="text-blue-600">Practice</span> session
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            For topics and subjects you go through in your school and coaching every day, we create instant
            practice sessions specially made for your day's need.
          </p>
          <p className="text-gray-700 font-medium text-lg mt-4">
            Our <strong className="font-semibold">innovative AI algorithm</strong> crafts batches of{" "}
            <strong className="font-semibold">20 questions</strong>, each accompanied by instant feedback
            and solutions – it's like having a <strong className="font-semibold">Home tutor 24x7</strong>.
          </p>
        </div>

        {/* Right Side - SVG Component */}
        <div className="w-1/2">
          <UnlimitedPractice />
        </div>
      </div>
    </div>
  );
}
