import { create } from 'zustand'
const counterStore = create((set) => ({
    count: 10,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}))

export default counterStore
