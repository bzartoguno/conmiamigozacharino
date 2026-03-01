import styles from "./HugInfo.module.css";
import { BackButton } from "./BackButton";
import hugBackground from "./Hug info.webp";

export function HugInfo({ onBack }: { onBack?: () => void }) {
  return (
    <div className={styles.app}>
      <BackButton
        onClick={onBack}
        style={{
          left: "1.5rem",
          right: "auto",
          backgroundColor: "#facc15",
        }}
      />
      <div className={styles.imageFrame}>
        <img
          src={hugBackground}
          alt="Hug information"
          className={styles.image}
        />
      </div>
    </div>
  );
}
