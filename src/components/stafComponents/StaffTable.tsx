import { Delete, EditIcon } from 'lucide-react'
import React, { useState } from 'react'
import StaffUpdateForm from './StaffUpdateForm';

function StaffTable({staffList = [], handleDelete}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff , setSelectedStaff] = useState(null);

  const openUpdateModal = (staff : any) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  }

  const closeUpdateModal = () => {
    setSelectedStaff(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="w-full mt-6 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-green-900 text-zinc-50">
          <tr>
            <th className="px-4 py-2 border-b">Employye ID</th>
            <th className="px-4 py-2 border-b">First Name</th>
            <th className="px-4 py-2 border-b">Last Name</th>
            <th className="px-4 py-2 border-b">Designation</th>
            <th className="px-4 py-2 border-b">Gender</th>
            <th className="px-4 py-2 border-b">Joined Date</th>
            <th className="px-4 py-2 border-b">Date of Birth</th>
            <th className="px-4 py-2 border-b">Mobile</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Role</th>
            <th className="px-4 py-2 border-b">Address 1</th>
            <th className="px-4 py-2 border-b">Address 2</th>
            <th className="px-4 py-2 border-b">Address 3</th>
            <th className="px-4 py-2 border-b">Address 4</th>
            <th className="px-4 py-2 border-b">Address 5</th>
            <th className="px-4 py-2 border-b">Field ID</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td className="px-4 py-2 border-b">{staff.id}</td>
              <td className="px-4 py-2 border-b">{staff.firstName}</td>
              <td className="px-4 py-2 border-b">{staff.lastName}</td>
              <td className="px-4 py-2 border-b">{staff.designation}</td>
              <td className="px-4 py-2 border-b">{staff.gender}</td>
              <td className="px-4 py-2 border-b">{staff.joinedDate}</td>
              <td className="px-4 py-2 border-b">{staff.dob}</td>
              <td className="px-4 py-2 border-b">{staff.contactNo}</td>
              <td className="px-4 py-2 border-b">{staff.email}</td>
              <td className="px-4 py-2 border-b">{staff.role}</td>
              <td className="px-4 py-2 border-b">{staff.address1}</td>
              <td className="px-4 py-2 border-b">{staff.address2}</td>
              <td className="px-4 py-2 border-b">{staff.address3}</td>
              <td className="px-4 py-2 border-b">{staff.address4}</td>
              <td className="px-4 py-2 border-b">{staff.address5}</td>
              <td className="px-4 py-2 border-b">{staff.staffFieldId}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openUpdateModal(staff)}
                  className="bg-orange-400 hover:bg-orange-500 text-white py-1 px-3 rounded-md"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => handleDelete(staff.id)}
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
      {isModalOpen && selectedStaff && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg">
            <StaffUpdateForm
              initialData={selectedStaff}
              onClose={closeUpdateModal}
            />
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default StaffTable
