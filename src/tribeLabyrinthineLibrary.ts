import { Item, Tribe } from "./types";

export interface LabyrinthineLibraryItem extends Item {
  priceText?: string;
}

export const tribeLabyrinthineLibrary: Tribe & {
  items: LabyrinthineLibraryItem[];
} = {
  name: "Labyrinthine Library",
  owner: "Larry",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          ],
  items: [
    {
      name: "Are you looking for knowledge?",
      price: 0.1,
      description: "Are you looking for knowledge? The Labyrinth Library might be just the thing for you. It's not your typical dungeon—it's a mobile pocket dimension. It's not run by the Dungeon Crawlers Guild, which likes brawn over brains. When you're ready to explore, let me know what interests you. You can choose a specific topic or go for a general overview. But be warned—each level you explore will require a greater toll. You might lose health, spell slots, or even unique abilities. However, the deeper you go, the more knowledge you'll gain. The Labyrinth Library is worth the risk. You'll uncover a wealth of information about your chosen topic, so if you're ready for the challenge, prepare for an adventure full of rewards!",
    },
  ],
};
