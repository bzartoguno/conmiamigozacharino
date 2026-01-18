import { Item, Tribe } from "./types";

export interface SleuthUniversityItem extends Item {
  priceText?: string;
}

export const tribeSleuthUniversity: Tribe & { items: SleuthUniversityItem[] } = {
  name: "Sleuth University",
  owner: "Docter Mcninja",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "Quiet favor, if you’re the generous type: we run a little stamp challenge for travelers who look out for their own. Pick a moment and cover a companion’s cost drink, room, ‘fee,’ whatever it is, without turning it into a speech. Just handle it and move on.  |  Stamp Quest (I got you homie): Pay for another PC’s drink/room/bribe without making it a big deal. | Reward: 3 Stamps",
          "Here’s a stamp challenge that rewards good teamwork and good timing. If a companion asks you for help, give them one quick, tactical suggestion, short, practical, but let them choose.  |  Stamp Quest (Support the Roll): Give another player a quick tactical suggestion only if they ask for help. | Reward: 2 Stamps",
          "Small one, but it makes parties feel like parties: I’ve got a stamp challenge for you. Give one of your companions a fitting nickname and see if you can get them to answer to it at least once.  |  Stamp Quest (Nickname): Give one PC a fitting nickname and get them to respond to it at least once. | Reward: 4 Stamps",
          "I like when groups feel like they’ve actually shared a life together. Here’s a stamp challenge for that: invent a tiny shared detail with a companion, something simple you ‘both went through, or ‘both can’t stand’, and get them to agree to it in-character.  |  Stamp Quest (Shared Backstory): Create a tiny new shared detail with another PC ('We both hate…', 'We once…') and get them to agree in-character. | Reward: 5 Stamps",
          "They say the pen is mightier than the sword, but I have swung a sword at 50 pens and I can confirm that it is not the case.",
          "Back in my glory days I used to travel around with one Professor Layton—oh, the things we would get up to. Though, if I must pass down a word of advice from that time: if someone is about to grab you, set yourself on fire. They'll never see it coming.",
          "I actually teamed up with Benjamin Franklin once; not a bad guy, really, but he kept on saying 'who are you,' 'where are we going,' 'put me down.'",
          "I can't wait to clock out, and go home to see my beloved Yoshi. Oh um he's a velociraptor, I taught him how to skateboard.",
          "Sometimes the world can be quite confusing; that's why here at Sleuth University we can help you understand it a bit better!",
          "Oh good heavens! I've lost track of time! Oh tea and crumpets, and other British sounding things. I—umm, yes indeed you look like a very scary chap! Pray tell, would you be willing to lend me your skill? I need to teach a small session on how to properly terrify the lights out of somebody, and you look like you've seen that sort of thing. If you're willing to come with me and make a DC 14 Intimidation check to teach the next generation, I'll be most pleased. If you succeed, I’ll pay you 25 gp for your time. If you fail, you take 1 point of damage as you get mocked by college students and get 25 gp for the trouble.",
          ],
  items: [
    {
      name: "Lost & Found",
      price: 5,
      priceText: "Free",
      description: "It's a lost and found bin, it has other peoples stuff in there, it would be rude to take it.",
    },
    {
      name: "Rent Capstone Experimental Spell / Magic Item",
      price: 20,
      description: "Borrow cutting-edge arcana for field tests and capers.",
    },
    {
      name: "Forensics Lab Analysis",
      price: 25,
      priceText: "20G per sample",
      description:
        "Give us an item to look at we will do our best to tell you what it does.",
    },
    {
      name: "Case Intake (Hire a PI / Spy / Intern)",
      price: 25,
      priceText: "Associates 10G, Bachelor 25G, Master 50G, Doctoral 75G",
      description: "Delivers information in 1–3 days. Better degree = better lead quality and lower chance of an actidental lie.",
    },
  ],
};
