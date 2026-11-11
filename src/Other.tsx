import { useEffect, useRef, useState } from "react";
import { BackButton } from "./BackButton";
import { tarotCards } from "./tarotCards";
import styles from "./Other.module.css";
import krumpImage from "./images/Krump.webp";
import donkeyImage from "./images/donkey.gif";
import tarotCatImage from "./images/TAROTCAT.jpg";
import jpegImage from "./images/DoIKnowWhatAJpegIs.jpeg";

const cahUrl: string = require("./images/Cards-png/cah_family_cards.txt");
type Card = { id: string; text: string; image?: string };
type Mode = "normal" | "advantage" | "disadvantage";

export function rollDice(sides: number, count: number, modifier: number, mode: Mode) {
  const sets = Array.from({ length: mode === "normal" ? 1 : 2 }, () =>
    Array.from({ length: count }, () => Math.floor(Math.random() * sides) + 1));
  const totals = sets.map((set) => set.reduce((sum, value) => sum + value, 0) + modifier);
  const chosen = mode === "advantage" ? totals.indexOf(Math.max(...totals)) : mode === "disadvantage" ? totals.indexOf(Math.min(...totals)) : 0;
  return { sets, totals, chosen };
}

type IconKind = "horse" | "dice" | "tarot" | "cards";
const activityImages: Record<IconKind, string> = { dice: krumpImage, horse: donkeyImage, tarot: tarotCatImage, cards: jpegImage };

function DieShape({ sides, value = 100 }: { sides: number; value?: number }) {
  const paths: Record<number, string> = {
    4: "M32 6 59 55H5Z M32 6v34 M5 55l27-15 27 15",
    6: "M32 5 57 19v27L32 59 7 46V19Z M7 19l25 14 25-14 M32 33v26",
    8: "M32 4 58 32 32 60 6 32Z M6 32l26-10 26 10 M32 4v18 M32 22v38",
    10: "M32 4 56 23 59 40 32 60 5 40 8 23Z M32 4 20 30 32 60 44 30Z M8 23l12 7-15 10 M56 23l-12 7 15 10",
    12: "M32 4 53 16 60 39 44 58H20L4 39 11 16Z M32 19l16 12-6 18H22l-6-18Z M32 4v15 M53 16l-5 15 M60 39l-18 10 M44 58l-2-9 M20 58l2-9 M4 39l12-8 M11 16l21 3",
    20: "M32 4 57 18v28L32 60 7 46V18Z M7 18h50L32 48Z M32 4 7 18l0 28 25 2 25-2 M32 4l25 14 M7 46l25 14 25-14 M32 48v12",
  };
  return <svg viewBox={sides === 100 ? "0 0 108 64" : "0 0 64 64"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={paths[sides === 100 ? 10 : sides]} fill="rgba(20, 15, 45, .8)" />
    {sides === 100 && <><path d={paths[10]} transform="translate(45 0)" fill="rgba(20, 15, 45, .8)" /><text x="32" y="41" fill="currentColor" stroke="none" fontSize="12" textAnchor="middle">{String(Math.floor((value % 100) / 10) * 10).padStart(2, "0")}</text><text x="77" y="41" fill="currentColor" stroke="none" fontSize="12" textAnchor="middle">{value % 10}</text></>}
  </svg>;
}

const activities: { label: string; route: string; icon: IconKind; detail: string; tag: string }[] = [
  { label: "Horse racing", route: "ReadySetBet", icon: "horse", detail: "Pick your favorite. Follow the race to the finish line.", tag: "Off to the races" },
  { label: "Dice rolling", route: "DiceRolling", icon: "dice", detail: "CALEB PLEASE USE REAL DICE", tag: "And roll'n roll'n roll'n" },
  { label: "Tarot, draw", route: "TarotDraw", icon: "tarot", detail: "Don't worry I removed the NSFW cards", tag: "A little mystery" },
  { label: "Cards Against Humanity: Family Edition, draw", route: "CahFamilyDraw", icon: "cards", detail: "GREAT PAIN AAAAAAAHHHH", tag: "WHY WHY AM I CODING THIS!!!!" },
];

export function Other({ onBack, onNavigate }: { onBack: () => void; onNavigate: (route: string) => void }) {
  return <main className={styles.page}><BackButton onClick={onBack} /><div className={styles.content}>
    <header className={styles.header}><p className={styles.eyebrow}>Slep tim</p><h1>Other</h1><p>Ummm cheesecake, I hope I remember to change this later</p></header>
    <div className={styles.grid}>{activities.map(({ label, route, icon, detail, tag }) =>
      <button className={`${styles.activity} ${styles[icon]}`} key={route} onClick={() => onNavigate(route)} aria-label={label} style={{ backgroundImage: `linear-gradient(180deg, rgba(8, 12, 25, .35), rgba(8, 12, 25, .94)), url("${activityImages[icon]}")` }}>
        <span className={styles.activityTop}><span className={styles.icon}><img src={activityImages[icon]} alt="" /></span><span className={styles.arrow} aria-hidden="true">↗</span></span>
        <span className={styles.eyebrow}>{tag}</span><span className={styles.activityTitle}>{label}</span><span className={styles.description}>{detail}</span>
      </button>)}</div></div></main>;
}

export function DiceRolling({ onBack }: { onBack: () => void }) {
  const [sides, setSides] = useState(20);
  const [count, setCount] = useState("1");
  const [modifier, setModifier] = useState("0");
  const [mode, setMode] = useState<Mode>("normal");
  const [result, setResult] = useState<ReturnType<typeof rollDice> & { notation: string }>();
  const [rolling, setRolling] = useState(false);
  const [preview, setPreview] = useState(20);
  const busy = useRef(false);
  const timers = useRef<{ interval?: number; timeout?: number }>({});
  useEffect(() => () => { window.clearInterval(timers.current.interval); window.clearTimeout(timers.current.timeout); }, []);
  const valid = Number.isInteger(Number(count)) && Number(count) >= 1 && Number(count) <= 100 && modifier.trim() !== "" && Number.isSafeInteger(Number(modifier));
  const notation = `${count || "1"}d${sides} ${Number(modifier) >= 0 ? "+" : "−"} ${Math.abs(Number(modifier))}`;
  const roll = () => {
    if (!valid || busy.current) return;
    busy.current = true;
    const next = { ...rollDice(sides, Number(count), Number(modifier), mode), notation: `${notation} (${mode})` };
    setRolling(true);
    setResult(undefined);
    setPreview(sides);
    timers.current.interval = window.setInterval(() => setPreview(Math.floor(Math.random() * sides) + 1), 70);
    timers.current.timeout = window.setTimeout(() => {
      window.clearInterval(timers.current.interval);
      setResult(next);
      setRolling(false);
      busy.current = false;
    }, 900);
  };
  return <main className={`${styles.page} ${styles.imagePage}`} style={{ backgroundImage: `linear-gradient(rgba(8, 12, 25, .6), rgba(8, 12, 25, .85)), url("${krumpImage}")` }}><BackButton onClick={onBack} /><div className={styles.content}>
    <header className={styles.header}><p className={styles.eyebrow}>Leave it to chance</p><h1>Dice rolling</h1><p>I WILL SLAP THIS CODE INTO WORK OR SO HELP ME!!!!!</p></header>
    <div className={styles.diceLayout}>
      <form className={styles.form} onSubmit={(event) => { event.preventDefault(); roll(); }}>
        <fieldset disabled={rolling} className={styles.controls}><legend>Your dice bag</legend>
          <label>Dice<select value={sides} onChange={(e) => setSides(Number(e.target.value))}>{[4, 6, 8, 10, 12, 20, 100].map((n) => <option key={n} value={n}>d{n}</option>)}</select></label>
          <div className={styles.quickDice} aria-label="Quick dice selection">{[4, 6, 8, 10, 12, 20, 100].map((n) => <button type="button" key={n} aria-pressed={sides === n} onClick={() => setSides(n)}>d{n}</button>)}</div>
          <div className={styles.inputPair}><label>Number of dice<input type="number" min="1" max="100" required value={count} onChange={(e) => setCount(e.target.value)} /></label>
          <label>Modifier<input type="number" step="1" required value={modifier} onChange={(e) => setModifier(e.target.value)} /></label></div>
          <label>Roll mode<select value={mode} onChange={(e) => setMode(e.target.value as Mode)}><option value="normal">Normal</option><option value="advantage">Advantage</option><option value="disadvantage">Disadvantage</option></select></label>
          <p className={styles.hint}>{mode === "normal" ? "One roll. Whatever fate has in store." : mode === "advantage" ? "Roll twice. Keep the higher total." : "Roll twice. Keep the lower total."}</p>
        </fieldset>
        <button className={`${styles.button} ${styles.rollButton}`} disabled={!valid || rolling}><span className={styles.rollButtonIcon}><DieShape sides={sides} /></span> {rolling ? "Rolling…" : "Roll dice"}</button>
      </form>
      <section className={styles.rollStage} aria-busy={rolling}>
        <p className={styles.eyebrow}>{rolling ? "A little suspense…" : result ? "The dice have spoken" : "Ready when you are"}</p>
        <div key={rolling ? "rolling" : result ? "landed" : "idle"} className={`${styles.die} ${rolling ? styles.tumbling : result ? styles.landed : ""}`} aria-hidden="true"><DieShape sides={sides} value={rolling ? preview : result ? result.sets[result.chosen][0] : 100} />{sides !== 100 && <span>{rolling ? preview : result ? result.sets[result.chosen][0] : sides}</span>}</div>
        <div role="status" className={styles.rollStatus}>{rolling ? "Rolling dice…" : result ? <><p className={styles.total}>{result.totals[result.chosen]}</p><p>{result.notation}</p></> : <><h2>{notation}</h2><p>Your next adventure starts with a roll.</p></>}</div>
        {result && <div className={styles.breakdown}>{result.sets.map((set, i) => <p className={i === result.chosen ? styles.kept : styles.discarded} key={i}>Roll {i + 1}: {set.join(" + ")} → {result.totals[i]}{i === result.chosen ? " (kept)" : " (discarded)"}</p>)}</div>}
      </section>
    </div>
  </div></main>;
}

function readDrawn(key: string): string[] {
  try { const value = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(value) ? value.filter((id) => typeof id === "string") : []; } catch { return []; }
}

export function CardDraw({ kind, onBack }: { kind: "tarot" | "cah"; onBack: () => void }) {
  const storageKey = `other-card-draw-${kind}-v1`;
  const [cards, setCards] = useState<Card[]>(kind === "tarot" ? tarotCards : []);
  const [drawn, setDrawn] = useState<string[]>(() => readDrawn(storageKey));
  const [display, setDisplay] = useState<Card>();
  const [spinning, setSpinning] = useState(false);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);
  const busy = useRef(false);
  const timers = useRef<{ interval?: number; timeout?: number }>({});
  useEffect(() => {
    if (kind !== "cah") return;
    const controller = new AbortController();
    setError("");
    fetch(cahUrl, { signal: controller.signal }).then((response) => { if (!response.ok) throw new Error(); return response.text(); }).then((text) => {
      const lines = Array.from(new Set(text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)));
      if (!lines.length) throw new Error();
      setCards(lines.map((line) => ({ id: line, text: line })));
    }).catch(() => { if (!controller.signal.aborted) setError("Could not load the cards. Please try again."); });
    return () => controller.abort();
  }, [kind, reload]);
  useEffect(() => () => { window.clearInterval(timers.current.interval); window.clearTimeout(timers.current.timeout); }, []);
  const remaining = cards.filter((card) => !drawn.includes(card.id));
  const draw = () => {
    if (busy.current || !remaining.length) return;
    busy.current = true;
    setSpinning(true);
    const final = remaining[Math.floor(Math.random() * remaining.length)];
    const nextDrawn = [...drawn, final.id];
    setDrawn(nextDrawn);
    try { localStorage.setItem(storageKey, JSON.stringify(nextDrawn)); } catch { /* Keep the current session usable when storage is unavailable. */ }
    const preview = () => setDisplay(remaining[Math.floor(Math.random() * remaining.length)]);
    preview();
    timers.current.interval = window.setInterval(preview, 90);
    timers.current.timeout = window.setTimeout(() => { window.clearInterval(timers.current.interval); setDisplay(final); setSpinning(false); busy.current = false; }, 2200);
  };
  return <main className={`${styles.page} ${styles.imagePage}`} style={{ backgroundImage: `linear-gradient(rgba(8, 12, 25, .6), rgba(8, 12, 25, .85)), url("${kind === "tarot" ? tarotCatImage : jpegImage}")` }}><BackButton onClick={onBack} /><div className={styles.content}>
    <h1>{kind === "tarot" ? "Tarot, draw" : "Cards Against Humanity: Family Edition, draw"}</h1>
    <p>Ask the DM to interpret the card and your result.</p>
    {error ? <p role="alert">{error} <button className={styles.button} onClick={() => setReload((n) => n + 1)}>Retry</button></p> : !cards.length ? <p role="status">Loading cards…</p> : <>
      <p>{remaining.length} of {cards.length} cards remaining</p>
      <button className={styles.button} onClick={draw} disabled={spinning || !remaining.length}>{spinning ? "Drawing…" : !remaining.length ? "Deck complete" : display ? "Pick again" : "Draw a card"}</button>
      <div aria-busy={spinning} className={`${styles.card} ${spinning ? styles.spinning : ""}`}>
        {display ? <>{display.image && <img src={display.image} alt={spinning ? "Shuffling tarot cards" : display.text} />}<p>{display.text}</p></> : <p>✦<br />Your next card awaits</p>}
      </div>
      <p role="status">{spinning ? "Shuffling cards…" : display ? `Drawn: ${display.text}` : "Ready to draw"}</p>
      {!remaining.length && !spinning && <p>Every card has been drawn.</p>}
    </>}
  </div></main>;
}
