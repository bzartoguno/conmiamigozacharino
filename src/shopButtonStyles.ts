export type ShopButtonStyle = {
  backgroundColor: string;
  color?: string;
};

type ColorRule = {
  name: string;
  matcher: (color: string) => boolean;
};

const defaultStyle: ShopButtonStyle = {
  backgroundColor: "rgba(30, 41, 59, 0.82)",
  color: "#f8fafc",
};

const colorRules: ColorRule[] = [
  { name: "white", matcher: (color) => color.includes("255, 255, 255") },
  { name: "red", matcher: (color) => color.includes("220, 38, 38") },
  { name: "yellow", matcher: (color) => color.includes("250, 204, 21") },
  { name: "green", matcher: (color) => color.includes("34, 197, 94") },
  { name: "blue", matcher: (color) => color.includes("37, 99, 235") },
];

const styleMap: Record<string, ShopButtonStyle> = {
  "auction house": { backgroundColor: "rgba(138, 253, 244, 0.712)" },
  "black market": { backgroundColor: "rgba(0, 0, 0, 0.712)", color: "white" },
  "goblin market": { backgroundColor: "rgba(37, 99, 235, 0.95)", color: "#e2e8f0" },
  goblins: { backgroundColor: "rgba(37, 99, 235, 0.95)", color: "#e2e8f0" },
  "applegarth guild": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "archives guild": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "book bombs": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "bullets, buffs, & beyond": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "changing church": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "necromancy insurance company": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "o-papies oracle readings": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "robin's ropes": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "robin ropes": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "runestone relay": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "silent oath": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "supreme smithy": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  "will's weapons": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
  
  "auntie patty's pies": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe", },
  "comedy gold": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe" },
  "dungeon crawler guild": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe",  },
  "find a friend": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe" },
  "navigation guild": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe" },
  "pearl's potions": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe" },
  "provision's paradise": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe" },
  "the piggy bank, no hammers inside.": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe", },
  "ye old donkey": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe" },
  "piggy bank": { backgroundColor: "rgba(220, 38, 38, 0.9)", color: "#e0f2fe", },


  "hug cartel": { backgroundColor: "rgba(250, 204, 21, 0.9)" },
  "iconic dragonic": { backgroundColor: "rgba(250, 204, 21, 0.95)" },
  "jell bell": { backgroundColor: "rgba(250, 204, 21, 0.9)" },
  "make a monster": { backgroundColor: "rgba(250, 204, 21, 0.95)" },
  "paws, claws, & maws": { backgroundColor: "rgba(250, 204, 21, 0.95)" },
  "michael's mount": { backgroundColor: "rgba(250, 204, 21, 0.95)" },
  "valhalla mart": { backgroundColor: "rgba(250, 204, 21, 0.95)" },
  "blossom hotel": {
    backgroundColor: "rgba(34, 197, 94, 0.9)",
    color: "#0a2f14",
  },
  "evan's enchanting emporium": {
    backgroundColor: "rgba(34, 197, 94, 0.9)",
    color: "#0a2f14",
  },
  "fairies of flora": { backgroundColor: "rgba(34, 197, 94, 0.95)", color: "#0a2f14" },
  "golem workshop": { backgroundColor: "rgba(34, 197, 94, 0.95)", color: "#0a2f14" },
  "jazz's portable potions": {
    backgroundColor: "rgba(34, 197, 94, 0.95)",
    color: "#0a2f14",
  },
  "jewelry guild": { backgroundColor: "rgba(34, 197, 94, 0.92)", color: "#0b1f16" },
  "labyrinthine library": {
    backgroundColor: "rgba(34, 197, 94, 0.95)",
    color: "#0a2f14",
  },
  "n.m.e.": { backgroundColor: "rgba(34, 197, 94, 0.95)", color: "#04260f" },
  "sleuth university": {
    backgroundColor: "rgba(34, 197, 94, 0.95)",
    color: "#0a2f14",
  },
  "fizzy tales": { backgroundColor: "rgba(37, 99, 235, 0.95)", color: "#e2e8f0" },
  "ye old homedepot": { backgroundColor: "rgba(37, 99, 235, 0.95)", color: "#e0f2fe" },
};

function normalizeLabel(label: string) {
  return label.replace(/’/g, "'").trim().toLowerCase();
}

function getColorRank(backgroundColor?: string) {
  if (!backgroundColor) {
    return colorRules.length;
  }
  const matchIndex = colorRules.findIndex((rule) =>
    rule.matcher(backgroundColor)
  );
  return matchIndex === -1 ? colorRules.length : matchIndex;
}

export function getShopButtonStyle(label: string): ShopButtonStyle {
  const normalized = normalizeLabel(label);
  return styleMap[normalized] ?? defaultStyle;
}

export function getDefaultShopButtonStyle(): ShopButtonStyle {
  return defaultStyle;
}

export function sortShopButtons<T extends { label: string; backgroundColor?: string }>(
  buttons: T[]
): T[] {
  return [...buttons].sort((a, b) => {
    const colorRankA = getColorRank(
      a.backgroundColor ?? getShopButtonStyle(a.label).backgroundColor
    );
    const colorRankB = getColorRank(
      b.backgroundColor ?? getShopButtonStyle(b.label).backgroundColor
    );
    if (colorRankA !== colorRankB) {
      return colorRankA - colorRankB;
    }
    return normalizeLabel(a.label).localeCompare(normalizeLabel(b.label));
  });
}
