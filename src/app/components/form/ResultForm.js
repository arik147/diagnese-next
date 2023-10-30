// Import useState and axios
import React, { useState } from 'react';

const ResultForm = () => {
  const [predictionData, setpredictionData] = useState(null);

  return (
          <div>
            <h2>Hasil Prediksi:</h2>
            <pre>{predictionData}</pre>
          </div>
        );
      
};

export default ResultForm;
