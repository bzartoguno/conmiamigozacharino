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

  const [activeInsult, setActiveInsult] = useState<string>(() =>
    rotationPool.length > 0
      ? rotationPool[Math.floor(Math.random() * rotationPool.length)]
      : "",
  );

  useEffect(() => {
    if (rotationPool.length === 0) {
      setActiveInsult("");
      return;
    }

    const pickInsult = (current: string) => {
      if (rotationPool.length === 1) {
        return rotationPool[0];
      }

      const remaining = rotationPool.filter((insult) => insult !== current);
      return (
        remaining[Math.floor(Math.random() * remaining.length)] ??
        rotationPool[0]
      );
    };

    setActiveInsult((current) => pickInsult(current));

    if (rotationPool.length === 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveInsult((current) => pickInsult(current));
    }, rotationMs);

    return () => clearInterval(interval);
  }, [rotationPool, rotationMs]);

  const shouldRender = owner || rotationPool.length > 0;

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={className}>
      <div className={styles.insultBox} role="status" aria-live="polite">
        {owner && <span className={styles.ownerLabel}>{owner}:</span>}
        <span>{rotationPool.length > 0 ? activeInsult : ""}</span>
      </div>
    </div>
  );
}
