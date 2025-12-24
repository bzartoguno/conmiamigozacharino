import { Goblins } from "./Goblins";
import { Auctions } from "./Auction";
import { Blacks } from "./Black";
import { BookBombs } from "./BookBombs";
import { bookBombDataUrl } from "./bookBombImage";
import { useState } from "react";

export function Map() {
  const [navigatedTo, setNavigatedTo] = useState<string>("");

  switch (navigatedTo) {
    case "goblins":

      return <Goblins onBack={() => setNavigatedTo("")} />;
    case "Auction":
      return <Auctions onBack={() => setNavigatedTo("")} />;
    case "Black":
      return <Blacks onBack={() => setNavigatedTo("")} />;
    case "BookBombs":
      return <BookBombs onBack={() => setNavigatedTo("")} />;
    default:
      return (
        <div style={styles.wrapper}>
          <h1 style={styles.title}>Where would you like to go?</h1>
          <div style={styles.buttonContainer}>
            <FloatingButton
              label="Goblin Stuff"
              onClick={() => setNavigatedTo("goblins")}
              delay="0s"
              backgroundColor="rgba(168, 255, 151, 0.712)"
            />
            <FloatingButton
              label="Auction House"
              onClick={() => setNavigatedTo("Auction")}
              delay="3s"
              backgroundColor="rgba(138, 253, 244, 0.712)"
            />
            <FloatingButton
              label="Black Market"
              onClick={() => setNavigatedTo("Black")}
              delay="9s"
              backgroundColor="rgba(0, 0, 0, 0.712)"
              color="white"
            />
            <FloatingButton
              label="Book Bombs"
              onClick={() => setNavigatedTo("BookBombs")}
              delay="12s"
              backgroundColor="rgba(255, 226, 168, 0.9)"
              imageSrc={bookBombDataUrl}
            />
          </div>
        </div>
      );
  }
}

function FloatingButton({
  label,
  onClick,
  delay,
  backgroundColor,
  color = "#000",
  imageSrc,
}: {
  label: string;
  onClick: () => void;
  delay: string;
  backgroundColor: string;
  color?: string;
  imageSrc?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...styles.button,
        animationDelay: delay,
        backgroundColor,
        color,
      }}
    >
      {imageSrc ? (
        <div style={styles.buttonContent}>
          <img src={imageSrc} alt={`${label} logo`} style={styles.buttonImage} />
          <span style={styles.buttonLabel}>{label}</span>
        </div>
      ) : (
        label
      )}
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f1e0c9",
    gap: "2rem",
    fontFamily: "'Times New Roman', serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "1rem",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },
  button: {
    fontSize: "1.5rem",
    padding: "1rem 3rem",
    borderRadius: "23px",
    border: "2px solid #333",
    boxShadow: "0 7px 12px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    animation: "float 12s ease-in-out infinite",
    transition: "transform 0.3s ease",
    fontFamily: "'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
  },
  backButton: {
    position: "fixed",
    top: "1.5rem",
    left: "1.5rem",
    zIndex: 1000,
    padding: "0.6rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "999px",
    border: "2px solid #333",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    fontFamily: "'Times New Roman', serif",
  },
  buttonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.35rem",
  },
  buttonImage: {
    width: "140px",
    height: "140px",
    objectFit: "contain",
    borderRadius: "12px",
    border: "2px solid rgba(0,0,0,0.6)",
    backgroundColor: "rgba(255,255,255,0.85)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.35)",
  },
  buttonLabel: {
    display: "block",
  },
};

// Inject slow floating animation into global styles (guarded for SSR)
if (typeof document !== "undefined" && !document.getElementById("floating-keyframes")) {
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
}
