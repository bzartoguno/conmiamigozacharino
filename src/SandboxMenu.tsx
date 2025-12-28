import { useState } from "react";
import styles from "./SandboxMenu.module.css";
import sandboxWorldMapImage from "./SandboxWorldMap.webp";
import sandboxAnalepticHoltImage from "./SandboxAnalepticHolt.webp";
import sandboxBallisticBellowsImage from "./SandboxBallisticBellows.webp";
import sandboxBigHomeImage from "./SandboxBigHome.webp";
import sandboxButtingRamsImage from "./SandboxButtingRams.webp";
import sandboxByfordDolphinImage from "./SandboxByfordDolphin.webp";
import sandboxCalidrisImage from "./SandboxCalidris.webp";
import sandboxGraveBornImage from "./SandboxGraveBorn.webp";
import sandboxHebronImage from "./SandboxHebron.webp";
import sandboxJellyCityImage from "./SandboxJellyCity.webp";
import sandboxMeanderImage from "./SandboxMeander.webp";
import sandboxMerricksGroveImage from "./SandboxMerricksGrove.webp";
import sandboxOrbitingCityImage from "./SandboxOrbitingCity.webp";
import sandboxPopNFaithImage from "./SandboxPop-nFaith.webp";
import sandboxSeymoursDriftImage from "./SandboxSeymoursDrift.webp";
import sandboxWytheholdeImage from "./SandboxWytheholde.webp";

type SandboxTown = {
  key: string;
  name: string;
  description: string;
  image: string;
  shops: string[];
};

