import type { CSSProperties, ReactNode } from "react";

import styles from "./ShopButton.module.css";

export type ShopButtonProps = {
  label: string;
  onClick: () => void;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
  description?: ReactNode;
  delay?: string;
};

const buttonStyles: Record<string, CSSProperties> = {
  buttonImage: {
    width: "160px",
    height: "auto",
  },
};

export function ShopButton({
  label,
  onClick,
  delay = "0s",
  backgroundColor,
  color = "#000",
  imageSrc,
  description,
}: ShopButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{
        animationDelay: delay,
        backgroundColor,
        color,
      }}
    >
      {imageSrc ? (
        <div className={styles.buttonContent}>
          <img
            src={imageSrc}
            alt={`${label} logo`}
            className={styles.buttonImage}
            style={buttonStyles.buttonImage}
          />
          <span className={styles.buttonLabel}>{label}</span>
          {description ? (
            typeof description === "string" ? (
              <p className={styles.buttonDescription}>{description}</p>
            ) : (
              description
            )
          ) : null}
        </div>
      ) : (
        label
      )}
    </button>
  );
}
