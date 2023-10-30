// Import useState and axios
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

const SymptomForm = ({ symptoms, handleSymptomChange }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const router = useRouter(); // Declare useRouter here

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const formatLabel = (symptom) => {
    return symptom.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create an object to store selected symptoms
    const selectedSymptoms = {};
  
    // Iterate through categories and symptoms
    Object.keys(symptoms).forEach((category) => {
      const categorySymptoms = symptoms[category];
  
      // Filter symptoms within each category and add to selectedSymptoms
      const filteredSymptoms = Object.keys(categorySymptoms).reduce(
        (selected, symptom) => {
          if (categorySymptoms[symptom] === 1) {
            selected[symptom] = 1;
          }
          return selected;
        },
        {}
      );
  
      // If filteredSymptoms is not empty, add it to selectedSymptoms
      if (Object.keys(filteredSymptoms).length > 0) {
        selectedSymptoms[category] = filteredSymptoms;
      }
    });
  
    // Combine all symptoms into a single object
    const combinedSymptoms = Object.keys(selectedSymptoms).reduce(
      (combined, category) => {
        return { ...combined, ...selectedSymptoms[category] };
      },
      {}
    );
  
    console.log('Input Data :', combinedSymptoms);
  
    // Make a POST request to the API using Axios
    axios.post('http://127.0.0.1:8080/predict/', combinedSymptoms, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((data) => {
        // Handle the API response here
        console.log('API Response:', data);

        // Redirect to the prediction result page with the prediction data
        router.push({
          pathname: '/result',
          query: data // the data
        }); // Use router.push to navigate
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };
  

  return (
    <form
      className="max-w-md mx-auto my-2 p-4 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
       <div>
         {Object.keys(symptoms).map((category) => (
           <div key={category} className="mb-4">
             <h2
               onClick={() => toggleCategory(category)}
               className="cursor-pointer text-lg font-semibold capitalize"
             >
               {category} {expandedCategory === category ? '▲' : '▼'}
             </h2>
             {expandedCategory === category && (
               <div className='flex flex-wrap gap-4 justify-stretch'>
                 {Object.keys(symptoms[category]).map((symptom) => (
                  <div key={symptom} className="mt-2 flex items-center">
                     <input
                       type="checkbox"
                       id={symptom}
                       checked={symptoms[category][symptom] === 1} // Convert '1' to true
                       onChange={(e) => handleSymptomChange(category, symptom, e.target.checked ? 1 : 0)} // Convert true to '1' and false to '0'
                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                     />
                     <label htmlFor={symptom} className="ml-2 block text-sm font-medium">
                       {formatLabel(symptom)}
                     </label>
                  </div>
                 ))}
               </div>
             )}
           </div>
         ))}
       </div>
       <button
         type="submit"
         className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
       >
         Submit
       </button>
     </form>
  );
};

export default SymptomForm;