const sandboxTowns: SandboxTown[] = [
  {
    key: "withhold",
    name: "Withhold (Parker)",
    image: sandboxWytheholdeImage,
    description:
      "Nestled between warm rolling hills and jagged, freezing mountains, Withhold grows famous home-grown food but struggles for medicine once winter comes. As they live in Wandering Titan territory, nearly everyone knows how to flee into the tight valley caves when danger looms, preserving the town's dwindling stories.",
    shops: [
      "Applegarth Guild",
      "Robin's Ropes",
      "O-Papies Oracle Readings",
      "Supreme Smithy",
      "Fairies of Flora",
      "Silent Oath",
    ],
  },
  {
    key: "butting-rams",
    name: "Butting Rams",
    image: sandboxButtingRamsImage,
    description:
      "Barbarians here love fighting, feasting, and boasting about both. Their town is literally split between two enormous rams that butt heads, catapulting residents back and forth—thankfully the rams are fluffy enough to make the landings survivable before the traditional 15-minute free-for-all.",
    shops: ["Goblin Market"],
  },
  {
    key: "meander",
    name: "Meander (Michael)",
    image: sandboxMeanderImage,
    description:
      "A cowboy's dream that never settles, Meander roams Wandering Titan territory after draining every Magitek Oil spot. Constant desert travel keeps crops from thriving, so the townsfolk trade for food while clinging to a strong moral compass they defend fiercely.",
    shops: [
      "Make a Monster",
      "Michael's Mount",
      "Iconic Dragonic",
      "Paws, Claws, & Maws",
      "Valhalla Mart",
      "Bullets, Buffs, & Beyond",
    ],
  },
  {
    key: "calidris",
    name: "Calidris; The Ghost Town that Kept Running (Fisk)",
    image: sandboxCalidrisImage,
    description:
      "Created as an artisans' paradise with no creative limits, Calidris thrived—until every living resident vanished overnight. Only the golems and robots remain, tirelessly working while ignoring their missing masters.",
    shops: [],
  },
  {
    key: "merricks-meadow",
    name: "Merrick's Meadow (Howard)",
    image: sandboxMerricksGroveImage,
    description:
      "This humble village boomed after discovering rare herbs. Newcomers flock to Merrick's Meadow for its newfound fame, while longtime residents grumble about the crowds disturbing their once-tranquil home.",
    shops: [
      "Robin's Ropes",
      "Applegarth Guild",
      "Changing Church",
      "O-Papies Oracle Readings",
      "Silent Oath",
      "Necromancy Insurance Company",
      "Provision's Paradise",
      "Jazz's Portable Potions",
    ],
  },
  {
    key: "ballistic-bellows",
    name: "Ballistic Bellows (Caleb)",
    image: sandboxBallisticBellowsImage,
    description:
      "Punctual and industrious, every citizen can run a forge or clockwork device. Their advanced weapons self-destruct if reverse engineered, protecting the secrets behind their booming craft.",
    shops: [
      "Will's Weapons",
      "Comedy Gold",
      "Navigation Guild",
      "Dungeon Crawler Guild",
      "Pearl's Potions",
      "Provision's Paradise",
      "Ye Old Donkey",
      "The Piggy Bank, no hammers inside.",
    ],
  },
  {
    key: "byford-dolphin",
    name: "Byford Dolphin (Robertson)",
    image: sandboxByfordDolphinImage,
    description:
      "Wealth dictates status in Byford Dolphin. Legendary metals pulled from the sea fund the Clockwork King's construction projects, while the richest citizen holds the House of Blades contract—and the bill that comes with it.",
    shops: [
      "Auntie Patty's Pies",
      "Blossom Hotel",
      "Jewelry Guild",
      "N.M.E.",
      "Labyrinthine Library",
      "Sleuth University",
      "Changing Church",
      "O-Papies Oracle Readings",
    ],
  },
  {
    key: "hebron",
    name: "Hebron (Joshua)",
    image: sandboxHebronImage,
    description:
      "After the Missing Millennium, Hebron secured a monopoly on Thunder Cores by salvaging and purchasing every relic they could find. Now it's a hub for minds devoted to unlocking the power behind these remnants.",
    shops: [
      "Supreme Smithy",
      "Runestone Relay",
      "Robin's Ropes",
      "Silent Oath",
      "Applegarth Guild",
      "Necromancy Insurance Company",
      "Evan's Enchanting Emporium",
      "Sleuth University",
      "Jewelry Guild",
    ],
  },
  {
    key: "jelly-city",
    name: "Jelly City",
    image: sandboxJellyCityImage,
    description:
      "Built vertically inside a Wandering Titan jellyfish, this flexible city produces medicine that keeps the Disciples of Mother battle-ready. Its secrets are hard to see, but unforgettable once witnessed.",
    shops: ["Goblin Market", "Book Bombs", "Robin's Ropes", "Changing Church"],
  },
  {
    key: "pop-n-faith",
    name: "Pop-n Faith (Eli)",
    image: sandboxPopNFaithImage,
    description:
      "Deities literally walk among the people here, balancing each other so none gains dominance. Their collective aura keeps their Wandering Titan host cowering, while mortals navigate divine politics daily.",
    shops: [
      "Jazz's Portable Potions",
      "Blossom Hotel",
      "Jewelry Guild",
      "N.M.E.",
      "Labyrinthine Library",
      "Archives Guild",
      "Supreme Smithy",
      "Silent Oath",
      "Will's Weapons",
      "Evan's Enchanting Emporium",
    ],
  },
  {
    key: "analeptic-holt",
    name: "Analeptic Holt (Teag)",
    image: sandboxAnalepticHoltImage,
    description:
      "Hidden beneath an ancient jungle canopy, Hadozee gliders live among massive roots and high branches. They cherish harmony with their environment but stay guarded with outsiders to protect their traditions.",
    shops: [
      "Bullets, Buffs, & Beyond",
      "Robin's Ropes",
      "Changing Church",
      "Necromancy Insurance Company",
      "Runestone Relay",
      "Sleuth University",
      "Blossom Hotel",
      "Fairies of Flora",
      "Evan's Enchanting Emporium",
      "Jazz's Portable Potions",
    ],
  },
  {
    key: "seymours-drift",
    name: "Seymour's Drift (Melanie)",
    image: sandboxSeymoursDriftImage,
    description:
      "A sprawling city on a giant drifting lily pad, Seymour's Drift follows the tides while serving its enigmatic leader, Audrey the Second. Residents bond over devotion, firearms, and an unyielding love of meat.",
    shops: [
      "Blossom Hotel",
      "Fairies of Flora",
      "Sleuth University",
      "Jewelry Guild",
      "Evan's Enchanting Emporium",
      "Labyrinthine Library",
      "Will's Weapons",
      "Archives Guild",
      "Supreme Smithy",
      "Applegarth Guild",
    ],
  },
  {
    key: "graveborn",
    name: "Graveborn",
    image: sandboxGraveBornImage,
    description:
      "A sanctuary for the undead, founded before the 75-year war so vampires, zombies, skeletons, and even dream visages could live free. Left alone, the undead eventually wander toward this vibrant necropolis.",
    shops: [
      "Iconic Dragonic",
      "Make a Monster",
      "Michael's Mount",
      "Paws, Claws, & Maws",
      "Valhalla Mart",
      "Sleuth University",
      "Evan's Enchanting Emporium",
      "Labyrinthine Library",
      "Jewelry Guild",
      "Blossom Hotel",
    ],
  },
  {
    key: "orbiting-city",
    name: "Orbiting City",
    image: sandboxOrbitingCityImage,
    description:
      "Humanity pushed the impossible to reality, building a city that sails the sky thanks to alliances and generosity toward the Clockwork King. Its flight marks a new era of exploration and diplomacy.",
    shops: [
      "Iconic Dragonic",
      "Evan's Enchanting Emporium",
      "Supreme Smithy",
      "Sleuth University",
      "Navigation Guild",
      "Will's Weapons",
      "Runestone Relay",
      "The Piggy Bank, no hammers inside.",
      "Jewelry Guild",
      "Michael's Mount",
    ],
  },
  {
    key: "big-home",
    name: "Big Home",
    image: sandboxBigHomeImage,
    description:
      "Orcs value family, honesty, and loyalty. After 'Mother' guided them to shun technology and guard the secrets of the Missing Millennium, their strength in numbers and conviction makes them formidable when provoked.",
    shops: ["Every shop"],
  },
];

