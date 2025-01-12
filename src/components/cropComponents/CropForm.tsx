import React, { useState } from "react";
import CropTable from "./CropTable";

const CropForm = () => {
  interface FormData {
    cropName: string;
    scientificName: string;
    category: string;
    season: string;
    fieldId: string;
    cropImage: string | null;
  }

  const [formData, setFormData] = useState<FormData>({
    cropName: "",
    scientificName: "",
    category: "",
    season: "",
    fieldId: "",
    cropImage: null,
  });

  const categories = ["Vegetable", "Fruit", "Grain", "Legume"];
  const seasons = ["Spring", "Summer", "Fall", "Winter"];

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        cropImage: file.name,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Saving:", formData);
    // Add saving logic here
  };

  const handleUpdate = () => {
    console.log("Updating:", formData);
    // Add update logic here
  };

  const handleDelete = () => {
    console.log("Deleting:", formData);
    setFormData({
      cropName: "",
      scientificName: "",
      category: "",
      season: "",
      fieldId: "",
      cropImage: null,
    });
    setImagePreview(null);
  };

  return (
    <>
      <div className="w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Crop Form</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Crop Name Input */}
          <div>
            <label htmlFor="cropName" className="block text-sm font-medium">
              Crop Name
            </label>
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
          <div>
            <label
              htmlFor="scientificName"
              className="block text-sm font-medium"
            >
              Scientific Name
            </label>
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
          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={(e) => handleSelectChange("category", e.target.value)}
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
          <div>
            <label htmlFor="season" className="block text-sm font-medium">
              Season
            </label>
            <select
              id="season"
              name="season"
              value={formData.season}
              onChange={(e) => handleSelectChange("season", e.target.value)}
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
          <div>
            <label htmlFor="fieldId" className="block text-sm font-medium">
              Field ID
            </label>
            <input
              id="fieldId"
              name="fieldId"
              value={formData.fieldId}
              onChange={handleInputChange}
              placeholder="Enter field ID"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              Crop Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Image preview"
                  className="max-w-full h-auto"
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-end pt-4 col-span-2">
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
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* Crop Table */}
      <div className="mt-6">
        <CropTable formData={formData} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default CropForm;
