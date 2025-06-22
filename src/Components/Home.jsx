import scanImg from "../assets/scanAnimation-model-interface.gif";
import uploadImg from "../assets/upload-img-model-interface.png";
import { useRef, useState } from "react";
import PredictionResult from "./PredictionResult";
export default function Home() {
  const fileInput = useRef(null);
  const [showResult, setShowResult] = useState(false);
  const [scanAnimation, setScanAnimation] = useState(false);
  const [data, setData] = useState(null);
  const handleResultOpen = () => {
    setShowResult((prev) => !prev);
  };
  const handleFileInputOpen = () => {
    fileInput.current.click();
  };
  const handleUpload = async (e) => {
    console.log("Handling model");
    setScanAnimation(true);
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;

    // const formData = new FormData();
    // formData.append("file", file);

    try {
      //   const response = await fetch("http://localhost:8000/predict/", {
      //     method: "POST",
      //     body: formData,
      //   });
      //   const data = await response.json();
      //   setData(data);
      setTimeout(() => {
        setScanAnimation(false);
        setShowResult(true);
      }, 5000);
    } catch (error) {
      console.error("Upload error:", error);
      setData({});
      setTimeout(() => {
        setScanAnimation(false);
        setShowResult(true);
      }, 5000);
    }
  };
  return (
    <div className="w-full h-screen py-[100px] bg-white relative flex items-center justify-center">
      {scanAnimation && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[380px] rounded-2xl overflow-hidden">
          <img
            src={scanImg}
            alt="Scan image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInput}
        onChange={handleUpload}
      />
      <div className="w-[200px] cursor-pointer">
        <img
          src={uploadImg}
          alt="Upload image"
          className="w-full h-full object-cover shadow-inner rounded-t-xl"
          onClick={handleFileInputOpen}
        />
        <div
          className="text-center font-medium leading-5 text-cyan-950 shadow-lg py-2 rounded-b-xl"
          onClick={handleFileInputOpen}
        >
          Scan now
        </div>
      </div>
      {showResult && (
        <PredictionResult
          handleResultOpen={handleResultOpen}
          // result={data}
        />
      )}
    </div>
  );
}
