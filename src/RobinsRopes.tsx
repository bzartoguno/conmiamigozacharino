import { ShopTemplate } from "./ShopTemplate";
import { tribeRobinsRopes } from "./New Inventory/tribeRobinsRopes";
import robinsRopesBackground from "./images/Robins Ropes.png";
import robinsRopesStyles from "./RobinsRopes.module.css";

export function RobinsRopes({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeRobinsRopes}
      backgroundImage={robinsRopesBackground}
      styles={robinsRopesStyles}
      onBack={onBack}
    />
  );
}
