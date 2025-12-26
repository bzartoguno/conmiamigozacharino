import { ShopTemplate } from "./ShopTemplate";
import { tribeSupremeSmithy } from "./tribeSupremeSmithy";
import supremeSmithyBackground from "./Supreme Smithy.png";

export function SupremeSmithy({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeSupremeSmithy}
      backgroundImage={supremeSmithyBackground}
      onBack={onBack}
    />
  );
}
