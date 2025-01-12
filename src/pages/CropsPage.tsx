import React, { useState } from 'react';
import AddCropForm from '../components/cropComponents/CropForm';

const CropsPage = () => {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Crops</h1>
      <p>Manage your crops here.</p>
      <AddCropForm />
    </div>
  );
};

export default CropsPage;
