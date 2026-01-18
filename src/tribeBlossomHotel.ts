import { Item, Tribe } from "./types";

export interface BlossomHotelItem extends Item {
  priceText?: string;
}

export const tribeBlossomHotel: Tribe & { items: BlossomHotelItem[] } = {
  name: "Blossom Hotel",
  owner: "Perma for Winter Blossom, Marlee for Spring Blossom, Solin for Summer Blossom, Adel for Autumn Blossom & Mr. Harvy for Monsoon",
  percentAngry: 0,
  priceVariability: 6,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "Welcome to the Blossom Hotel, we hope you have a fantasic stay!",
          "Thank you for choosing Blossom Hotel, we promise that no one will break into your room at night, unlike some other establisments.",
          "For pations Pool hours are 5am-11pm.",
          "Oh sorry I was just reading a book, I'll be right with you.",
          "Hey, you want a cookie? Our chef baked too many, and we are trying to get rid of them before a pack of Cookie Monsters sneaks in here.",
          "Oh shoot, I forgot to run towels down to the pool, and I can't quite leave the desk right now... Hey, if you're willing to give me a hand, I'll make it worth your while! All I need is a DC 14 Stealth check to help me sort these. If you succeed, I’ll pay you 25 gp. If you fail, well, I'm sorry you dropped the towels, but I'll pay you 5 gp.",
          ],
  items: [
    {
      name: "Room, Board, & Repair Gear",
      price: 50,
      description: "Overnight stay with hearty meals and gear repairs included.",
    },
    {
      name: "Room, Board, Repair Gear, & Spa",
      price: 60,
      description: "Removes an additional level of exhaustion after a long rest.",
    },
    {
      name: "Room, Board, Repair Gear, Spa, & Time Dilation Chamber",
      price: 70,
      description: "Take a long rest in eight minutes",
    },
    {
      name: "Room, Board, Repair Gear, Spa, Time Dilation Chamber, & Temp Buff",
      price: 80,
      description: "+25 Temperary HP lasts 8 hours, after a long rest.",
    },
    {
      name: "Blossom Hotel Season Pass",
      price: 30000,
      description: "Lifetime access to every seasonal hotel on your world. Preforming a five minute ritual with this item will teleport you to their nearest hotel.",
    },
    {
      name: "Mini Game: Riddles for Rewards",
      price: 0,
      priceText: "Reward may vary",
      description: "Test your wit for rotating prizes. (Requires at least two players.)",
    },
    {
      name: "Mini Game: Monster Trivia Night",
      price: 0,
      priceText: "Reward may vary",
      description: "Lore-heavy trivia where correct answers coins (Requires at least two players.)",
    },
    {
      name: "Mini Game: Guess the Guest",
      price: 0,
      priceText: "Reward may vary",
      description: "Match silhouettes and rumors to the right may get room upgrades. (Requires at least two players.)",
    },
    {
      name: "Black Candle Training",
      price: 1000,
      description: "Hands-on focus training with the Black Candle tradition. Taking any proficent skill to expertices.",
    },
  ],
};
