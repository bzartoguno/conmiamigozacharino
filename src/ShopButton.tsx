import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";

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
    animation: "float 12s ease-in-out infinite",
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

let floatKeyframesInjected = false;

function ensureFloatKeyframes() {
  if (floatKeyframesInjected || typeof document === "undefined") {
    return;
  }

  const styleSheet = document.createElement("style");
  styleSheet.id = "floating-keyframes";
  styleSheet.innerHTML = `
  @keyframes float {
    0% { transform: translate(0px, 0px); }
    25% { transform: translate(4px, -4px); }
    50% { transform: translate(0px, -8px); }
    75% { transform: translate(-4px, -4px); }
    100% { transform: translate(0px, 0px); }
  }`;
  document.head.appendChild(styleSheet);
  floatKeyframesInjected = true;
}

export function ShopButton({
  label,
  onClick,
  delay = "0s",
  backgroundColor,
  color = "#000",
  imageSrc,
  description,
}: ShopButtonProps) {
  useEffect(() => {
    ensureFloatKeyframes();
  }, []);

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
