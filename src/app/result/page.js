'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router'

const PredictionResult = () => {
  const [predictionData, setPredictionData] = useState(null);

  const router = useRouter();
  const data = router.query;

  return (
    <div>
      <h2>Hasil Prediksi:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PredictionResult;
