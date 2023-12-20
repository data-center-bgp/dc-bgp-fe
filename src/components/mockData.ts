export interface MockData {
    id: number;
    startDate: string;
    year: number;
    month: string;
    trip: number;
    fleet: string;
    tugboat_spob: string;
    ob_spob: string;
    route: string;
    estimateFuel: string;
    actualFuel: string;
    arrivedInLoadingDock: string;
    orderAssistTugboatEntry: string;
    startAnchorUp: string;
    finishAnchorUp: string;
    assistConnectEntry: string;
    docking: string;
    loadingMasterOnboard: string;
    startLoading: string;
    finishLoading: string;
    startSounding: string;
    finishSounding: string;
    orderAssistTugboatExit: string;
    assistConnectExit: string;
    castOff: string;
    fullAway_STS: string;
    arrivedAt_STS: string;
    orderAssistTugboatEntry_STS: string;
    assistConnectEntry_STS: string;
    docking_STS: string;
    loadingMasterOnboard_STS: string;
    startLoading_STS: string;
    finishLoading_STS: string;
    startSounding_STS: string;
    finishSounding_STS: string;
    orderAssistTugboatExit_STS: string;
    assistConnectExit_STS: string;
    castOff_STS: string;
    fullAway_discharge: string;
    arrivedAt_discharge: string;
    orderAssistTugboatEntry_discharge: string;
    startAnchorUp_discharge: string;
    finishAnchorUp_discharge: string;
    assistConnectEntry_discharge: string;
    docking_discharge: string;
    loadingMasterOnboard_discharge: string;
    startDischarge_discharge: string;
    finishDischarge_discharge: string;
    documentCargoOnboard_discharge: string;
    orderAssistTugboatExit_discharge: string;
    assistConnectExit_discharge: string;
    castOff_discharge: string;
    arrivedInPulauAtas: string;
    fullAwayAfterDischarge: string;
    arrivedInLoadingDock_2: string;
    remarks: {
      id: number;
      route: string;
      type: string;
      notes: string;
    };
  }

export const mockData: MockData[] = [
    {
        id: 1,
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
        remarks: {
            id: 1,
            route: 'Balikpapan - Samarinda',
            type: 'Internal',
            notes: 'Perjalanannya enak bro',
        }
    },
    {
        id: 2,
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
        remarks: {
            id: 2,
            route: 'Balikpapan - Samarinda',
            type: 'External',
            notes: 'Perjalanan aman, tidak ada kendala'
        }
    },
    {
        id: 3,
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
        remarks: {
            id: 3,
            route: 'Balikpapan - Samarinda',
            type: 'External',
            notes: 'Ada kendala dalam pengantaran minyak'
        }
    },
    {
        id: 4,
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
        remarks: {
            id: 4,
            route: 'Balikpapan - Samarinda',
            type: 'Internal',
            notes: 'Ada tumpah minyak 30 liter'
        }
    },
    {
        id: 5,
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
        remarks: {
            id: 5,
            route: 'Balikpapan - Samarinda',
            type: 'Internal',
            notes: 'Test 1',
        }
    },
    {
        id: 6,
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
        remarks: {
            id: 6,
            route: 'Balikpapan - Samarinda',
            type: 'Internal',
            notes: 'Perjalanannya enak bro',
        }
    }
]