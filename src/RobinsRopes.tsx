import { ShopTemplate } from "./ShopTemplate";
import { tribeRobinsRopes } from "./tribeRobinsRopes";
import robinsRopesBackground from "./Robins Ropes.png";
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
