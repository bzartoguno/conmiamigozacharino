import bubbly from "./Jell Bell images/Bubbly.png";
import chunky from "./Jell Bell images/Chunky.png";
import jiggly from "./Jell Bell images/Jiggly.png";
import liquidy from "./Jell Bell images/Liquidy.png";
import rubbery from "./Jell Bell images/Rubbery.png";
import slippery from "./Jell Bell images/Slippery.png";
import sticky from "./Jell Bell images/Sticky.png";
import bouncy from "./Jell Bell images/Bouncy.png";
import slappy from "./Jell Bell images/Slappy.png";
import zippy from "./Jell Bell images/Zippy.png";
import hardy from "./Jell Bell images/Hardy.png";
import smarty from "./Jell Bell images/Smarty.png";
import jumpy from "./Jell Bell images/Jumpy.png";
import happy from "./Jell Bell images/Happy.png";
import cuteBow from "./Jell Bell images/Cute_Bow.png";
import outfit from "./Jell Bell images/Outfit.png";
import glitter from "./Jell Bell images/Glitter.png";
import blanket from "./Jell Bell images/Blanket.png";
import smallHat from "./Jell Bell images/Small_Hat.png";
import bracelet from "./Jell Bell images/Bracelet.png";
import slimePlush from "./Jell Bell images/Slime_Plush.png";

export const bodyLayerByType: Record<string, string> = {
  Liquidy: liquidy,
  Bubbly: bubbly,
  Jiggly: jiggly,
  Rubbery: rubbery,
  Sticky: sticky,
  Bouncy: bouncy,
  Slippery: slippery,
  Chunky: chunky,
};

export const temperamentLayerByType: Record<string, string> = {
  Slappy: slappy,
  Zippy: zippy,
  Hardy: hardy,
  Smarty: smarty,
  Jumpy: jumpy,
  Happy: happy,
};

export const accessoryLayerByType: Record<string, string> = {
  "Cute Bow": cuteBow,
  "An Outfit": outfit,
  Glitter: glitter,
  "Cozy Blanket": blanket,
  "Tiny Hat": smallHat,
  "Friendship Bracelet": bracelet,
  "Slime Plushie": slimePlush,
};

export const flavorColorByType: Record<string, string> = {
  "Pineapple Slime": "rgba(250, 204, 21, 0.48)",
  "Coconut Slime": "rgba(248, 250, 252, 0.45)",
  "Mint Slime": "rgba(134, 239, 172, 0.46)",
  "Cherry Slime": "rgba(248, 113, 113, 0.5)",
  "Vanilla Slime": "rgba(253, 230, 138, 0.42)",
  "Lemon Slime": "rgba(253, 224, 71, 0.52)",
  "Grape Slime": "rgba(167, 139, 250, 0.5)",
  "Durian Slime": "rgba(132, 204, 22, 0.46)",
  "Lime Slime": "rgba(74, 222, 128, 0.5)",
  "Plum Slime": "rgba(192, 132, 252, 0.5)",
  "Orange Slime": "rgba(251, 146, 60, 0.52)",
  "Banana Slime": "rgba(255, 255, 102, 0.5)",
};
