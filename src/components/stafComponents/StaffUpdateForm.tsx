import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEquipment } from "../../reducer/EquipmentSlice";

function StaffUpdateForm({ onClose, initialData }) {

  const [formData, setFormData] = useState({
    id: initialData.id || "",
    name: initialData.name || "",
    type: initialData.type || "",
    availableCount: initialData.availableCount || 0,
    eqstatus: initialData.eqstatus || "Available",
    staffIdOnEquipment: initialData.staffIdOnEquipment || "",
    fieldIdOnEquipment: initialData.fieldIdOnEquipment || "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.type &&
      formData.availableCount &&
      formData.eqstatus &&
      formData.staffIdOnEquipment &&
      formData.fieldIdOnEquipment
    ) {
      dispatch(updateEquipment(formData)); // Dispatch the updated data
      onClose(); // Close the modal
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Update Equipment</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
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
                className="w-full p-2 border border-gray-200 rounded-md"
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
                className="w-full p-2 border border-gray-200 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="availableCount"
                className="block text-sm font-medium"
              >
                Available Count
              </label>
              <input
                id="availableCount"
                name="availableCount"
                type="number"
                value={formData.availableCount}
                onChange={handleInputChange}
                placeholder="Enter available count"
                className="w-full p-2 border border-gray-200 rounded-md"
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
                className="w-full p-2 border border-gray-200 rounded-md"
                required
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="staffIdOnEquipment"
                className="block text-sm font-medium"
              >
                Staff ID
              </label>
              <select
                id="staffIdOnEquipment"
                name="staffIdOnEquipment"
                value={formData.staffIdOnEquipment}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-md"
                required
              >
                <option value="" disabled>
                  Select Staff ID
                </option>
                <option value="staff1">Staff 1</option>
                <option value="staff2">Staff 2</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fieldIdOnEquipment"
                className="block text-sm font-medium"
              >
                Field ID
              </label>
              <select
                id="fieldIdOnEquipment"
                name="fieldIdOnEquipment"
                value={formData.fieldIdOnEquipment}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-md"
                required
              >
                <option value="" disabled>
                  Select Field ID
                </option>
                <option value="field1">Field 1</option>
                <option value="field2">Field 2</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 justify-end pt-4">
            <button
              type="submit"
              className="bg-emerald-500 font-bold text-white py-2 px-4 rounded-md hover:bg-emerald-600"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 font-bold text-white py-2 px-4 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StaffUpdateForm
