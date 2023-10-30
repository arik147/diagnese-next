// src/app/form/page.js
'use client'

import Link from 'next/link'
import React, { useState } from 'react';
import MainForm from '../components/form/MainForm';


const SymptomChecker = () => {

  return (
    <main>
      <h1 className='text-center mt-4 text-lg font-semibold'>Prediction Symptom</h1>
      <MainForm/>
    </main>
  );
};

export default SymptomChecker;
