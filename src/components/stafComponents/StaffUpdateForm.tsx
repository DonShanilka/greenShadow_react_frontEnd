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
      <div className="w-full max-w-5xl  p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Update Staff</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Designation */}
          <div>
            <label htmlFor="designation" className="block text-sm font-medium">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>

          {/* Joined Date */}
          <div>
            <label htmlFor="joinedDate" className="block text-sm font-medium">
              Joined Date
            </label>
            <input
              type="date"
              id="joinedDate"
              name="joinedDate"
              value={formData.joinedDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium">
              Mobile
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            >
              <option value="MANAGER">Manager</option>
              <option value="ADMINISTRATIVE">Administrative</option>
              <option value="SCIENTIST">Scientist</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* Address Fields */}
          {Array.from({ length: 5 }, (_, index) => (
            <div key={`address${index + 1}`}>
              <label
                htmlFor={`address${index + 1}`}
                className="block text-sm font-medium"
              >
                Address {index + 1}
              </label>
              <input
                type="text"
                id={`address${index + 1}`}
                name={`address${index + 1}`}
                value={formData[`address${index + 1}` as keyof StaffFormData]}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
                required
              />
            </div>
          ))}

          {/* Staff Field ID */}
          <div>
            <label htmlFor="staffFieldId" className="block text-sm font-medium">
              Field ID
            </label>
            <select
              id="staffFieldId"
              name="staffFieldId"
              value={formData.staffFieldId}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
            >
              <option value="">Choose Field ID</option>
              {/* Replace with dynamic options */}
              <option value="field1">Field 1</option>
              <option value="field2">Field 2</option>
            </select>
          </div>
        </div>

        {/* Update and Clode Button */}
        <div className="flex gap-4 justify-end pt-4">
            <button
              type="submit"
              className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500"
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
