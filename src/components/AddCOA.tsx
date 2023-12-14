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
    startAnchorUp: "",
    finishAnchorUp: "",
    assistConnectEntry: "",
    docking: "",
    loadingMasterOnboard: "",
    startLoading: "",
    finishLoading: "",
    startSounding: "",
    finishSounding: "",
    orderAssistTugboatExit: "",
    assistConnectExit: "",
    castOff: "",
    fullAway_STS: "",
    arrivedAt_STS: "",
    orderAssistTugboatEntry_STS: "",
    assistConnectEntry_STS: "",
    docking_STS: "",
    loadingMasterOnboard_STS: "",
    startLoading_STS: "",
    finishLoading_STS: "",
    startSounding_STS: "",
    finishSounding_STS: "",
    orderAssistTugboatExit_STS: "",
    assistConnectExit_STS: "",
    castOff_STS: "",
    fullAway_discharge: "",
    arrivedAt_discharge: "",
    orderAssistTugboatEntry_discharge: "",
    startAnchorUp_discharge: "",
    finishAnchorUp_discharge: "",
    assistConnectEntry_discharge: "",
    docking_discharge: "",
    loadingMasterOnboard_discharge: "",
    startDischarge_discharge: "",
    finishDischarge_discharge: "",
    documentCargoOnboard_discharge: "",
    orderAssistTugboatExit_discharge: "",
    assistConnectExit_discharge: "",
    castOff_discharge: "",
    arrivedInPulauAtas: "",
    fullAwayAfterDischarge: "",
    arrivedInLoadingDock_2: "",
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Kapal Pandu Masuk - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="orderAssistTugboatEntry"
              value={formData.orderAssistTugboatEntry}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Anchor Up - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="startAnchorUp"
              value={formData.startAnchorUp}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Anchor Up - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="finishAnchorUp"
              value={formData.finishAnchorUp}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Assist Connect Masuk - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="assistConnectEntry"
              value={formData.assistConnectEntry}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sandar - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="docking"
              value={formData.docking}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Loading Master Onboard - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="loadingMasterOnboard"
              value={formData.loadingMasterOnboard}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Loading - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="startLoading"
              value={formData.startLoading}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Loading - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="finishLoading"
              value={formData.finishLoading}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Sounding
            </label>
            <input
              type="datetime-local"
              name="startSounding"
              value={formData.startSounding}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Sounding
            </label>
            <input
              type="datetime-local"
              name="finishSounding"
              value={formData.finishSounding}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Kapal Pandu Keluar - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="orderAssistTugboatExit"
              value={formData.orderAssistTugboatExit}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Assist Connect Keluar - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="assistConnectExit"
              value={formData.assistConnectExit}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cast Off - Jetty Loading
            </label>
            <input
              type="datetime-local"
              name="castOff"
              value={formData.castOff}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Away - STS
            </label>
            <input
              type="datetime-local"
              name="fullAway_STS"
              value={formData.fullAway_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tiba di - STS
            </label>
            <input
              type="datetime-local"
              name="arrivedAt_STS"
              value={formData.arrivedAt_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Kapal Pandu Masuk - STS
            </label>
            <input
              type="datetime-local"
              name="orderAssistTugboatEntry_STS"
              value={formData.orderAssistTugboatEntry_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Assist Connect Entry - STS
            </label>
            <input
              type="datetime-local"
              name="assistConnectEntry_STS"
              value={formData.assistConnectEntry_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sandar - STS
            </label>
            <input
              type="datetime-local"
              name="docking_STS"
              value={formData.docking_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Loading Master Onboard - STS
            </label>
            <input
              type="datetime-local"
              name="loadingMasterOnboard_STS"
              value={formData.loadingMasterOnboard_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Loading - STS
            </label>
            <input
              type="datetime-local"
              name="startLoading_STS"
              value={formData.startLoading_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Loading - STS
            </label>
            <input
              type="datetime-local"
              name="finishLoading_STS"
              value={formData.finishLoading_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Sounding - STS
            </label>
            <input
              type="datetime-local"
              name="startSounding_STS"
              value={formData.startSounding_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Sounding - STS
            </label>
            <input
              type="datetime-local"
              name="finishSounding_STS"
              value={formData.finishSounding_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Kapal Bantu Keluar - STS
            </label>
            <input
              type="datetime-local"
              name="orderAssistTugboatExit_STS"
              value={formData.orderAssistTugboatExit_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Assist Connect Keluar - STS
            </label>
            <input
              type="datetime-local"
              name="assistConnectExit_STS"
              value={formData.assistConnectExit_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cast Off - STS
            </label>
            <input
              type="datetime-local"
              name="castOff_STS"
              value={formData.castOff_STS}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Away - Pelabuhan Discharge
            </label>
            <input
              type="datetime-local"
              name="fullAway_discharge"
              value={formData.fullAway_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tiba di - Pelabuhan Discharge
            </label>
            <input
              type="datetime-local"
              name="arrivedAt_discharge"
              value={formData.arrivedAt_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Kapal Pandu Masuk - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="orderAssistTugboatEntry_discharge"
              value={formData.orderAssistTugboatEntry_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Anchor Up - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="startAnchorUp_discharge"
              value={formData.startAnchorUp_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Anchor Up - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="finishAnchorUp_discharge"
              value={formData.finishAnchorUp_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Assist Connect Masuk - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="assistConnectEntry_discharge"
              value={formData.assistConnectEntry_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sandar - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="docking_discharge"
              value={formData.docking_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Loading Master Onboard - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="loadingMasterOnboard_discharge"
              value={formData.loadingMasterOnboard_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Discharge - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="startDischarge_discharge"
              value={formData.startDischarge_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Finish Discharge - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="finishDischarge_discharge"
              value={formData.finishDischarge_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Document Cargo Onboard - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="documentCargoOnboard_discharge"
              value={formData.documentCargoOnboard_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Kapal Pandu Keluar - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="orderAssistTugboatExit_discharge"
              value={formData.orderAssistTugboatExit_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Assist Connect Keluar - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="assistConnectExit_discharge"
              value={formData.assistConnectExit_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cast Off - Jetty Discharge
            </label>
            <input
              type="datetime-local"
              name="castOff_discharge"
              value={formData.castOff_discharge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tiba di Pulau Atas
            </label>
            <input
              type="datetime-local"
              name="arrivedInPulauAtas"
              value={formData.arrivedInPulauAtas}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Away After Discharge
            </label>
            <input
              type="datetime-local"
              name="fullAwayAfterDischarge"
              value={formData.fullAwayAfterDischarge}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tiba di Pelabuhan Loading
            </label>
            <input
              type="datetime-local"
              name="arrivedInLoadingDock_2"
              value={formData.arrivedInLoadingDock_2}
              onChange={handleChange}
              onFocus={handleFocus}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-tertiary"
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
