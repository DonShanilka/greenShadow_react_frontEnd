import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCrop } from "../../reducer/CropSlice";

const CropUpdateForm = ({onClose, initialData = {} }) => {
  const [formData, setFormData] = useState({
    cropId: initialData.id || "",
    cropName: initialData.cropName || "",
    scientificName: initialData.scientificName || "",
    category: initialData.category || "",
    season: initialData.season || "",
    fieldId: initialData.fieldId || "",
    cropImage: initialData.cropImage || null,
  });

  const [imagePreview, setImagePreview] = useState(initialData.cropImage || null);
  const dispatch = useDispatch();
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

  const handleUpdate = () => {
    if (
      formData.cropId && 
      formData.cropName &&
      formData.scientificName &&
      formData.category &&
      formData.season &&
      formData.fieldId &&
      formData.cropImage
    ) {

      const updateData = {...formData}
      console.log(updateData)
      dispatch(updateCrop(updateData));
      setFormData({cropId: "",
        cropName: "",
        scientificName: "",
        category: "",
        season: "",
        fieldId: "",
        cropImage: null,})
      onClose(); 
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
            <label htmlFor="cropId" className="block text-sm font-medium">
              Crop Id
            </label>
            <input
              id="cropId"
              name="cropId"
              value={formData.cropId}
              onChange={(e) =>
                setFormData({ ...formData, cropId: e.target.value })
              }
              placeholder="Crop Id"
              className="w-full p-2 border border-gray-200 rounded-md"
            />
          </div>

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
              onClick={handleUpdate}
              className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500"
            >
              Update
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-white py-2 px-4 rounded-md hover:bg-gray-400"
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
