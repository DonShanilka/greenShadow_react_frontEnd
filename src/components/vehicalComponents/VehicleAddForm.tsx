import React, { useState } from "react";
import VehicalTable from "./VehicalTable";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, deleteVehicle } from "../../reducer/VehicalSlice";

function VehicleAddForm() {

  interface VehicleFormData {
    licensePlate: string;
    category: string;
    fuelType: string;
    status: string;
    remarks: string;
    staffId: string;
  }

  const [formData, setFormData] = useState<VehicleFormData>({
    licensePlate: "",
    category: "",
    fuelType: "",
    status: "",
    remarks: "",
    staffId: "",
  });

  const vehicalList = useSelector((state: any) => state.vehicles);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.licensePlate &&
      formData.category &&
      formData.fuelType &&
      formData.status &&
      formData.remarks &&
      formData.staffId 
    ) {
      const newVehicalData = {...formData, id: new Date().getTime(),}
      dispatch(addVehicle(newVehicalData));
      setFormData({
        licensePlate: "",
        category: "",
        fuelType: "",
        status: "",
        remarks: "",
        staffId: "",
      });
      console.log(newVehicalData);
    } else {
      alert("Please Fill in All Fields");
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteVehicle({ id })); 
  };

  return (
    <>
      <div className="w-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="licensePlate" className="block text-sm font-medium">
              License Plate
            </label>
            <input
              id="licensePlate"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleInputChange}
              placeholder="Enter license plate"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Enter category"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="fuelType" className="block text-sm font-medium">
              Fuel Type
            </label>
            <input
              id="fuelType"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleInputChange}
              placeholder="Enter fuel type"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium">
              Status
            </label>
            <input
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              placeholder="Enter status"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          <div>
            <label htmlFor="remarks" className="block text-sm font-medium">
              Remarks
            </label>
            <input
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              placeholder="Enter remarks"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
            />
          </div>

          <div>
            <label htmlFor="staffIdOnVehicle" className="block text-sm font-medium">
              Staff ID
            </label>
            <select
              id="staffId"
              name="staffId"
              value={formData.staffId}
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
      <VehicalTable vehicalList={vehicalList} handleDelete={handleDelete}/>
    </div>
    </>
  )
}

export default VehicleAddForm
