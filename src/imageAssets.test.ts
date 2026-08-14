import archivesGuild from "./Images/Archives Guild.png";
import applegarth from "./Images/Applegarth.webp";
import blossomHotel from "./Images/Blossom Hotel.png";
import bookBomb from "./Images/Book Bomb.png";
import bulletsBuffsAndBeyond from "./Images/Bullets Buffs and Beyond.webp";
import changingChurch from "./Images/Changing Church.png";
import evansEnchantingEmporium from "./Images/Evan's Enchanting Emporium.png";
import fizzyTale from "./Images/FizzyTale.png";
import floral from "./Images/Floral.webp";
import goblinMarket from "./Images/GoblinMarket.png";
import golemWorkshop from "./Images/Golem Work Shop.png";
import jell from "./Images/Jell.webp";
import jewelryGuild from "./Images/Jewelry Guild.png";
import labyrinthineLibrary from "./Images/Labyrinthine Labrary.png";
import monster from "./Images/Monster.webp";
import mounts from "./Images/Mounts.webp";
import necromancyInsurance from "./Images/NecromanyInsuranceCo-ezgif.com-webp-to-png-converter.png";
import nme from "./Images/N.M.E.png";
import oPapiesOracleReadings from "./Images/O Papies Oracle Readings.png";
import pawsClawsAndMaws from "./Images/Paws, Claws, & Maws.png";
import pearlsPotions from "./Images/Pearls Potions.png";
import piggyBank from "./Images/Piggy Bank.png";
import robinsRopes from "./Images/Robins Ropes.png";
import runestoneRelay from "./Images/Runestone Relay.png";
import sandboxSeymoursDrift from "./Images/SandboxSeymoursDrift.webp";
import sandboxWytheholde from "./Images/SandboxWytheholde.webp";
import silentOath from "./Images/Silent Oath.png";
import sleuth from "./Images/Sleuth.webp";
import strenuousMap from "./Images/StrenuousMap.webp";
import strenuousNews from "./Images/StrenuousNews.png";
import strenuousTrue from "./Images/StrenuousTrue.webp";
import supremeSmithy from "./Images/Supreme Smithy.png";

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
