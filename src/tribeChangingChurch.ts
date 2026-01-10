import { Tribe } from "./types";

export const tribeChangingChurch: Tribe = {
  name: "Changing Church",
  owner: "All Father",
  percentAngry: 0,
  priceVariability: 5,
  insults: [
          "Hey, between you and me, I run a little stamp challenge for regulars. Nothing dangerous, just a bit of fun to keep the road lively.  |  Stamp Quest (Wild Animal): Subtly make animal sounds into conversations, loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of animal sounds you successfully make.",
          "I like adventurers who travel as a team, not a parade. Here’s a small stamp challenge I hand out to folks I’m rooting for. Next time, you could take charge, pass the lead to someone else and let them shine.  |  Stamp Quest (Share the Spotlight): When you could take the lead, deliberately hand it to another PC (“You’re better at this than me, you take it.”). | Reward: 4 Stamps",
          "Most people come in here looking for gear, but the smart ones invest in their companions. I’ve got a stamp challenge for that kind of traveler. Help one of your party members make real progress on something personal they’re chasing this session.  |  Stamp Quest (Helping Hand): Help another party member with their personal goal this session. | Reward: 10 Stamps",
          "I don’t like seeing heroes go without when their friends could help. So here’s a little stamp challenge, nice and simple. If a companion’s talking about buying something helpful, surprise them by covering it or gifting them something valuable.  |  Stamp Quest (It’s dangerous to go alone): Give another party member a useful item like a potion, weapon, armor, or a few coins when they are talking about buying an item. | Reward: 3 Stamp",
          ],
  items: [
    {
      name: "Minor Blessing",
      price: 10,
      description: `Roll a d6 to gain one of the following effects; if you have another blessing, that blessing is removed and replaced with this one.
1- Light's Guidance: For the next hour, you emit a soft glow, shedding bright light in a 10-foot radius and dim light for an additional 10 feet.
2- Blessed Aura: For the next hour, you and allies within 5 feet gain a +1 bonus to AC.
3- Divine Whisper: Gain advantage on your next Wisdom (Perception) check as a deity guides your senses for the next 24 hours.
4- Celestial Light: A soft, radiant light surrounds you for 1 hour, providing bright light in a 10-foot radius.
5- Purifying Presence: For the next hour, food and drink you touch are purified of poison and disease.
6- Guardian's Grace: For the next 24 hours, the first time you drop to 0 hit points, you instead drop to 1 hit point and are teleported to the last place you slept.`,
    },
    {
      name: "Healing",
      price: 10,
      description: "Go back up to maximum HP.",
    },
    {
      name: "Alright Blessing",
      price: 50,
      description: `Roll a d6 to gain one of the following effects; if you have another blessing, that blessing is removed and replaced with this one.
1- Holy Vigor: Gain temporary hit points equal to your level + your Charisma modifier for the next 8 hours.
2- Divine Speed: Your movement speed is doubled for the next 10 minutes.
3- Sacred Shield: For the next hour, gain resistance to necrotic and poison damage.
4- Celestial Vision: For the next 8 hours, gain darkvision out to a range of 60 feet, or an additional 60 feet if you already have darkvision.
5- Enduring Light: Your ability to see in darkness, both magical and non-magical, permanently increases by 30 feet.
6- Sacred Health: Permanently gain +1 bonus to Constitution saving throws.`,
    },
    {
      name: "Curse/Hex Removal",
      price: 250,
      description: "Remove a curse or hex.",
    },
    {
      name: "Omega Blessing",
      price: 500,
      description: `Roll a d6 to gain one of the following effects; if you have another blessing, that blessing is removed and replaced with this one.
1- Eternal Blessing: Choose one skill or tool. You gain permanent proficiency with that skill or tool. If you already have proficiency you gain expertise.
2- Hallowed Healer: When you cast a spell that heals hit points, add an additional d8 for each level you currently have.
3- Heavenly Aura: You permanently gain the ability to cast Sanctuary on yourself once per long rest without using a spell slot.
4- Celestial Resilience: You permanently gain resistance to necrotic and radiant damage.
5- Archangel's Wings: You gain the ability to sprout ethereal wings, granting you a flying speed of 60 feet for up to 1 hour, once per long rest.
 6- Celestial Companion: You gain the Find Familiar spell as a cantrip; the creature type is celestial and takes on traits to represent that.`,
    },
    {
      name: "Travel Altar Kit",
      price: 8,
      description:
        "A compact fold-out altar with a cloth, candle holder, and tiny little slots—perfect for respectful prayers on the road.",
    },
    {
      name: "Pocket Hymnal & Common Prayers",
      price: 6,
      description:
        "A well-loved collection of hymns and everyday prayers with sturdy binding and notes for holy days and rites.",
    },
    {
      name: "Ceremony Supply Satchel",
      price: 12,
      description:
        "A neatly organized satchel with incense cones, chalk, ribbon, and sealing wax for officiants who like being prepared.",
    },
  ],
};
