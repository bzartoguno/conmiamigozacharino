import { ShopTemplate } from "./ShopTemplate";
import { tribeWillsWeapons } from "./tribeWillsWeapons";
import willsWeaponsBackground from "./Wills Weapons.png";

export function WillsWeapons({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeWillsWeapons}
      backgroundImage={willsWeaponsBackground}
      onBack={onBack}
    />
  );
}
