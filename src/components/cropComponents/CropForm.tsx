import React, { useState } from "react";
import CropTable from "./CropTable";
import { useDispatch, useSelector } from "react-redux";
import { addCrop, deleteCrop, updateCrop } from "../../reducer/CropSlice";
import { Save, SaveAll } from "lucide-react";

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

  const cropList = useSelector((state) => state.crops); 
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const categories = ["Vegetable", "Fruit", "Grain", "Legume"];
  const seasons = ["Spring", "Summer", "Fall", "Winter"];
  const dispatch = useDispatch();

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
    if (
      formData.cropName &&
      formData.scientificName &&
      formData.category &&
      formData.season &&
      formData.fieldId &&
      formData.cropImage
    ) {
      // Add a unique id for each crop
      const newCrop = {
        ...formData,
        id: new Date().getTime(), // Example of generating a unique id based on timestamp
      };
      dispatch(addCrop(newCrop)); // Dispatch to Redux store
      setFormData({
        cropName: "",
        scientificName: "",
        category: "",
        season: "",
        fieldId: "",
        cropImage: null,
      });
      setImagePreview(null); // Clear preview
    } else {
      alert("Please Fill in All Fields");
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteCrop({ id })); // Dispatch deleteCrop action
  };

  // const [isEditing, setIsEditing] = useState(false);
  // const [editId, setEditId] = useState(null);

// const handleEdit = (crop) => {
//   setIsEditing(true);
//   setEditId(crop.id);
//   setFormData({
//     cropName: crop.cropName,
//     scientificName: crop.scientificName,
//     category: crop.category,
//     season: crop.season,
//     fieldId: crop.fieldId,
//     cropImage: crop.cropImage,
//   });
//   setImagePreview(null); // Reset preview if needed
// };

  return (
    <>
      <div className="w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cropName" className="block text-sm font-medium">
              Crop Name
            </label>
            <input
              id="cropName"
              name="cropName"
              value={formData.cropName}
              onChange={(val) =>
                setFormData({ ...formData, cropName: val.target.value })
              }
              placeholder="Enter crop name"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
            />
          </div>

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
              onChange={(val) =>
                setFormData({ ...formData, scientificName: val.target.value })
              }
              placeholder="Enter scientific name"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
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
              onChange={(val) =>
                setFormData({ ...formData, category: val.target.value })
              }
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
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
              onChange={(val) =>
                setFormData({ ...formData, season: val.target.value })
              }
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
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
              onChange={(val) =>
                setFormData({ ...formData, fieldId: val.target.value })
              }
              placeholder="Enter field ID"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
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
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
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
              className="bg-emerald-500 font-bold text-white py-2 px-4 rounded-md hover:bg-emerald-600 w-32 "
            >
              SAVE
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <CropTable cropList={cropList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default CropForm;
