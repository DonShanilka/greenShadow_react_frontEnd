import { Delete, EditIcon } from 'lucide-react'
import React, { useState } from 'react'
import EquipmentUpdateForm from './EquipmentUpdateForm';

function EquipmentTable({equipmentList = [],handleDelete}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEqu, setSelectedEqu] = useState(null);

  const openUpdateModal = (equipment : any) => {
    setSelectedEqu(equipment);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedEqu(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mt-6 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-green-900 text-zinc-50">
          <tr>
            <th className="px-4 py-2 border-b">Equipment ID</th>
            <th className="px-4 py-2 border-b">Equipment Name</th>
            <th className="px-4 py-2 border-b">Type</th>
            <th className="px-4 py-2 border-b">Available Count</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Staff ID</th>
            <th className="px-4 py-2 border-b">Field ID</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {equipmentList.map((equipment) => (
            <tr key={equipment.id}>
              <td className="px-4 py-2 border-b">{equipment.id}</td>
              <td className="px-4 py-2 border-b">{equipment.name}</td>
              <td className="px-4 py-2 border-b">{equipment.type}</td>
              <td className="px-4 py-2 border-b">{equipment.availableCount}</td>
              <td className="px-4 py-2 border-b">{equipment.eqstatus}</td>
              <td className="px-4 py-2 border-b">{equipment.staffIdOnEquipment}</td>
              <td className="px-4 py-2 border-b">{equipment.fieldIdOnEquipment}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openUpdateModal(equipment)}
                  className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-3 rounded-md"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => handleDelete(equipment.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md ml-2"
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {isModalOpen && selectedEqu && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg">
            <EquipmentUpdateForm
              initialData={selectedEqu}
              onClose={closeUpdateModal}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default EquipmentTable
