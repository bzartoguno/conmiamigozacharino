import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { TownTag } from "./inventoryAvailability";

const SettlementContext = createContext<TownTag | undefined>(undefined);

export function SettlementProvider({
  settlementType,
  children,
}: {
  settlementType?: TownTag;
  children: ReactNode;
}) {
  return (
    <SettlementContext.Provider value={settlementType}>
      {children}
    </SettlementContext.Provider>
  );
}

export function useSettlementType() {
  return useContext(SettlementContext);
}
