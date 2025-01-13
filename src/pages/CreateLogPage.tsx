import React from 'react';
import LogAddForm from '../components/logComponent/LogAddForm';

const CreateLogPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Create Log</h1>
      <p>Create logs for your system here.</p>
      <LogAddForm/>
    </div>
  );
};

export default CreateLogPage;
