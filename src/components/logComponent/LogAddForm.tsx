import React, { useState } from "react";
import LogTable from "./LogTable";

function LogAddForm() {
  const [logDate, setLogDate] = useState("");
  const [logDetails, setLogDetails] = useState("");
  const [logImage, setLogImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("logDate", logDate);
    formData.append("logDetails", logDetails);
    if (logImage) {
      formData.append("logImage", logImage);
    }

    console.log("Form submitted:", { logDate, logDetails, logImage });
    // Submit the form data to an API or parent function
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
      <LogTable/>
    </div>
    </>
  );
}

export default LogAddForm;
