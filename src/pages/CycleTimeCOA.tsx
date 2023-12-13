import { mockData } from "../components/mockData";
import { useNavigate } from "react-router-dom";

export default function CycleTimeCOA() {
  const navigate = useNavigate();

  const handleAddData = () => {
    navigate("/cycle-time-coa/add");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-lightFont">
            Cycle Time COA
          </h1>
          <p className="mt-2 text-sm text-lightFont">
            List data Cycle Time COA
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={handleAddData}
            type="button"
            className="block rounded-md bg-tertiary px-3 py-2 text-center text-sm font-semibold text-lightFont shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
          >
            Add Data
          </button>
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
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-lightFont"
                  >
                    ID Data
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tanggal Mulai
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tahun
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Bulan
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Trip
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Fleet
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tugboat/SPOB
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    OB/SPOB
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Rute
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Estimate Fuel
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Actual Fuel
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tiba di Pelabuhan Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Masuk - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Anchor Up - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Anchor Up - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Masuk - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Sandar - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Loading Master Onboard - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Loading - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Loading - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Sounding - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Loading - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Keluar - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Keluar - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Cast Off - Jetty Loading
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Full Away - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tiba di - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Masuk - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Masuk - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Sandar - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Loading Master Onboard - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Loading - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Loading - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Sounding - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Sounding - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Keluar - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Keluar - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Cast Off - STS
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Full Away - Pelabuhan Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tiba di - Pelabuhan Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Masuk - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Anchor Up - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Anchor Up - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Masuk - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Sandar - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Loading Master Onboard - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Start Discharge - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Finish Discharge - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Document Cargo Onboard - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Order Kapal Pandu Keluar - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Assist Connect Keluar - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Cast Off - Jetty Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tiba di Pulau Atas
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Full Away After Discharge
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont"
                  >
                    Tiba di Pelabuhan Loading
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockData.map((mockData) => (
                  <tr key={mockData.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-lightFont sm:pl-0">
                      {mockData.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.year}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.month}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.trip}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.fleet}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.tugboat_spob}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.ob_spob}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.route}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.estimateFuel}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.actualFuel}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.arrivedInLoadingDock}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.orderAssistTugboatEntry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startAnchorUp}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishAnchorUp}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.assistConnectEntry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.docking}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.loadingMasterOnboard}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startLoading}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishLoading}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startSounding}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishSounding}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.orderAssistTugboatExit}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.assistConnectExit}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.castOff}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.fullAway_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.arrivedAt_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.orderAssistTugboatEntry_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.assistConnectEntry_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.docking_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.loadingMasterOnboard_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startLoading_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishLoading_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startSounding_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishSounding_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.orderAssistTugboatExit_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.assistConnectExit_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.castOff_STS}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.fullAway_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.arrivedAt_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.orderAssistTugboatEntry_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startAnchorUp_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishAnchorUp_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.assistConnectEntry_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.docking_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.loadingMasterOnboard_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.startDischarge_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.finishDischarge_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.documentCargoOnboard_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.orderAssistTugboatExit_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.assistConnectExit_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.castOff_discharge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.arrivedInPulauAtas}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
                      {mockData.fullAwayAfterDischarge}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-lightFont">
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
