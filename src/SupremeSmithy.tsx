import { ShopTemplate } from "./ShopTemplate";
import { tribeSupremeSmithy } from "./tribeSupremeSmithy";
import supremeSmithyBackground from "./Supreme Smithy.png";
import styles from "./SupremeSmithy.module.css";

export function SupremeSmithy({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeSupremeSmithy}
      backgroundImage={supremeSmithyBackground}
      styles={styles}
      onBack={onBack}
    />
  );
}
