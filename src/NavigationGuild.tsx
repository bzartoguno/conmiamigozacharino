import { ShopTemplate } from "./ShopTemplate";
import styles from "./NavigationGuild.module.css";
import navigationGuildBackground from "./Images/NavigationGuild-ezgif.com-webp-to-png-converter.png";
import { tribeNavigationGuild } from "./tribeNavigationGuild";

export function NavigationGuild({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeNavigationGuild}
      backgroundImage={navigationGuildBackground}
      onBack={onBack}
      styles={styles}
    />
  );
}
