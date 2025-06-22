import { useState } from "react";
import { IoClose } from "react-icons/io5";
export default function PredictionResult({
  result = {
    class: "Pneumonia",
    confidence: 56.18,
    probabilities: {
      Normal: 43.82,
      Pneumonia: 56.18,
    },
  },
  handleResultOpen,
}) {
  const prediction = result;

  const [showResult, setShowResult] = useState(false);

  return (
    <div className="absolute bg-[#00000047] w-full h-full flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-8 w-[300px] relative">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Predicted Result
        </h2>

        <div className="mb-4">
          <div className="text-gray-700">
            <div className="text-red-600 text-xl pb-5 font-bold text-center w-full">
              {prediction.class}
            </div>
          </div>
          <div className="text-gray-700">
            <span className="font-medium text-lg">Confidence:</span>{" "}
            {prediction.confidence.toFixed(2)}%
          </div>
        </div>

        <div>
          <p className="text-gray-600 mb-1 font-medium text-lg">
            Probabilities:
          </p>
          {Object.entries(prediction.probabilities).map(([label, value]) => (
            <div key={label} className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">{label}</span>
                <span className="text-sm text-gray-700">
                  {value.toFixed(2)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    label === "Pneumonia" ? "bg-red-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute top-1 right-1 text-xl text-gray-800 p-1 rounded-full cursor-pointer"
          onClick={handleResultOpen}
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
}
