import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { SettlementType } from "./inventoryAvailability";

const SettlementContext = createContext<SettlementType | undefined>(undefined);

export function SettlementProvider({
  settlementType,
  children,
}: {
  settlementType?: SettlementType;
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
