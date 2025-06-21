import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      setResult((prev) => [data, ...prev]);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload an Image</h1>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {result && (
        <div>
          <h2>Prediction Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