export function SandboxMenu({ onBack }: { onBack: () => void }) {
  const [openTown, setOpenTown] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.backButton} onClick={onBack}>
        ← Back to main menu
      </button>

      <header className={styles.header}>
        <img
          src={sandboxWorldMapImage}
          alt="Sandbox world map"
          className={styles.heroImage}
        />
        <div>
          <p className={styles.kicker}>Sandbox Destinations</p>
          <h1 className={styles.title}>Pick a town to view its shops</h1>
          <p className={styles.subtitle}>
            Tap a destination to read its story, then see which shops you can dive into.
            Each card uses its own world art as the backdrop.
          </p>
        </div>
      </header>

      <div className={styles.grid}>
        {sandboxTowns.map((town) => {
          const isOpen = openTown === town.key;
          return (
            <button
              key={town.key}
              type="button"
              className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.8) 35%, rgba(15,23,42,0.95) 100%), url(${town.image})`,
              }}
              onClick={() => setOpenTown(isOpen ? null : town.key)}
              aria-expanded={isOpen}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardTitle}>{town.name}</span>
                <span aria-hidden className={styles.chevron}>
                  {isOpen ? "▲" : "▼"}
                </span>
              </div>
              {isOpen ? (
                <div className={styles.cardBody}>
                  <p className={styles.description}>{town.description}</p>
                  <div className={styles.shopList}>
                    <h3>Associated shops</h3>
                    {town.shops.length > 0 ? (
                      <ul>
                        {town.shops.map((shop) => (
                          <li key={shop}>{shop}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className={styles.emptyState}>No associated shops listed yet.</p>
                    )}
                  </div>
                </div>
              ) : (
                <p className={styles.preview}>Tap to view description and shops</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
