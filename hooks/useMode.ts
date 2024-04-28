import { create } from "zustand";

interface useModeStatwe {
    mode: "light" | "dark";
    setMode: (value: "light" | "dark") => void;
}

export const useMode = create<useModeStatwe>((set) => ({
    mode: "light",
    setMode: (value: "light" | "dark") => set({ mode: value })
}));