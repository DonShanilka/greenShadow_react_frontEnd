import React, { useState } from "react";
import EquipmentTable from "./EquipmentTable";

function EquipmentAddForm() {

  interface EquipmentFormData {
    name: string;
    type: string;
    availableCount: number;
    eqstatus: string;
    staffIdOnEquipment: string;
    fieldIdOnEquipment: string;
  }

  const [formData, setFormData] = useState<EquipmentFormData>({
    name: "",
    type: "",
    availableCount: 0,
    eqstatus: "Available",
    staffIdOnEquipment: "",
    fieldIdOnEquipment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
    <div className="w-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter equipment name"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium">
              Type
            </label>
            <input
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              placeholder="Enter equipment type"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="availableCount" className="block text-sm font-medium">
              Available Count
            </label>
            <input
              id="availableCount"
              name="availableCount"
              type="number"
              value={formData.availableCount}
              onChange={handleInputChange}
              placeholder="Enter available count"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="eqstatus" className="block text-sm font-medium">
              Status
            </label>
            <select
              id="eqstatus"
              name="eqstatus"
              value={formData.eqstatus}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div>
            <label htmlFor="staffIdOnEquipment" className="block text-sm font-medium">
              Staff ID
            </label>
            <select
              id="staffIdOnEquipment"
              name="staffIdOnEquipment"
              value={formData.staffIdOnEquipment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
            >
              <option value="" disabled>
                Select Staff ID
              </option>
              {/* Replace with dynamic options */}
              <option value="staff1">Staff 1</option>
              <option value="staff2">Staff 2</option>
            </select>
          </div>

          <div>
            <label htmlFor="fieldIdOnEquipment" className="block text-sm font-medium">
              Field ID
            </label>
            <select
              id="fieldIdOnEquipment"
              name="fieldIdOnEquipment"
              value={formData.fieldIdOnEquipment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
            >
              <option value="" disabled>
                Select Field ID
              </option>
              {/* Replace with dynamic options */}
              <option value="field1">Field 1</option>
              <option value="field2">Field 2</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 justify-end pt-4 col-span-2">
          <button
            type="submit"
            className="bg-emerald-500 font-bold text-white py-2 px-4 rounded-md hover:bg-emerald-600 w-32"
          >
            ADD
          </button>
        </div>
      </form>
    </div>

    <div className="mt-12">
      <EquipmentTable/>
    </div>
    </>
  )
}

export default EquipmentAddForm
