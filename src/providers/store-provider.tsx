"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";
import { RootStore } from "@/stores/root-store";

const StoreContext = createContext<RootStore | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => new RootStore());

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

export function useRootStore() {
  const store = useContext(StoreContext);

  if (store === null) {
    throw new Error("useRootStore must be used within StoreProvider");
  }

  return store;
}
