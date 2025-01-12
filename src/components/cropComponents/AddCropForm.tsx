import React, { useState } from 'react';

interface AddCropFormProps {
  onSubmit: (formData: FormData) => void;
}

const AddCropForm: React.FC<AddCropFormProps> = ({ onSubmit }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    onSubmit(formData); // Call the onSubmit prop with the form data
  };

  return (
    <form id="addCropForm" onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                id="cropImage"
                name="cropImage"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <label htmlFor="cropImage" className="cursor-pointer">
                {imagePreview ? (
                  <img
                    id="imagePreview"
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto mb-2 max-h-32"
                  />
                ) : (
                  <div className="text-gray-500">
                    <i className="fas fa-cloud-upload-alt text-2xl mb-2"></i>
                    <p>Click to upload image</p>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Name</label>
            <input
              type="text"
              name="cropName"
              required
              className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Scientific Name</label>
            <input
              type="text"
              name="scientificName"
              required
              className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              required
              className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
            >
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Grain">Grain</option>
              <option value="Legume">Legume</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
            <select
              name="season"
              required
              className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
            >
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Field ID</label>
            <select
              id="cropFieldId"
              name="cropFieldId"
              required
              className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
            >
              <option value="">Choose Field ID</option>
              <option value="Field1">Field 1</option>
              <option value="Field2">Field 2</option>
              {/* Add dynamic field IDs here */}
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
      >
        Add Crop
      </button>
    </form>
  );
};

export default AddCropForm;
