import { ShopTemplate } from "./ShopTemplate";
import { tribeWillsWeapons } from "./New Inventory/tribeWillsWeapons";
import willsWeaponsBackground from "./images/Wills Weapons.png";
import styles from "./WillsWeapons.module.css";

export function WillsWeapons({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeWillsWeapons}
      backgroundImage={willsWeaponsBackground}
      styles={styles}
      onBack={onBack}
    />
  );
}
