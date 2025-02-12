import React, { useState } from "react";
import FieldTable from "./FieldTable";
import { useDispatch, useSelector } from "react-redux";
import { addField, deleteField } from "../../reducer/FieldSlice";

interface FieldFormData {
  fieldName: string;
  location: string;
  extentSize: string;
  fieldImage1: File | null;
  fieldImage2: File | null;
}

const FieldAddForm = () => {
  const [formData, setFormData] = useState<FieldFormData>({
    fieldName: "",
    location: "",
    extentSize: "",
    fieldImage1: null,
    fieldImage2: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const fieldList = useSelector((state: any) => state.fields);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.fieldName &&
      formData.location &&
      formData.extentSize &&
      formData.fieldImage1 &&
      formData.fieldImage2
    ) {
      const newFieldData = {
        ...formData,
        id: new Date().getTime(),
        // Optionally include file names for display purposes
        fieldImage1Name: formData.fieldImage1.name,
        fieldImage2Name: formData.fieldImage2.name,
      };
      dispatch(addField(newFieldData));
      setFormData({
        fieldName: "",
        location: "",
        extentSize: "",
        fieldImage1: null,
        fieldImage2: null,
      });
      console.log(newFieldData);
    } else {
      alert("Please Fill in All Fields");
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteField({ id }));
  };

  return (
    <>
      <div className="w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <form id="addFieldForm" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fieldName" className="block text-sm font-medium">
                Field Name
              </label>
              <input
                id="fieldName"
                name="fieldName"
                value={formData.fieldName}
                onChange={handleInputChange}
                placeholder="Enter field name"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter location"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
                required
              />
            </div>

            <div>
              <label htmlFor="extentSize" className="block text-sm font-medium">
                Extent Size
              </label>
              <input
                id="extentSize"
                name="extentSize"
                value={formData.extentSize}
                onChange={handleInputChange}
                placeholder="Enter extent size"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="fieldImage1"
                className="block text-sm font-medium"
              >
                Field Image 1
              </label>
              <input
                type="file"
                id="fieldImage1"
                name="fieldImage1"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="fieldImage2"
                className="block text-sm font-medium"
              >
                Field Image 2
              </label>
              <input
                type="file"
                id="fieldImage2"
                name="fieldImage2"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-4 col-span-2">
            <button
              type="submit"
              className="bg-emerald-500 font-bold text-white py-2 px-4 rounded-md hover:bg-emerald-600 w-32"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <FieldTable fieldList={fieldList} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default FieldAddForm;
