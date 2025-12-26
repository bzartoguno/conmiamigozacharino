import { ShopTemplate } from "./ShopTemplate";
import { tribeSilentOath } from "./tribeSilentOath";
import silentOathBackground from "./Silent Oath.png";
import styles from "./SilentOath.module.css";

export function SilentOath({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeSilentOath}
      backgroundImage={silentOathBackground}
      onBack={onBack}
      styles={styles}
    />
  );
}
