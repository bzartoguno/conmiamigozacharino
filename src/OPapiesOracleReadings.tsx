import { ShopTemplate } from "./ShopTemplate";
import { tribeOPapiesOracleReadings } from "./tribeOPapiesOracleReadings";
import oPapiesBackground from "./O Papies Oracle Readings.png";

export function OPapiesOracleReadings({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeOPapiesOracleReadings}
      backgroundImage={oPapiesBackground}
      onBack={onBack}
    />
  );
}
