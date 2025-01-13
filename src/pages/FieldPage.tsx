import React from 'react';
import AddFieldForm from '../components/fieldComponents/FieldAddForm'

const FieldPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Field</h1>
      <p>View and edit field data here.</p>
      <AddFieldForm/>
    </div>
  );
};

export default FieldPage;
