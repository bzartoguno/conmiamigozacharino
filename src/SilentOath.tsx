import { ShopTemplate } from "./ShopTemplate";
import { tribeSilentOath } from "./tribeSilentOath";
import silentOathBackground from "./Silent Oath.png";

export function SilentOath({ onBack }: { onBack?: () => void }) {
  return (
    <ShopTemplate
      tribe={tribeSilentOath}
      backgroundImage={silentOathBackground}
      onBack={onBack}
    />
  );
}
