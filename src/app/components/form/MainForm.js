// src/app/form/page.js
'use client'

import Link from 'next/link'
import React, { useState } from 'react';
import dataSymptops from './../../../dataSymptops.json';
import SymptomForm from './SymptomForm';
import ResultForm from './ResultForm';

const initialSymptoms = dataSymptops;

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState(initialSymptoms);

  const handleSymptomChange = (category, symptom, value) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [category]: {
        ...prevSymptoms[category],
        [symptom]: parseInt(value, 10),
      },
    }));
  };

  return (
    <main>
      <SymptomForm symptoms={symptoms} handleSymptomChange={handleSymptomChange} />
      <ResultForm/>
    </main>
  );
};

export default SymptomChecker;
