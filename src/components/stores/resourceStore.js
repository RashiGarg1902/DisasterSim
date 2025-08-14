import { create } from "zustand";

const useResourceStore = create((set) => ({
  money: 30000,
  food: 1000,
  water: 5000,
  kits: 2000,
  fuel: 10000,
  volunteers: 50,
  victims: 4,
  morale: Math.floor(Math.random() * 30) + 70,
  day: 1,
  dayTime: 1000 * 60 * 6,
  message: "No problems reported",
  moraleIcon: "♥️",
  setMoraleIcon: (icon) =>
    set(() => ({
      moraleIcon: icon,
    })),
  setMessage: (message) => set(() => ({ message: message })),
  addMoney: (amount) => set((state) => ({ money: state.money + amount })),
  addFood: (amount) => set((state) => ({ food: state.food + amount })),
  addWater: (amount) => set((state) => ({ water: state.water + amount })),
  addKits: (amount) => set((state) => ({ kits: state.kits + amount })),
  addFuel: (amount) => set((state) => ({ fuel: state.fuel + amount })),
  addVolunteers: (amount) =>
    set((state) => ({ volunteers: state.volunteers + amount })),
  addVictims: (amount) => set((state) => ({ victims: state.victims + amount })),
  increaseMorale: (amount) =>
    set((state) => ({ morale: Math.min(state.morale + amount, 100) })),
  increaseDay: () => set((state) => ({ day: state.day + 1 })),
  removeMoney: (amount) =>
    set((state) => ({ money: Math.max(state.money - amount, 0) })),
  removeFood: (amount) => set((state) => ({ food: state.food - amount })),
  removeWater: (amount) => set((state) => ({ water: state.water - amount })),
  removeKits: (amount) => set((state) => ({ kits: state.kits - amount })),
  removeFuel: (amount) => set((state) => ({ fuel: state.fuel - amount })),
  removeVolunteers: (amount) =>
    set((state) => ({ volunteers: state.volunteers - amount })),
  addVictims: (amount) => set((state) => ({ victims: state.victims + amount })),
  removeVictims: (amount) =>
    set((state) => ({ victims: state.victims - amount })),
  decreaseMorale: (amount) =>
    set((state) => ({ morale: Math.max(state.morale - amount, 30) })),
  addResource: (resource, amount) =>
    set((state) => ({
      [resource]: state[resource] + amount,
    })),
  removeResource: (resource, amount) =>
    set((state) => ({
      [resource]: Math.max(state[resource] - amount, 0),
    })),
  resetResources: () =>
    set(() => ({
      money: 30000,
      food: 1000,
      water: 5000,
      kits: 2000,
      fuel: 10000,
      volunteers: 50,
      victims: 4,
      morale: Math.floor(Math.random() * 30) + 70,
      day: 1,
    })),
}));

export default useResourceStore;
