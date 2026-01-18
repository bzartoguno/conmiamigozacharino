import { Item, Tribe } from "./types";

export interface FizzyTalesItem extends Item {
  priceText?: string;
}

export const tribeFizzyTales: Tribe & { items: FizzyTalesItem[] } = {
  name: "Fizzy Tales",
  owner: "Candy Cane Princess",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "I’ve got a little stamp challenge folks do for fun. Take a minute and pull one of your companions into a quick in-character moment, just a short question, a check-in, a joke, or a pep talk. Nothing long, just enough to feel real.  |  Stamp Quest (Scene Partner): Pull another PC into a short 30–60 second roleplay moment (a question, a check-in, a joke, a pep talk). | Reward: 4 Stamps",
          "Hey, if you’ve stepped on someone’s toes even a little today, give them a quick in-character apology for something minor. No drama, just so there's no blood in the water between, ya.  |  Stamp Quest (Apology Tour): Apologize (in-character) to a party member for something minor you did this session. | Reward: 3 Stamps",
          "Alright, this one’s a quiet game some regulars like.  |  Stamp Quest (One liners): Subtly quote movies, shows, or books loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of quotes you successfully make.",
          "One last stamp challenge, easy peasy lemon squeeze.  |  Stamp Quest (Tableau): When the party enters a new place, describe one small sensory detail (smell, sound, texture) in-character. | Reward: 2 Stamps",
          "I built a nap hole in under the counter which is great and has no downside until someone comes into the store looking for me and I have to crawl out of under the counter which is frankly impossible to do with dignity and without looking like a sleepy princess hissing.",
          "You know I first met my husband when he saved me from a Black Licorice, I'd go into more detail but due to some story time bugdet cuts I don't remember! Then when I went back home with him I saw the most beautiful things right before my eyes. An atom bomb detonating!",
          "Ever since Gideon moved in busniess has been booming! Gerald Blood Moon and I have been talking about making Gideon our maskot! We'll wheel him out for birthday parties, celebrations, and we'll have portaites paintings avilible! So it can be fun for the whole family! Oh look he's just vibrating with such exitment! *Muffled Gideon screaming in the background*",
          "We have sweets and treats galor! Don't be afarid to take a bite! Here at Fizzy Tale we sell things at one gold above cost becuase we value you other making this profitable!",
          "Yeah sometime we do need to fight of 9 to 10 dentists, but ever since I discover the treat know as 'caramel apple' I've been spreading them out like mouse traps keeping those nasty dentists away.",
          "Hey there I'm so sorry to bother you the I kind of keep a secert like pocket dungeon down in my basement that helps keep this shop supplied and my amazing husband kind of got stuck in one of them so if I could get your help getting him out of there I would make it worth your while! Make a DC 14 Survival check to help me sort this out. If you succeed, I’ll pay you 80 gp. If you fail, you take 1 point of damage from a fugde monster and get 90 gp for the trouble.",
          ],
  items: [
    {
      name: "Moon Rocks",
      price: 5,
      description: "The eater becomes nearly weightless, jump five times as far! (A normal jump is 3+str ft going directly up or leaping is str ft away from you) floating gently for 10 minutes.",
    },
    {
      name: "Bubble Barrier",
      price: 5,
      description: "A stick of bubble gum that, once blown, creates a semi-durable barrier with 2d12+5 HP and an AC of 13, lasting up to 10 minutes.",
    },
    {
      name: "Mirror Mints",
      price: 10,
      description: "Allows the user to pass through mirrors into a mirror realm for up to 1 hour.",
    },
    {
      name: "Proxy Dust",
      price: 10,
      description: "Enables control over a small doll as if inhabiting it, lasting for 1 hour.",
    },
    {
      name: "Beast-Speech Bubblegum",
      price: 10,
      description: "You can speak with animals for 30 minutes. If you spit it out early, the nearest small animal insults you.",
    },
    {
      name: "Cotton-Candy Cumulus",
      price: 10,
      description: "Create a 20-ft-radius lightly obscuring cotten-candy fog for 10 minutes; wind disperses it in 1 round.",
    },
    {
      name: "Marshmallow Parachute",
      price: 10,
      description: "Reaction when falling: reduce falling damage by 5d6 and drift 60 ft horizontally.",
    },
    {
      name: "Sour Shock Chews",
      price: 25,
      description: "As a bonus action,  you throw these into your mouth and crackle with energy; the next time you hit this turn, add 2d6 lightning damage.",
    },
    {
      name: "Caramel Shell",
      price: 60,
      description: "Gain +2 AC for 1 minute; if you take cold damage, the shell cracks and ends early.",
    },
    {
      name: "Gerald-d dry",
      price: 200,
      description: "A carbonated drink that heals half of the drinker's HP rounded up.",
    },
    {
      name: "Winter Wafers",
      price: 200,
      description: "Increase a stat by 1; stats cannot exceed 18. I'm surpised these aren't more popular.",
    },
  ],
};
