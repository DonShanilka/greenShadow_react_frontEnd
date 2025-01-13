import React from 'react';
import VehicleAddForm from '../components/vehicalComponents/VehicleAddForm';

const VehicalPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Vehical</h1>
      <p>Keep track of vehicals here.</p>
      <VehicleAddForm/>
    </div>
  );
};

export default VehicalPage;
