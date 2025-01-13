import React from 'react';
import StaffAddForm from '../components/stafComponents/StaffAddForm';

const StaffPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Staff</h1>
      <p>Manage your staff information here.</p>
      <StaffAddForm/>
    </div>
  );
};

export default StaffPage;
