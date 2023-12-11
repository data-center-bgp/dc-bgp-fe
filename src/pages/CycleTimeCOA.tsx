const mockData = [
    {
        startDate: 'January 1th 2023',
        year: 2023,
        month: 'January',
        trip: 11304123,
        fleet: 'Kapal Api',
        tugboat_spob: 'Tugboat',
        ob_spob: 'OB',
        route: 'Balikpapan - Samarinda',
        estimateFuel: '440',
        actualFuel: '442',
        arrivedInLoadingDock: 'January 1st 2023 01.30',
        orderAssistTugboatEntry: 'January 1st 2023 01.31',
        startAnchorUp: 'January 1st 2023 01.31',
        finishAnchorUp: 'January 1st 2023 01.31',
        assistConnectEntry: 'January 1st 2023 01.31',
        docking: 'January 1st 2023 01.31',
        loadingMasterOnboard: 'January 1st 2023 01.31',
        startLoading: 'January 1st 2023 01.31',
        finishLoading: 'January 1st 2023 01.31',
        startSounding: 'January 1st 2023 01.31',
        finishSounding: 'January 1st 2023 01.31',
        orderAssistTugboatExit: 'January 1st 2023 01.31',
        assistConnectExit: 'January 1st 2023 01.31',
        castOff: 'January 1st 2023 01.31',
        fullAway_STS: 'January 1st 2023 01.31',
        arrivedAt_STS: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_STS: 'January 1st 2023 01.31',
        assistConnectEntry_STS: 'January 1st 2023 01.31',
        docking_STS: 'January 1st 2023 01.31',
        loadingMasterOnboard_STS: 'January 1st 2023 01.31',
        startLoading_STS: 'January 1st 2023 01.31',
        finishLoading_STS: 'January 1st 2023 01.31',
        startSounding_STS: 'January 1st 2023 01.31',
        finishSounding_STS: 'January 1st 2023 01.31',
        orderAssistTugboatExit_STS: 'January 1st 2023 01.31',
        assistConnectExit_STS: 'January 1st 2023 01.31',
        castOff_STS: 'January 1st 2023 01.31',
        fullAway_discharge: 'January 1st 2023 01.31',
        arrivedAt_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_discharge: 'January 1st 2023 01.31',
        startAnchorUp_discharge: 'January 1st 2023 01.31',
        finishAnchorUp_discharge: 'January 1st 2023 01.31',
        assistConnectEntry_discharge: 'January 1st 2023 01.31',
        docking_discharge: 'January 1st 2023 01.31',
        loadingMasterOnboard_discharge: 'January 1st 2023 01.31',
        startDischarge_discharge: 'January 1st 2023 01.31',
        finishDischarge_discharge: 'January 1st 2023 01.31',
        documentCargoOnboard_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatExit_discharge: 'January 1st 2023 01.31',
        assistConnectExit_discharge: 'January 1st 2023 01.31',
        castOff_discharge: 'January 1st 2023 01.31',
        arrivedInPulauAtas: 'January 1st 2023 01.31',
        fullAwayAfterDischarge: 'January 1st 2023 01.31',
        arrivedInLoadingDock_2: 'January 1st 2023 01.31',
    },
    {
        startDate: 'January 1th 2023',
        year: 2023,
        month: 'January',
        trip: 11304123,
        fleet: 'Kapal Api',
        tugboat_spob: 'Tugboat',
        ob_spob: 'OB',
        route: 'Balikpapan - Samarinda',
        estimateFuel: '440',
        actualFuel: '442',
        arrivedInLoadingDock: 'January 1st 2023 01.30',
        orderAssistTugboatEntry: 'January 1st 2023 01.31',
        startAnchorUp: 'January 1st 2023 01.31',
        finishAnchorUp: 'January 1st 2023 01.31',
        assistConnectEntry: 'January 1st 2023 01.31',
        docking: 'January 1st 2023 01.31',
        loadingMasterOnboard: 'January 1st 2023 01.31',
        startLoading: 'January 1st 2023 01.31',
        finishLoading: 'January 1st 2023 01.31',
        startSounding: 'January 1st 2023 01.31',
        finishSounding: 'January 1st 2023 01.31',
        orderAssistTugboatExit: 'January 1st 2023 01.31',
        assistConnectExit: 'January 1st 2023 01.31',
        castOff: 'January 1st 2023 01.31',
        fullAway_STS: 'January 1st 2023 01.31',
        arrivedAt_STS: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_STS: 'January 1st 2023 01.31',
        assistConnectEntry_STS: 'January 1st 2023 01.31',
        docking_STS: 'January 1st 2023 01.31',
        loadingMasterOnboard_STS: 'January 1st 2023 01.31',
        startLoading_STS: 'January 1st 2023 01.31',
        finishLoading_STS: 'January 1st 2023 01.31',
        startSounding_STS: 'January 1st 2023 01.31',
        finishSounding_STS: 'January 1st 2023 01.31',
        orderAssistTugboatExit_STS: 'January 1st 2023 01.31',
        assistConnectExit_STS: 'January 1st 2023 01.31',
        castOff_STS: 'January 1st 2023 01.31',
        fullAway_discharge: 'January 1st 2023 01.31',
        arrivedAt_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_discharge: 'January 1st 2023 01.31',
        startAnchorUp_discharge: 'January 1st 2023 01.31',
        finishAnchorUp_discharge: 'January 1st 2023 01.31',
        assistConnectEntry_discharge: 'January 1st 2023 01.31',
        docking_discharge: 'January 1st 2023 01.31',
        loadingMasterOnboard_discharge: 'January 1st 2023 01.31',
        startDischarge_discharge: 'January 1st 2023 01.31',
        finishDischarge_discharge: 'January 1st 2023 01.31',
        documentCargoOnboard_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatExit_discharge: 'January 1st 2023 01.31',
        assistConnectExit_discharge: 'January 1st 2023 01.31',
        castOff_discharge: 'January 1st 2023 01.31',
        arrivedInPulauAtas: 'January 1st 2023 01.31',
        fullAwayAfterDischarge: 'January 1st 2023 01.31',
        arrivedInLoadingDock_2: 'January 1st 2023 01.31',
    },
    {
        startDate: 'January 1th 2023',
        year: 2023,
        month: 'January',
        trip: 11304123,
        fleet: 'Kapal Api',
        tugboat_spob: 'Tugboat',
        ob_spob: 'OB',
        route: 'Balikpapan - Samarinda',
        estimateFuel: '440',
        actualFuel: '442',
        arrivedInLoadingDock: 'January 1st 2023 01.30',
        orderAssistTugboatEntry: 'January 1st 2023 01.31',
        startAnchorUp: 'January 1st 2023 01.31',
        finishAnchorUp: 'January 1st 2023 01.31',
        assistConnectEntry: 'January 1st 2023 01.31',
        docking: 'January 1st 2023 01.31',
        loadingMasterOnboard: 'January 1st 2023 01.31',
        startLoading: 'January 1st 2023 01.31',
        finishLoading: 'January 1st 2023 01.31',
        startSounding: 'January 1st 2023 01.31',
        finishSounding: 'January 1st 2023 01.31',
        orderAssistTugboatExit: 'January 1st 2023 01.31',
        assistConnectExit: 'January 1st 2023 01.31',
        castOff: 'January 1st 2023 01.31',
        fullAway_STS: 'January 1st 2023 01.31',
        arrivedAt_STS: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_STS: 'January 1st 2023 01.31',
        assistConnectEntry_STS: 'January 1st 2023 01.31',
        docking_STS: 'January 1st 2023 01.31',
        loadingMasterOnboard_STS: 'January 1st 2023 01.31',
        startLoading_STS: 'January 1st 2023 01.31',
        finishLoading_STS: 'January 1st 2023 01.31',
        startSounding_STS: 'January 1st 2023 01.31',
        finishSounding_STS: 'January 1st 2023 01.31',
        orderAssistTugboatExit_STS: 'January 1st 2023 01.31',
        assistConnectExit_STS: 'January 1st 2023 01.31',
        castOff_STS: 'January 1st 2023 01.31',
        fullAway_discharge: 'January 1st 2023 01.31',
        arrivedAt_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_discharge: 'January 1st 2023 01.31',
        startAnchorUp_discharge: 'January 1st 2023 01.31',
        finishAnchorUp_discharge: 'January 1st 2023 01.31',
        assistConnectEntry_discharge: 'January 1st 2023 01.31',
        docking_discharge: 'January 1st 2023 01.31',
        loadingMasterOnboard_discharge: 'January 1st 2023 01.31',
        startDischarge_discharge: 'January 1st 2023 01.31',
        finishDischarge_discharge: 'January 1st 2023 01.31',
        documentCargoOnboard_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatExit_discharge: 'January 1st 2023 01.31',
        assistConnectExit_discharge: 'January 1st 2023 01.31',
        castOff_discharge: 'January 1st 2023 01.31',
        arrivedInPulauAtas: 'January 1st 2023 01.31',
        fullAwayAfterDischarge: 'January 1st 2023 01.31',
        arrivedInLoadingDock_2: 'January 1st 2023 01.31',
    },
    {
        startDate: 'January 1th 2023',
        year: 2023,
        month: 'January',
        trip: 11304123,
        fleet: 'Kapal Api',
        tugboat_spob: 'Tugboat',
        ob_spob: 'OB',
        route: 'Balikpapan - Samarinda',
        estimateFuel: '440',
        actualFuel: '442',
        arrivedInLoadingDock: 'January 1st 2023 01.30',
        orderAssistTugboatEntry: 'January 1st 2023 01.31',
        startAnchorUp: 'January 1st 2023 01.31',
        finishAnchorUp: 'January 1st 2023 01.31',
        assistConnectEntry: 'January 1st 2023 01.31',
        docking: 'January 1st 2023 01.31',
        loadingMasterOnboard: 'January 1st 2023 01.31',
        startLoading: 'January 1st 2023 01.31',
        finishLoading: 'January 1st 2023 01.31',
        startSounding: 'January 1st 2023 01.31',
        finishSounding: 'January 1st 2023 01.31',
        orderAssistTugboatExit: 'January 1st 2023 01.31',
        assistConnectExit: 'January 1st 2023 01.31',
        castOff: 'January 1st 2023 01.31',
        fullAway_STS: 'January 1st 2023 01.31',
        arrivedAt_STS: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_STS: 'January 1st 2023 01.31',
        assistConnectEntry_STS: 'January 1st 2023 01.31',
        docking_STS: 'January 1st 2023 01.31',
        loadingMasterOnboard_STS: 'January 1st 2023 01.31',
        startLoading_STS: 'January 1st 2023 01.31',
        finishLoading_STS: 'January 1st 2023 01.31',
        startSounding_STS: 'January 1st 2023 01.31',
        finishSounding_STS: 'January 1st 2023 01.31',
        orderAssistTugboatExit_STS: 'January 1st 2023 01.31',
        assistConnectExit_STS: 'January 1st 2023 01.31',
        castOff_STS: 'January 1st 2023 01.31',
        fullAway_discharge: 'January 1st 2023 01.31',
        arrivedAt_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_discharge: 'January 1st 2023 01.31',
        startAnchorUp_discharge: 'January 1st 2023 01.31',
        finishAnchorUp_discharge: 'January 1st 2023 01.31',
        assistConnectEntry_discharge: 'January 1st 2023 01.31',
        docking_discharge: 'January 1st 2023 01.31',
        loadingMasterOnboard_discharge: 'January 1st 2023 01.31',
        startDischarge_discharge: 'January 1st 2023 01.31',
        finishDischarge_discharge: 'January 1st 2023 01.31',
        documentCargoOnboard_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatExit_discharge: 'January 1st 2023 01.31',
        assistConnectExit_discharge: 'January 1st 2023 01.31',
        castOff_discharge: 'January 1st 2023 01.31',
        arrivedInPulauAtas: 'January 1st 2023 01.31',
        fullAwayAfterDischarge: 'January 1st 2023 01.31',
        arrivedInLoadingDock_2: 'January 1st 2023 01.31',
    },
    {
        startDate: 'January 1th 2023',
        year: 2023,
        month: 'January',
        trip: 11304123,
        fleet: 'Kapal Api',
        tugboat_spob: 'Tugboat',
        ob_spob: 'OB',
        route: 'Balikpapan - Samarinda',
        estimateFuel: '440',
        actualFuel: '442',
        arrivedInLoadingDock: 'January 1st 2023 01.30',
        orderAssistTugboatEntry: 'January 1st 2023 01.31',
        startAnchorUp: 'January 1st 2023 01.31',
        finishAnchorUp: 'January 1st 2023 01.31',
        assistConnectEntry: 'January 1st 2023 01.31',
        docking: 'January 1st 2023 01.31',
        loadingMasterOnboard: 'January 1st 2023 01.31',
        startLoading: 'January 1st 2023 01.31',
        finishLoading: 'January 1st 2023 01.31',
        startSounding: 'January 1st 2023 01.31',
        finishSounding: 'January 1st 2023 01.31',
        orderAssistTugboatExit: 'January 1st 2023 01.31',
        assistConnectExit: 'January 1st 2023 01.31',
        castOff: 'January 1st 2023 01.31',
        fullAway_STS: 'January 1st 2023 01.31',
        arrivedAt_STS: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_STS: 'January 1st 2023 01.31',
        assistConnectEntry_STS: 'January 1st 2023 01.31',
        docking_STS: 'January 1st 2023 01.31',
        loadingMasterOnboard_STS: 'January 1st 2023 01.31',
        startLoading_STS: 'January 1st 2023 01.31',
        finishLoading_STS: 'January 1st 2023 01.31',
        startSounding_STS: 'January 1st 2023 01.31',
        finishSounding_STS: 'January 1st 2023 01.31',
        orderAssistTugboatExit_STS: 'January 1st 2023 01.31',
        assistConnectExit_STS: 'January 1st 2023 01.31',
        castOff_STS: 'January 1st 2023 01.31',
        fullAway_discharge: 'January 1st 2023 01.31',
        arrivedAt_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatEntry_discharge: 'January 1st 2023 01.31',
        startAnchorUp_discharge: 'January 1st 2023 01.31',
        finishAnchorUp_discharge: 'January 1st 2023 01.31',
        assistConnectEntry_discharge: 'January 1st 2023 01.31',
        docking_discharge: 'January 1st 2023 01.31',
        loadingMasterOnboard_discharge: 'January 1st 2023 01.31',
        startDischarge_discharge: 'January 1st 2023 01.31',
        finishDischarge_discharge: 'January 1st 2023 01.31',
        documentCargoOnboard_discharge: 'January 1st 2023 01.31',
        orderAssistTugboatExit_discharge: 'January 1st 2023 01.31',
        assistConnectExit_discharge: 'January 1st 2023 01.31',
        castOff_discharge: 'January 1st 2023 01.31',
        arrivedInPulauAtas: 'January 1st 2023 01.31',
        fullAwayAfterDischarge: 'January 1st 2023 01.31',
        arrivedInLoadingDock_2: 'January 1st 2023 01.31',
    }
]

