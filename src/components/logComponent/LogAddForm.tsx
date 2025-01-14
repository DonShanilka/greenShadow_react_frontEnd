import React, { useState } from "react";
import LogTable from "./LogTable";
import { useDispatch, useSelector } from "react-redux";
import { addLog, deleteLog } from "../../reducer/LogEntrySlice";

function LogAddForm() {
  const [logDate, setLogDate] = useState("");
  const [logDetails, setLogDetails] = useState("");
  const [logImage, setLogImage] = useState<File | null>(null);

  const logList = useSelector((state : any) => state.logs);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (logDate && logDetails && logImage !== null) {
      const newLogData = {
        id: new Date().getTime(),
        logDate,
        logDetails,
        logImage: logImage ? URL.createObjectURL(logImage) : null, // Convert to URL for preview
      };
  
      dispatch(addLog(newLogData));
  
      // Reset form state
      setLogDate("");
      setLogDetails("");
      setLogImage(null);
    } else {
      alert("Please Fill in All Fields");
    }
  };
  

  const handleDelete = (id: number) => {
    dispatch(deleteLog({ id })); 
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogImage(e.target.files[0]);
    }
  };

  return (
    <>
    <div className="w-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Log Date */}
          <div>
            <label htmlFor="logDate" className="block text-sm font-medium">
              Log Date
            </label>
            <input
              type="date"
              id="logDate"
              name="logDate"
              value={logDate}
              onChange={(e) => setLogDate(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="logImage" className="block text-sm font-medium">
              Upload Image
            </label>
            <input
              type="file"
              id="logImage"
              name="logImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
            />
          </div>
        </div>

        {/* Log Details */}
        <div>
            <label htmlFor="logDetails" className="block text-sm font-medium">
              Log Details
            </label>
            <textarea
              id="logDetails"
              name="logDetails"
              rows={4}
              value={logDetails}
              onChange={(e) => setLogDetails(e.target.value)}
              placeholder="Enter your log details..."
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:ring-emerald-200 block sm:text-sm focus:ring-2"
              required
            ></textarea>
          </div>

        <div className="flex gap-2 justify-end pt-4">
          <button
            type="submit"
            className="bg-emerald-500 font-bold text-white py-2 px-4 rounded-md hover:bg-emerald-600 w-32"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <div className="mt-12">
      <LogTable logList={logList} handleDelete={handleDelete}/>
    </div>
    </>
  );
}

export default LogAddForm;
