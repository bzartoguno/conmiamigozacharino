import styles from "./JazzPortablePotions.module.css";
import { BackButton } from "./BackButton";
import objectiveSurvive from "./Objective survive.webp";

export function JazzPortablePotions({ onBack }: { onBack?: () => void }) {
  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          left: "1.5rem",
          right: "auto",
          backgroundColor: "#16a34a",
          color: "#0b1f16",
          borderColor: "#0f5132",
        }}
      />
      <div className={styles.imageFrame}>
        <img
          src={objectiveSurvive}
          alt="Objective Survive information"
          className={styles.image}
        />
      </div>
    </div>
  );
}
