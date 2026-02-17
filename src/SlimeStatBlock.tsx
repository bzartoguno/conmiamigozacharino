import { GeneratedSlime } from "./jellBellGenerator";
import styles from "./JellBell.module.css";

export function SlimeStatBlock({ slime }: { slime: GeneratedSlime }) {
  return (
    <article className={styles.statBlock}>
      <h3 className={styles.statTitle}>{slime.name}</h3>
      <p className={styles.statSubline}>
        {slime.size.label} Ooze (Companion), {slime.bodyType.label} body
      </p>
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
