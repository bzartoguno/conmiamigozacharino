import { ShopTemplate } from "./ShopTemplate";
import { tribeRunestoneRelay } from "./tribeRunestoneRelay";
import runestoneRelayBackground from "./Runestone Relay.png";

export function RunestoneRelay({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeRunestoneRelay}
      backgroundImage={runestoneRelayBackground}
      onBack={onBack}
    />
  );
}
