import { ShopTemplate } from "./ShopTemplate";
import { tribeRobinsRopes } from "./tribeRobinsRopes";
import robinsRopesBackground from "./Robins Ropes.png";

export function RobinsRopes({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeRobinsRopes}
      backgroundImage={robinsRopesBackground}
      onBack={onBack}
    />
  );
}
