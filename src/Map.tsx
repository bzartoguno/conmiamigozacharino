import { Goblins } from "./Goblins";
import { Auctions } from "./Auction";
import { Blacks } from "./Black";
import { useState } from "react";

// Back button rendering now lives in src/BackButton.tsx so we don't accidentally
// shadow the shared component inside this module.

export function Map() {
  const [navigatedTo, setNavigatedTo] = useState<string>("");

  switch (navigatedTo) {
    case "goblins":
      return <Goblins onBack={() => setNavigatedTo("")} />;
    case "Auction":
      return <Auctions onBack={() => setNavigatedTo("")} />;
    case "Black":
      return <Blacks onBack={() => setNavigatedTo("")} />;
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
}: {
  label: string;
  onClick: () => void;
  delay: string;
  backgroundColor: string;
  color?: string;
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
      {label}
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
    borderRadius: "23px",               // Smooth rounded shape
    border: "2px solid #333",           // Add subtle outline
    boxShadow: "0 7px 12px rgba(0, 0, 0, 0.5)", // Add soft drop shadow
    cursor: "pointer",
    animation: "float 12s ease-in-out infinite", // Slower float
    transition: "transform 0.3s ease",
    fontFamily: "'Times New Roman', serif",
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
