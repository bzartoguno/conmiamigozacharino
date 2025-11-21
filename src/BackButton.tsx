import React from "react";

export function BackButton({ onClick }: { onClick?: () => void }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <button type="button" onClick={handleClick} style={styles.backButton}>
      ← Return to the map
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  backButton: {

    alignSelf: "flex-start",
    marginBottom: "1rem",

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
};
