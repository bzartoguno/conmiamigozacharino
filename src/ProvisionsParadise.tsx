import { BackButton } from "./BackButton";

export function ProvisionsParadise({ onBack }: { onBack?: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 30% 20%, #ffe6b3, #f3d6a0 45%, #d8b179)",
        color: "#2f1b0c",
        textAlign: "center",
        padding: "2rem",
        gap: "1.5rem",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      <BackButton onClick={onBack} />
      <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Provision&apos;s Paradise</h1>
      <p style={{ maxWidth: "46ch", fontSize: "1.25rem", lineHeight: 1.6 }}>
        The shelves are being restocked with rare essentials, so the doors are briefly closed.
        Check back soon to see what the merchants have in store.
      </p>
      <p style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
        (In the meantime, maybe pick up a pie or two.)
      </p>
    </div>
  );
}
