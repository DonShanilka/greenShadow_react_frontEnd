import React from 'react';
import EquipmentAddForm from '../components/equipmentComponents/EquipmentAddForm';

const EquipmentPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Equipment</h1>
      <p>Manage your equipment details here.</p>
      <EquipmentAddForm/>
    </div>
  );
};

export default EquipmentPage;
