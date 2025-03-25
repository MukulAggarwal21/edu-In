import { Pencil, Trophy } from "lucide-react";

export default function PracticeSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 py-10">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-100 p-2 rounded-full">
          <Pencil className="text-blue-500" size={20} />
        </div>
        <span className="text-gray-500 text-lg font-medium">+</span>
        <div className="bg-blue-100 p-2 rounded-full">
          <Trophy className="text-blue-500" size={20} />
        </div>
      </div>

      <h2 className="text-4xl w-3xl font-semibold text-black">
        Practice Previous Year Paper <br /> & Win Prices
      </h2>

      <p className="text-gray-500 text-lg mt-2">
        35 year JEE and NEET 15 year Boards paper
      </p>

      <button className="bg-blue-600 text-white px-10 mt-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
        Practice for Free
      </button>
    </div>
  );
}
