import { useEffect, useMemo, useState } from "react";
import styles from "./InsultBox.module.css";

interface InsultBoxProps {
  owner?: string;
  insults: string[];
  className?: string;
  rotationMs?: number;
}

export function InsultBox({
  owner,
  insults,
  className,
  rotationMs = 5000,
}: InsultBoxProps) {
  const insultOptions = useMemo(
    () => insults.map((insult) => insult?.trim() ?? ""),
    [insults],
  );

  const rotationPool = useMemo(() => {
    const meaningfulInsults = insultOptions.filter(Boolean);
    return meaningfulInsults.length > 0 ? meaningfulInsults : insultOptions;
  }, [insultOptions]);

  const [activeInsult, setActiveInsult] = useState<string>("");

  useEffect(() => {
    if (rotationPool.length === 0) {
      setActiveInsult("");
      return;
    }

    setActiveInsult(
      rotationPool[Math.floor(Math.random() * rotationPool.length)] ?? "",
    );
  }, [rotationPool]);

  const shouldRender = owner || rotationPool.length > 0;
  const activeWords = useMemo(
    () => activeInsult.split(/\s+/).filter(Boolean),
    [activeInsult],
  );
  const wordDurationMs =
    activeWords.length > 0
      ? Math.max(350, Math.floor(rotationMs / activeWords.length))
      : rotationMs;

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={className}>
      <div className={styles.insultBox} role="status" aria-live="polite">
        {owner && <span className={styles.ownerLabel}>{owner}:</span>}
        <span className={styles.insultText} aria-live="polite">
          {activeWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={styles.word}
              style={{
                ["--word-delay" as string]: `${
                  activeWords.length > 1
                    ? Math.floor((rotationMs / activeWords.length) * index)
                    : 0
                }ms`,
                ["--word-duration" as string]: `${wordDurationMs}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
