import React, { useState } from "react";

interface AddDataCOAModalProps {
  onClose: () => void;
}

const AddDataCOAModal: React.FC<AddDataCOAModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    year: "",
    month: "",
    trip: "",
    fleet: "",
    tugboat_spob: "",
    ob_spob: "",
    route: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission, you can send formData to your API or handle it as needed
    console.log("Form Data Submitted:", formData);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-90 p-8 rounded-md text-darkFont max-w-md">
        <h1 className="text-2xl font-semibold mb-4">
          This is Modal Page for Adding Data in Cycle Time COA!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Month
            </label>
            <input
              type="text"
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Trip
            </label>
            <input
              type="number"
              name="trip"
              value={formData.trip}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Fleet
            </label>
            <input
              type="text"
              name="fleet"
              value={formData.fleet}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tugboat/SPOT
            </label>
            <select
              name="tugboat_spob"
              value={formData.tugboat_spob}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="">Select...</option>
              <option value="Tugboat">Tugboat</option>
              <option value="SPOB">SPOB</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              OB/SPOB
            </label>
            <select
              name="ob_spob"
              value={formData.ob_spob}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="">Select...</option>
              <option value="OB">OB</option>
              <option value="SPOB">SPOB</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Route
            </label>
            <input
              type="text"
              name="route"
              value={formData.route}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-tertiary text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Add Data
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 text-gray-600 cursor-pointer"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDataCOAModal;