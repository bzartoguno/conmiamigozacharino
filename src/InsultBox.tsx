import { useEffect, useMemo, useState } from "react";
import styles from "./InsultBox.module.css";

export interface InsultBoxProps {
  owner?: string;
  insults: string[];
  className?: string;
  rotationMs?: number;
  shopName?: string;
}

const insultFontByShop: Record<string, string> = {
  "Applegarth Guild": '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  "Archives Guild": '"Garamond", "Baskerville", serif',
  "Book Bombs": '"Courier New", Courier, monospace',
  "Bullets, Buffs, & Beyond":
    '"Lucida Console", Monaco, "Courier New", monospace',
  "Changing Church": '"Copperplate", "Copperplate Gothic Light", serif',
  "Necromancy Insurance Company": '"Papyrus", "Segoe Print", fantasy',
  "O-Papies Oracle Readings": '"Georgia", "Times New Roman", serif',
  "Robin's Ropes": '"Trebuchet MS", "Lucida Sans Unicode", sans-serif',
  "Runestone Relay":
    '"Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',
  "Silent Oath": '"Brush Script MT", "Segoe Script", cursive',
  "Supreme Smithy": '"Cinzel", "Trajan Pro", serif',
  "Will's Weapons":
    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
  "Auntie Patty's Pies": '"Comic Sans MS", "Comic Sans", cursive',
  "Comedy Gold": '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  "Dungeon Crawler Guild": '"Gill Sans", "Gill Sans MT", Calibri, sans-serif',
  "Find a Friend": '"Tahoma", Geneva, sans-serif',
  "Navigation Guild": '"Optima", "Segoe UI", sans-serif',
  "Pearl's Potions": '"Didot", "Bodoni MT", serif',
  "Provision's Paradise": '"Rockwell", "Courier Bold", serif',
  "The Piggy Bank, no hammers inside.":
    '"Bookman Old Style", "Bookman", serif',
  "Ye Old Donkey": '"Candara", "Calibri", sans-serif',
  "Hug Cartel": '"American Typewriter", "Courier", serif',
  "Iconic Dragonic": '"Perpetua", "Times New Roman", serif',
  "Jell Bell": '"Chalkduster", "Comic Sans MS", fantasy',
  "Make a Monster": '"Futura", "Trebuchet MS", Arial, sans-serif',
  "Michael's Mount": '"Hoefler Text", "Palatino Linotype", serif',
  "Paws, Claws, & Maws": '"Lucida Handwriting", "Brush Script MT", cursive',
  "Valhalla Mart": '"Consolas", "Lucida Console", monospace',
  "Blossom Hotel": '"Verdana", Geneva, sans-serif',
  "Evan's Enchanting Emporium": '"Calibri", "Segoe UI", sans-serif',
  "Fairies of Flora": '"Cambria", "Georgia", serif',
  "Golem Workshop": '"Century Gothic", "Futura", sans-serif',
  "Jazz's Portable Potions": '"Monaco", "Consolas", monospace',
  "Jewelry Guild": '"Goudy Old Style", "Garamond", serif',
  "Labyrinthine Library": '"Lucida Sans", "Lucida Grande", sans-serif',
  "N.M.E.": '"Times New Roman", Times, serif',
  "Sleuth University": '"Arial Black", "Arial Bold", sans-serif',
  "Fizzy Tales": '"Helvetica Neue", Helvetica, Arial, sans-serif',
  "Ye Old Home Depot": '"Courier Prime", "Courier New", monospace',
};

export function InsultBox({
  owner,
  insults,
  className,
  rotationMs = 5000,
  shopName,
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

  const resolvedFontFamily = shopName
    ? insultFontByShop[shopName]
    : undefined;
  const insultStyle = resolvedFontFamily
    ? ({
        ["--insult-font" as string]: resolvedFontFamily,
      } as const)
    : undefined;

  return (
    <div className={className}>
      <div
        className={styles.insultBox}
        role="status"
        aria-live="polite"
        style={insultStyle}
      >
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
