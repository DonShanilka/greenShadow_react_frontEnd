import React, { useState } from "react";

const CropUpdateForm = ({onClose, onSave, initialData = {} }) => {
  const [formData, setFormData] = useState({
    cropName: initialData.cropName || "",
    scientificName: initialData.scientificName || "",
    category: initialData.category || "",
    season: initialData.season || "",
    fieldId: initialData.fieldId || "",
    cropImage: initialData.cropImage || null,
  });

  const [imagePreview, setImagePreview] = useState(initialData.cropImage || null);

  const categories = ["Vegetable", "Fruit", "Grain", "Legume"];
  const seasons = ["Spring", "Summer", "Fall", "Winter"];

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, cropImage: file.name });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (
      formData.cropName &&
      formData.scientificName &&
      formData.category &&
      formData.season &&
      formData.fieldId &&
      formData.cropImage
    ) {
      onSave(formData); // Trigger save action from parent
      onClose(); // Close the modal
    } else {
      alert("Please fill in all fields.");
    }
  };

  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Crop Form</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cropName" className="block text-sm font-medium">
              Crop Name
            </label>
            <input
              id="cropName"
              name="cropName"
              value={formData.cropName}
              onChange={(e) =>
                setFormData({ ...formData, cropName: e.target.value })
              }
              placeholder="Enter crop name"
              className="w-full p-2 border border-gray-200 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="scientificName" className="block text-sm font-medium">
              Scientific Name
            </label>
            <input
              id="scientificName"
              name="scientificName"
              value={formData.scientificName}
              onChange={(e) =>
                setFormData({ ...formData, scientificName: e.target.value })
              }
              placeholder="Enter scientific name"
              className="w-full p-2 border border-gray-200 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full p-2 border border-gray-200 rounded-md"
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="season" className="block text-sm font-medium">
              Season
            </label>
            <select
              id="season"
              name="season"
              value={formData.season}
              onChange={(e) =>
                setFormData({ ...formData, season: e.target.value })
              }
              className="w-full p-2 border border-gray-200 rounded-md"
            >
              <option value="">Select season</option>
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="fieldId" className="block text-sm font-medium">
              Field ID
            </label>
            <input
              id="fieldId"
              name="fieldId"
              value={formData.fieldId}
              onChange={(e) =>
                setFormData({ ...formData, fieldId: e.target.value })
              }
              placeholder="Enter field ID"
              className="w-full p-2 border border-gray-200 rounded-md"
            />
          </div>

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
              className="w-full p-2 border border-gray-200 rounded-md"
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

          <div className="flex gap-2 justify-end pt-4 col-span-2">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropUpdateForm;
