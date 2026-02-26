import { GeneratedSlime } from "./jellBellGenerator";
import styles from "./JellBell.module.css";
import {
  accessoryLayerByType,
  bodyLayerByType,
  flavorColorByType,
  temperamentLayerByType,
} from "./slimeVisuals";

export function SlimeStatBlock({ slime }: { slime: GeneratedSlime }) {
  const bodyLayer = bodyLayerByType[slime.bodyType.label];
  const temperamentLayer = temperamentLayerByType[slime.temperament.label];
  const accessoryLayer = accessoryLayerByType[slime.accessory.label];
  const flavorColor = flavorColorByType[slime.flavor.label] ?? "rgba(148, 163, 184, 0.4)";

  return (
    <article className={styles.statBlock}>
      <h3 className={styles.statTitle}>{slime.name}</h3>
      <p className={styles.statSubline}>
        {slime.size.label} Ooze (Companion), {slime.bodyType.label} body
      </p>
      <div className={styles.slimeArt} aria-label={`${slime.name} layered art preview`}>
        {bodyLayer && <img className={styles.slimeLayer} src={bodyLayer} alt={`${slime.bodyType.label} body`} />}
        {temperamentLayer && (
          <img className={styles.slimeLayer} src={temperamentLayer} alt={`${slime.temperament.label} temperament`} />
        )}
        <div className={styles.flavorOverlay} style={{ backgroundColor: flavorColor }} aria-hidden="true" />
        {accessoryLayer && (
          <img className={styles.slimeLayer} src={accessoryLayer} alt={`${slime.accessory.label} accessory`} />
        )}
      </div>
      <div className={styles.statsGrid}>
        <p>
          <strong>Armor Class:</strong> {slime.size.armorClass}
        </p>
        <p>
          <strong>Hit Points:</strong> {slime.maxHp}
        </p>
        <p>
          <strong>Speed:</strong> {slime.bodyType.speed}
        </p>
        <p>
          <strong>Element:</strong> {slime.flavor.label}
        </p>
        <p>
          <strong>Resistance:</strong> {slime.flavor.resistance}
        </p>
        <p>
          <strong>Temperament:</strong> {slime.temperament.label} (+1 {slime.temperament.statBonus})
        </p>
        <p className={styles.fullRow}>
          <strong>Accessory:</strong> {slime.accessory.label} — {slime.accessory.effect}
        </p>
      </div>
    </article>
  );
}
