import { useState } from "react";
import { mockData } from "../components/mockData";
import AddDataCOAModal from "../components/AddCOA";
import RemarksCOAModal from "../components/RemarksCOA";

export default function CycleTimeCOA() {
  const [isAddDataModalOpen, setAddDataModalOpen] = useState(false);
  const [isRemarksModalOpen, setRemarksModalOpen] = useState(false);
  const [selectedDataIndex, setSelectedDataIndex] = useState<number | null>(
    null
  );

  const openAddDataModal = () => {
    setAddDataModalOpen(true);
  };

  const openRemarksModal = (index: number) => {
    setRemarksModalOpen(true);
    setSelectedDataIndex(index);
  };

  const closeModal = () => {
    setAddDataModalOpen(false);
    setRemarksModalOpen(false);
  };

  console.log("Selected Data Index:", selectedDataIndex);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between pt-5">
        <div className="sm:flex-auto">
          <h3 className="text-base font-semibold leading-6 text-lightFont">
            CYCLE TIME COA
          </h3>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={openAddDataModal}
            type="button"
            className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Data
          </button>
          {isAddDataModalOpen ? <AddDataCOAModal onClose={closeModal} /> : ""}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="mx-4 my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-lightFont"
                  ></th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-lightFont"
                  >
                    ID Data
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tanggal Mulai
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tahun
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Bulan
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Trip
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Fleet
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tugboat/SPOB
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    OB/SPOB
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Rute
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Estimate Fuel
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Actual Fuel
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tiba di Pelabuhan Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Masuk - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Anchor Up - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Anchor Up - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Masuk - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Sandar - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Loading Master Onboard - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Loading - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Loading - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Sounding - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Loading - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Keluar - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Keluar - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Cast Off - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Full Away - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tiba di - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Masuk - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Masuk - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Sandar - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Loading Master Onboard - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Loading - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Loading - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Sounding - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Sounding - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Keluar - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Keluar - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Cast Off - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Full Away - Pelabuhan Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tiba di - Pelabuhan Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Masuk - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Anchor Up - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Anchor Up - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Masuk - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Sandar - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Loading Master Onboard - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Start Discharge - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Finish Discharge - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Document Cargo Onboard - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Keluar - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Keluar - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Cast Off - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tiba di Pulau Atas
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Full Away After Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-lightFont"
                  >
                    Tiba di Pelabuhan Loading
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockData.map((mockData, index) => (
                  <tr key={mockData.id}>
                    <td className="relative py-4 pl-3 text-right text-sm font-medium">
                      <a
                        className="inline-block px-4 py-2 text-center bg-secondary text-lightFont rounded-md hover:bg-secondary-dark focus:outline-none focus:shadow-outline-indigo active:bg-secondary-darker"
                        href="#"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => openRemarksModal(index)}
                        type="button"
                        className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        See Remarks
                      </button>
                      {isRemarksModalOpen &&
                      selectedDataIndex !== null &&
                      selectedDataIndex === index ? (
                        <RemarksCOAModal
                          remarks={mockData.remarks}
                          onClose={closeModal}
                        />
                      ) : null}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-lightFont sm:pl-0 text-center">
                      {mockData.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.year}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.month}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.trip}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.fleet}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.tugboat_spob}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.ob_spob}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.route}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.estimateFuel}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.actualFuel}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.arrivedInLoadingDock}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.orderAssistTugboatEntry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startAnchorUp}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishAnchorUp}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.assistConnectEntry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.docking}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.loadingMasterOnboard}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startLoading}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishLoading}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startSounding}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishSounding}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.orderAssistTugboatExit}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.assistConnectExit}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.castOff}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.fullAway_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.arrivedAt_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.orderAssistTugboatEntry_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.assistConnectEntry_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.docking_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.loadingMasterOnboard_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startLoading_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishLoading_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startSounding_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishSounding_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.orderAssistTugboatExit_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.assistConnectExit_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.castOff_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.fullAway_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.arrivedAt_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.orderAssistTugboatEntry_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startAnchorUp_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishAnchorUp_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.assistConnectEntry_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.docking_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.loadingMasterOnboard_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.startDischarge_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.finishDischarge_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.documentCargoOnboard_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.orderAssistTugboatExit_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.assistConnectExit_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.castOff_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.arrivedInPulauAtas}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.fullAwayAfterDischarge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont text-center">
                      {mockData.arrivedInLoadingDock_2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
