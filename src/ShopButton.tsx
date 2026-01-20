import type { CSSProperties, ReactNode } from "react";

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
  button: {
    fontSize: "1.5rem",
    padding: "1.25rem 1.5rem",
    borderRadius: "18px",
    border: "2px solid #ffffffff",
    boxShadow: "0 7px 12px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    fontFamily: "'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.85rem",
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
  },
  buttonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
  },
  buttonImage: {
    width: "160px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "14px",
    border: "2px solid rgba(255, 255, 255, 0.6)",
    backgroundColor: "rgba(255,255,255,0.85)",
    boxShadow: "4 4px 8px rgba(0,0,0,0.35)",
  },
  buttonLabel: {
    display: "block",
    fontWeight: 700,
    textAlign: "center",
  },
  buttonDescription: {
    margin: 0,
    fontSize: "0.95rem",
    lineHeight: 1.45,
    textAlign: "center",
    maxWidth: "720px",
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
      style={{
        ...buttonStyles.button,
        animationDelay: delay,
        backgroundColor,
        color,
      }}
    >
      {imageSrc ? (
        <div style={buttonStyles.buttonContent}>
          <img src={imageSrc} alt={`${label} logo`} style={buttonStyles.buttonImage} />
          <span style={buttonStyles.buttonLabel}>{label}</span>
          {description ? (
            typeof description === "string" ? (
              <p style={buttonStyles.buttonDescription}>{description}</p>
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
