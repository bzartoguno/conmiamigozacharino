import meanderBackground from "./SandboxMeander.webp";
import monsterImage from "./Monster.webp";
import mountsImage from "./Mounts.webp";
import iconicDragonicImage from "./Iconic Dragonic.png";
import pawsClawsMawsImage from "./Paws, Claws, & Maws.png";
import valhallaMartImage from "./Valhalla Mart.png";
import jewelryGuildImage from "./Jewelry Guild.png";
import applegarthImage from "./Applegarth.webp";
import archivesGuildImage from "./Archives Guild.png";
import dungeonCrawlerGuildImage from "./Dungeon Crawler's Guild.png";
import navigationGuildImage from "./NavigationGuild-ezgif.com-webp-to-png-converter.png";
import { BackButton } from "./BackButton";
import styles from "./MeanderMichael.module.css";
import { ShopButton } from "./ShopButton";
import { getShopButtonStyle } from "./shopButtonStyles";

type MeanderShop = {
  key: string;
  label: string;
  image: string;
  onClick: () => void;
};

export function MeanderMichael({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (key: string) => void;
}) {
  const shops: MeanderShop[] = [
    {
      key: "make-a-monster",
      label: "Make a Monster",
      image: monsterImage,
      onClick: () => onNavigate("MonsterMaker"),
    },
    {
      key: "michaels-mount",
      label: "Michael's Mount",
      image: mountsImage,
      onClick: () => onNavigate("MichaelsMount"),
    },
    {
      key: "iconic-dragonic",
      label: "Iconic Dragonic",
      image: iconicDragonicImage,
      onClick: () => onNavigate("IconicDragonic"),
    },
    {
      key: "paws-claws-maws",
      label: "Paws, Claws, & Maws",
      image: pawsClawsMawsImage,
      onClick: () => onNavigate("PawsClawsMaws"),
    },
    {
      key: "valhalla-mart",
      label: "Valhalla Mart",
      image: valhallaMartImage,
      onClick: () => onNavigate("ValhallaMart"),
    },
    {
      key: "jewelry-guild",
      label: "Jewelry Guild",
      image: jewelryGuildImage,
      onClick: () => onNavigate("JewelryGuild"),
    },
    {
      key: "applegarth-guild",
      label: "Applegarth Guild",
      image: applegarthImage,
      onClick: () => onNavigate("ApplegarthGuild"),
    },
    {
      key: "archives-guild",
      label: "Archives Guild",
      image: archivesGuildImage,
      onClick: () => onNavigate("ArchivesGuild"),
    },
    {
      key: "dungeon-crawler-guild",
      label: "Dungeon Crawler Guild",
      image: dungeonCrawlerGuildImage,
      onClick: () => onNavigate("DungeonCrawlerGuild"),
    },
    {
      key: "navigation-guild",
      label: "Navigation Guild",
      image: navigationGuildImage,
      onClick: () => onNavigate("NavigationGuild"),
    },
  ];

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${meanderBackground})` }}
    >
      <BackButton onClick={onBack} />

      <div className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Sandbox</p>
          <h1 className={styles.title}>Welcome to Meander</h1>
          <p className={styles.subtitle}>
            A roving cowboy haven where the caravan never stops and every shop keeps
            the wagons rolling.
          </p>
        </div>

        <div className={styles.buttonGrid}>
          {shops.map((shop) => (
            <ShopButton
              key={shop.key}
              label={shop.label}
              imageSrc={shop.image}
              onClick={shop.onClick}
              {...getShopButtonStyle(shop.label)}
            />
          ))}
        </div>

        <p className={styles.footer}>This town was made by Michael</p>
      </div>
    </div>
  );
}
