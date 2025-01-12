import React from "react";

function CropTable({ cropList = [], handleDelete }) {
  return (
    <div className="w-full mt-6 overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
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
                  onClick={() => handleDelete(crop.id)}
                  className="bg-red-600 text-white py-1 px-3 rounded-md ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CropTable;
