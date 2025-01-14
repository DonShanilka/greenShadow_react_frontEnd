import { Delete, EditIcon } from "lucide-react";
import { useState } from "react";
import FieldUpdateForm from "./FieldUpdateForm";

function FieldTable({ fieldList = [], handleDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  const openUpdateModal = (field) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedField(null);
    setIsModalOpen(false);
  };

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
          {fieldList.map((field) => (
            <tr key={field.id}>
              <td className="px-4 py-2 border-b">{field.id}</td>
              <td className="px-4 py-2 border-b">{field.fieldName}</td>
              <td className="px-4 py-2 border-b">{field.location}</td>
              <td className="px-4 py-2 border-b">{field.extentSize}</td>
              <td className="px-4 py-2 border-b">
                {field.fieldImage1 ? (
                  <a
                    href={URL.createObjectURL(field.fieldImage1)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {field.fieldImage1.name}
                  </a>
                ) : (
                  "No Image"
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {field.fieldImage2 ? (
                  <a
                    href={URL.createObjectURL(field.fieldImage2)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {field.fieldImage2.name}
                  </a>
                ) : (
                  "No Image"
                )}
              </td>
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
      {/* Update Modal */}
      {isModalOpen && selectedField && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg">
            <FieldUpdateForm
              initialData={selectedField}
              onClose={closeUpdateModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FieldTable;
