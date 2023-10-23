import React from 'react';

const PredictionResult = ({ predictionData }) => {
  return (
    <div className="max-w-md mx-auto my-2 p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold">Hasil Prediksi</h2>
      <div>
        <pre>{JSON.stringify(predictionData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PredictionResult;
