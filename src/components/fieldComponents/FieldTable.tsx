import React, { useState } from "react";
import { Delete, EditIcon } from "lucide-react";

function FieldTable({ fieldList = [], handleDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const openUpdateModal = (field) => {
    setSelectedCrop(field);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedCrop(null);
    setIsModalOpen(false);
  };

  // Ensure fieldList is an array
  const fields = Array.isArray(fieldList) ? fieldList : [];

  return (
    <div className="w-full mt-6 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-green-900 text-zinc-50">
          <tr>
            <th className="px-4 py-2 border-b">Field ID</th>
            <th className="px-4 py-2 border-b">Field Name</th>
            <th className="px-4 py-2 border-b">Location</th>
            <th className="px-4 py-2 border-b">Extent Size</th>
            <th className="px-4 py-2 border-b">Field Image 1</th>
            <th className="px-4 py-2 border-b">Field Image 2</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {fields.map((field) => (
            <tr key={field.id}>
              <td className="px-4 py-2 border-b">{field.fieldId}</td>
              <td className="px-4 py-2 border-b">{field.fieldName}</td>
              <td className="px-4 py-2 border-b">{field.location}</td>
              <td className="px-4 py-2 border-b">{field.extentSize}</td>
              <td className="px-4 py-2 border-b">{field.fieldImage1}</td>
              <td className="px-4 py-2 border-b">{field.fieldImage2}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openUpdateModal(field)}
                  className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-3 rounded-md"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => handleDelete(field.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md ml-2"
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FieldTable;
