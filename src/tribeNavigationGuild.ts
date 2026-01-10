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
          "Alright, here’s a fun little stamp challenge purely for morale. Pick a light accent or a harmless speech quirk and use it in a couple of conversations  |  Stamp Quest (Tiny Accent): Use a very light accent or speech quirk for two separate conversations. If the DM calls it out, fail. | Reward: 3 Stamps",
          ],
  items: [
    {
      name: "One town over",
      price: 5,
      description: "A straightforward route to the neighboring town.",
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
      description: "Want a snow globe or a postcard from where you went? We got you covered. We even have some keychains with names on them! Travel blankes and neckpillows all for the same price!",
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
