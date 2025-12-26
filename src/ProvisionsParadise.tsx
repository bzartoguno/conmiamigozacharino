import { ShopTemplate } from "./ShopTemplate";
import provisionsParadiseBackground from "./Provisions Paradise.png";
import styles from "./ProvisionsParadise.module.css";
import { tribeProvisionsParadise } from "./tribeProvisionsParadise";

export function ProvisionsParadise({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeProvisionsParadise}
      backgroundImage={provisionsParadiseBackground}
      onBack={onBack}
      styles={styles}
    />
  );
}