export default function CycleTimeCOA() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-lightFont">Cycle Time COA</h1>
                    <p className="mt-2 text-sm text-lightFont">List data Cycle Time COA</p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" className="block rounded-md bg-tertiary px-3 py-2 text-center text-sm font-semibold text-lightFont shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300">Add Data</button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="mx-4 my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-lightFont sm:pl-0">
                                        Tanggal Mulai
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tahun
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Bulan
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Trip
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Fleet
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tugboat/SPOB
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        OB/SPOB
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Rute
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Estimate Fuel
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Actual Fuel
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tiba di Pelabuhan Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Order Kapal Pandu Masuk - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Anchor Up - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Anchor Up - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Assist Connect Masuk - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Sandar - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Loading Master Onboard - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Loading - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Loading - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Sounding - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Loading - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Order Kapal Pandu Keluar - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Assist Connect Keluar - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Cast Off - Jetty Loading
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Full Away - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tiba di - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Order Kapal Pandu Masuk - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Assist Connect Masuk - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Sandar - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Loading Master Onboard - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Loading - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Loading - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Sounding - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Sounding - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Order Kapal Pandu Keluar - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Assist Connect Keluar - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Cast Off - STS
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Full Away - Pelabuhan Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tiba di - Pelabuhan Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Order Kapal Pandu Masuk - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Anchor Up - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Anchor Up - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Assist Connect Masuk - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Sandar - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Loading Master Onboard - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Start Discharge - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Finish Discharge - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Document Cargo Onboard - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Order Kapal Pandu Keluar - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Assist Connect Keluar - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Cast Off - Jetty Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tiba di Pulau Atas
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Full Away After Discharge
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-lightFont">
                                        Tiba di Pelabuhan Loading
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}