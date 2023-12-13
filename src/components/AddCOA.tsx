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
    estimateFuel: "",
    actualFuel: "",
    arrivedInLoadingDock: "",
    orderAssistTugboatEntry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const offset = new Date().getTimezoneOffset();
    const adjustedValue = new Date(
      new Date(value).getTime() - offset * 60 * 1000
    )
      .toISOString()
      .slice(0, 16);

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: adjustedValue };
      console.log("arrivedInLoadingDock:", updatedData.arrivedInLoadingDock);
      return updatedData;
    });
  };

  const handleFocus = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.value === "") {
      e.target.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-90 p-8 rounded-md text-darkFont max-w-md overflow-y-auto max-h-full">
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
              Tugboat/SPOB
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Estimate Fuel
            </label>
            <input
              type="text"
              name="estimateFuel"
              value={formData.estimateFuel}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Actual Fuel
            </label>
            <input
              type="text"
              name="actualFuel"
              value={formData.actualFuel}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tiba di Pelabuhan Loading
            </label>
            <input
              type="datetime-local"
              name="arrivedInLoadingDock"
              value={formData.arrivedInLoadingDock}
              onChange={handleChange}
              onFocus={handleFocus}
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
