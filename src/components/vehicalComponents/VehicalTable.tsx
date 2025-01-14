import { Delete, EditIcon } from 'lucide-react'
import React, { useState } from 'react'
import VehicalUpdateForm from './VehicalUpdateForm';

function VehicalTable({vehicalList = [], handleDelete}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehical, setSelectedVehical] = useState(null);

  const openUpdateModal = (vehical: any) => {
    setSelectedVehical(vehical);
    setIsModalOpen(true);
  }

  const closeUpdateModal = () => {
    setSelectedVehical(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="w-full mt-6 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-green-900 text-zinc-50">
          <tr>
            <th className="px-4 py-2 border-b">Vehical ID</th>
            <th className="px-4 py-2 border-b">License Plate </th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Fuel Type</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Remarks</th>
            <th className="px-4 py-2 border-b">Staff ID</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {vehicalList.map((vehical) => (
            <tr key={vehical.id}>
              <td className="px-4 py-2 border-b">{vehical.id}</td>
              <td className="px-4 py-2 border-b">{vehical.licensePlate}</td>
              <td className="px-4 py-2 border-b">{vehical.category}</td>
              <td className="px-4 py-2 border-b">{vehical.fuelType}</td>
              <td className="px-4 py-2 border-b">{vehical.status}</td>
              <td className="px-4 py-2 border-b">{vehical.remarks}</td>
              <td className="px-4 py-2 border-b">{vehical.staffId}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openUpdateModal(vehical)}
                  className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-3 rounded-md"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => handleDelete(vehical.id)}
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
      {isModalOpen && selectedVehical && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg">
            <VehicalUpdateForm
              initialData={selectedVehical}
              onClose={closeUpdateModal}
            />
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default VehicalTable
