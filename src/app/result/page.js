// src/result/PredictionResult.js
import React from 'react';

const PredictionResult = ({ predictionData }) => {
  return (
    <div>
      {/* Tampilkan data hasil prediksi di sini */}
      <h2>Hasil Prediksi:</h2>
      <pre>{JSON.stringify(predictionData, null, 2)}</pre>
    </div>
  );
};

export default PredictionResult;
