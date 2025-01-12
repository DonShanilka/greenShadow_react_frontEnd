import React, { useState } from 'react';

const CropForm = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    scientificName: '',
    category: '',
    season: '',
    fieldId: ''
  });

  const categories = ['Vegetable', 'Fruit', 'Grain', 'Legume'];
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving:', formData);
  };

  const handleUpdate = () => {
    console.log('Updating:', formData);
  };

  const handleDelete = () => {
    console.log('Deleting:', formData);
    setFormData({
      cropName: '',
      scientificName: '',
      category: '',
      season: '',
      fieldId: ''
    });
  };

  return (
    <div className="width-1 p-6 bg-white shadow-md rounded-lg">
      <div className="space-y-4 width-1">
        {/* Crop Name Input */}
        <div className="space-y-2">
          <label htmlFor="cropName" className="block text-sm font-medium">Crop Name</label>
          <input
            id="cropName"
            name="cropName"
            value={formData.cropName}
            onChange={handleInputChange}
            placeholder="Enter crop name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Scientific Name Input */}
        <div className="space-y-2">
          <label htmlFor="scientificName" className="block text-sm font-medium">Scientific Name</label>
          <input
            id="scientificName"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleInputChange}
            placeholder="Enter scientific name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Category Dropdown */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => handleSelectChange('category', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Season Dropdown */}
        <div className="space-y-2">
          <label htmlFor="season" className="block text-sm font-medium">Season</label>
          <select
            id="season"
            name="season"
            value={formData.season}
            onChange={(e) => handleSelectChange('season', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select season</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>

        {/* Field ID Input */}
        <div className="space-y-2">
          <label htmlFor="fieldId" className="block text-sm font-medium">Field ID</label>
          <input
            id="fieldId"
            name="fieldId"
            value={formData.fieldId}
            onChange={handleInputChange}
            placeholder="Enter field ID"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-end pt-4">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropForm;
