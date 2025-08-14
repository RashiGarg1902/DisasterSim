import { create } from "zustand";
let houseCount = 1;
let buildingCount = 1;
const useMapStore = create((set, get) => ({
  pineTreesPos: [],
  DeciduousTreesPos: [],
  multipleTreesPos: [],
  wavesData: [],
  RentPropertyData: [],
  plainPos: [],
  houseData: [],
  buildingData: [],
  skip: [],
  mapGenerated: false,
  setMapGenerated: (status) => set({ mapGenerated: status }),
  addPineTreePos: (tree) =>
    set((state) => ({ pineTreesPos: [...state.pineTreesPos, tree] })),
  addDeciduousTreePos: (tree) =>
    set((state) => ({ DeciduousTreesPos: [...state.DeciduousTreesPos, tree] })),
  addMultipleTreesPos: (tree) =>
    set((state) => ({ multipleTreesPos: [...state.multipleTreesPos, tree] })),
  addWavesData: (wave) =>
    set((state) => ({ wavesData: [...state.wavesData, wave] })),
  addRentPropertyData: (property) =>
    set((state) => ({
      RentPropertyData: [...state.RentPropertyData, property],
    })),
  addPlainPos: (plain) =>
    set((state) => ({ plainPos: [...state.plainPos, plain] })),
  addHouseData: (object) =>
    set((state) => ({ houseData: [...state.houseData, object] })),
  addBuildingData: (object) =>
    set((state) => ({ buildingData: [...state.buildingData, object] })),
  updateHouse: (id, updates) =>
    set((state) => ({
      houseData: state.houseData.map((h) =>
        h.id === id ? { ...h, ...updates } : h
      ),
    })),

  updateBuilding: (id, updates) =>
    set((state) => ({
      buildingData: state.buildingData.map((b) =>
        b.id === id ? { ...b, ...updates } : b
      ),
    })),

  updateWaves: (id, updates) =>
    set((state) => ({
      wavesData: state.wavesData.map((w) =>
        w.id === id ? { ...w, ...updates } : w
      ),
    })),

  updateRentPropertyData: (id, updates) =>
    set((state) => ({
      RentPropertyData: state.RentPropertyData.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),

  removeWave: (id) =>
    set((state) => ({
      wavesData: state.wavesData.filter((wave) => wave.id !== id),
    })),

  removeRentProperty: (id) =>
    set((state) => ({
      RentPropertyData: state.RentPropertyData.filter(
        (property) => property.id !== id
      ),
    })),

  resetMap: () =>
    set({
      pineTreesPos: [],
      DeciduousTreesPos: [],
      multipleTreesPos: [],
      wavesData: [],
      RentPropertyData: [],
      plainPos: [],
      houseData: [],
      buildingData: [],
      mapGenerated: false,
      housesCount: 1,
      buildingCount: 1,
    }),
  generateMap: () => {
    const { resetMap } = get();

    resetMap();

    const pineTrees = [];
    const plains = [];
    const deciduousTrees = [];
    const trees = [];
    const waveObjects = [];
    const rentProperties = [];
    const buildingObjects = [];
    const houseObjects = [];
    const skipCell = [];
    for (let i = 1; i <= 20; i++) {
      for (let j = 1; j <= 20; j++) {
        if (i == 10 && j == 10) continue;
        const prob = Math.floor(Math.random() * 100 + 1);
        if (prob < 2) {
          houseObjects.push({
            id: crypto.randomUUID(),
            houseCount: houseCount++,
            x: i,
            y: j,
            type: "house",
            residents: Math.floor(Math.random() * 4) + 1,
            totalResidents: 4,
            food: Math.floor(Math.random() * 100),
            totalFood: 100,
            water: Math.floor(Math.random() * 500),
            totalWater: 500,
            kits: Math.floor(Math.random() * 200),
            totalKits: 200,
            fuel: Math.floor(Math.random() * 1000),
            totalFuel: 1000,
            volunteers: Math.floor(Math.random()),
            totalVolunteers: 1,
            onFire: false,
            fireMessage: null,
            extraClasses: "",
          });
        } else if (prob < 10) {
          pineTrees.push({ x: i, y: j });
        } else if (prob < 12) {
          buildingObjects.push({
            id: crypto.randomUUID(),
            buildingCount: buildingCount++,
            x: i,
            y: j,
            type: "building",
            residents: Math.floor(Math.random() * 16) + 1,
            totalResidents: 16,
            food: Math.floor(Math.random() * 500),
            totalFood: 500,
            water: Math.floor(Math.random() * 1000),
            totalWater: 1000,
            kits: Math.floor(Math.random() * 400),
            totalKits: 400,
            fuel: Math.floor(Math.random() * 3000),
            totalFuel: 3000,
            volunteers: Math.floor(Math.random() * 4),
            totalVolunteers: 4,
            onFire: false,
            fireMessage: null,
            extraClasses: "",
          });
        } else if (prob < 13) {
          waveObjects.push({
            id: crypto.randomUUID(),
            x: i,
            y: j,
            type: "water",
            waterReserves: Math.floor(Math.random() * 1500) + 1000,
            clicked: false,
            collectionInProgress: false,
            message: null,
            extraClasses: "",
          });
        } else if (prob < 14) {
          rentProperties.push({
            id: crypto.randomUUID(),
            x: i,
            y: j,
            cost: 10000,
            clicked: false,
            message: null,
            extraClasses: "",
          });
        } else if (prob < 20) {
          deciduousTrees.push({ x: i, y: j });
        } else if (prob < 25) {
          trees.push({ x: i, y: j });
        } else {
          plains.push({ x: i, y: j });
        }
      }
    }
    set({
      pineTreesPos: pineTrees,
      DeciduousTreesPos: deciduousTrees,
      multipleTreesPos: trees,
      wavesData: waveObjects,
      RentPropertyData: rentProperties,
      plainPos: plains,
      houseData: houseObjects,
      buildingData: buildingObjects,
      mapGenerated: true,
    });
  },
}));

export default useMapStore;
