import { ShopTemplate } from "./ShopTemplate";
import { tribeOPapiesOracleReadings } from "./tribeOPapiesOracleReadings";
import oPapiesBackground from "./O Papies Oracle Readings.png";
import styles from "./OPapiesOracleReadings.module.css";

export function OPapiesOracleReadings({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeOPapiesOracleReadings}
      backgroundImage={oPapiesBackground}
      styles={styles}
      onBack={onBack}
    />
  );
}
