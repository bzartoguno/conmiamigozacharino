import archivesGuild from "./images/Archives Guild.png";
import applegarth from "./images/Applegarth.webp";
import blossomHotel from "./images/Blossom Hotel.png";
import bookBomb from "./images/Book Bomb.png";
import bulletsBuffsAndBeyond from "./images/Bullets Buffs and Beyond.webp";
import changingChurch from "./images/Changing Church.png";
import evansEnchantingEmporium from "./images/Evan's Enchanting Emporium.png";
import fizzyTale from "./images/FizzyTale.png";
import floral from "./images/Floral.webp";
import goblinMarket from "./images/GoblinMarket.png";
import golemWorkshop from "./images/Golem Work Shop.png";
import jell from "./images/Jell.webp";
import jewelryGuild from "./images/Jewelry Guild.png";
import labyrinthineLibrary from "./images/Labyrinthine Labrary.png";
import monster from "./images/Monster.webp";
import mounts from "./images/Mounts.webp";
import necromancyInsurance from "./images/NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import nme from "./images/N.M.E.png";
import oPapiesOracleReadings from "./images/O Papies Oracle Readings.png";
import pawsClawsAndMaws from "./images/Paws, Claws, & Maws.png";
import pearlsPotions from "./images/Pearls Potions.png";
import piggyBank from "./images/Piggy Bank.png";
import robinsRopes from "./images/Robins Ropes.png";
import runestoneRelay from "./images/Runestone Relay.png";
import sandboxSeymoursDrift from "./images/SandboxSeymoursDrift.webp";
import sandboxWytheholde from "./images/SandboxWytheholde.webp";
import silentOath from "./images/Silent Oath.png";
import sleuth from "./images/Sleuth.webp";
import strenuousMap from "./images/StrenuousMap.webp";
import strenuousNews from "./images/StrenuousNews.png";
import strenuousTrue from "./images/StrenuousTrue.webp";
import supremeSmithy from "./images/Supreme Smithy.png";

const relocatedImages = [
  archivesGuild,
  applegarth,
  blossomHotel,
  bookBomb,
  bulletsBuffsAndBeyond,
  changingChurch,
  evansEnchantingEmporium,
  fizzyTale,
  floral,
  goblinMarket,
  golemWorkshop,
  jell,
  jewelryGuild,
  labyrinthineLibrary,
  monster,
  mounts,
  necromancyInsurance,
  nme,
  oPapiesOracleReadings,
  pawsClawsAndMaws,
  pearlsPotions,
  piggyBank,
  robinsRopes,
  runestoneRelay,
  sandboxSeymoursDrift,
  sandboxWytheholde,
  silentOath,
  sleuth,
  strenuousMap,
  strenuousNews,
  strenuousTrue,
  supremeSmithy,
];

test("resolves every relocated town and shop image", () => {
  expect(relocatedImages).toHaveLength(32);
  expect(relocatedImages.every(Boolean)).toBe(true);
});
