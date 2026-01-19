import { Tribe } from "./types";

export const tribeNavigationGuild: Tribe = {
  name: "Navigation Guild",
  owner: "Nate",
  percentAngry: 0,
  priceVariability: 0,
  insults: [
          "Quick thing, our town runs a little stamp challenge for traveling parties. It’s meant to keep groups working together instead of talking past each other. Before you lock in a plan, ask one of your companions what they want to do next or what part they want to take.  |  Stamp Quest (Ask First): Before making a plan, ask another PC what they want to do next or what they want to do for their part in the plan. | Reward: 3 Stamps",
          "Since you look like the capable sort, I’ll share one of our stamp challenges. It rewards teamwork over heroics. Next time trouble starts, set up a simple two-person combo with a companion, nothing fancy, just coordinated.  |  Stamp Quest (Tag-Team): Coordinate a 2-person combo in combat (grapple + shove, distraction + sneak, buff + big hit, etc.). | Reward: 5 Stamps",
          "I’ve got a small stamp challenge that’s been good for keeping parties sharp and in sync. When a companion offers an idea, don’t just agree, add to it. Build on what they said and keep the momentum going.  |  Stamp Quest (Yes, And): Say 'Yes, and-' (or the spirit of it) to another player’s idea and build on it. | Reward: 3 Stamps",
          "All right, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations.  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          "Hello, friend. Welcome to the Navigation Guild. If you have a place to be, then let us show you the way, much like our ancestors of old did.",
          "Thank you, friend, for choosing us. We know the road can be quite dangerous, but here we make sure that our customers aren't harassed by anyone or anything during their journey.",
          "MY FRIEND, IT IS SO GOOD TO SEE YOU AGAIN! PLEASE SIT! SIT! I MUST HEAR MORE ABOUT YOUR TRAVELS!",
          "My friend! My friend! My friend! Welcome! Welcome! Welcome! You are among family at last! I may be trying to run a business here, but I am so happy to see you again!",
          "I hope that you one day will know the utter joy you bring with you, for when I saw you walk through that door I knew that my day was only going to get better from here!",
          "Greetings, friend. Would you be interested in learning more about the world around you? If so, please follow me, and I will teach you what is safe to eat while on the road! Make a DC 14 Nature check to see what you learn. If you succeed, congrats! You learned more about herbs and various plants to eat while out in nature. If you fail, you take 1 point of damage from Nate's ramblings.",
          ],
  items: [
    {
      name: "One town over",
      price: 5,
      description: "A straightforward route to de neighboring town.",
    },
    {
      name: "Two towns over",
      price: 10,
      description: "Guidance for a two-town journey with reliable stops.",
    },
    {
      name: "Three towns over",
      price: 20,
      description: "Safe passage recommendations across three towns.",
    },
    {
      name: "Four towns over",
      price: 40,
      description: "Charted directions spanning four towns' worth of travel.",
    },
    {
      name: "Five towns over",
      price: 80,
      description: "An extended itinerary covering five towns of distance.",
    },
    {
      name: "Suvenirs",
      price: 2,
      description: "Want a snow globe or a postcard from where you went? We got you covered. We even have some keychains with names on them! Travel blankes and neckpillows all for de same price!",
    },
    {
      name: "Emergency survival kit",
      price: 1,
      description: "A compact kit containing essentials like a compass, water purificater, a whistle, and a basic first aid kit.",
    },
    {
      name: "Letter of Recommendation",
      price: 100,
      description: "Sealed, stamped, and written in flattering formal language to an innkeeper, harbor master, or minor noble",
    },
  ],
};
