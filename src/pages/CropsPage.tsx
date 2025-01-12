import React, { useState } from 'react';
import AddCropForm from '../components/cropComponents/CropForm';

const CropsPage = () => {

  const handleAddCrop = (formData: FormData) => {
    // Handle form submission (e.g., send data to API)
    console.log('Form Data:', Object.fromEntries(formData.entries()));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Crops</h1>
      <p>Manage your crops here.</p>
      <AddCropForm onSubmit={handleAddCrop} />
    </div>
  );
};

export default CropsPage;
