import React, { useState } from "react";
import CropUpdateForm from "./CropUpdateForm";
import { Delete, EditIcon } from "lucide-react";

function CropTable({ cropList = [], handleDelete, handleUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const openUpdateModal = (crop) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedCrop(null);
    setIsModalOpen(false);
  };

  // const handleSave = (updatedData) => {
  //   handleUpdate(updatedData); // Call the parent function to update the crop data
  //   closeUpdateModal();
  // };

  return (
    <div className="w-full mt-6 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-green-900 text-zinc-50">
          <tr>
            <th className="px-4 py-2 border-b">Crop ID</th>
            <th className="px-4 py-2 border-b">Crop Name</th>
            <th className="px-4 py-2 border-b">Scientific Name</th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Season</th>
            <th className="px-4 py-2 border-b">Field ID</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cropList.map((crop) => (
            <tr key={crop.id}>
              <td className="px-4 py-2 border-b">{crop.id}</td>
              <td className="px-4 py-2 border-b">{crop.cropName}</td>
              <td className="px-4 py-2 border-b">{crop.scientificName}</td>
              <td className="px-4 py-2 border-b">{crop.category}</td>
              <td className="px-4 py-2 border-b">{crop.season}</td>
              <td className="px-4 py-2 border-b">{crop.fieldId}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openUpdateModal(crop)}
                  className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-3 rounded-md"
                >
                  <EditIcon/>
                </button>
                <button
                  onClick={() => handleDelete(crop.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md ml-2"
                >
                  <Delete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {isModalOpen && selectedCrop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Update Crop</h2>
            <CropUpdateForm
              initialData={selectedCrop}
              onClose={closeUpdateModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CropTable;
