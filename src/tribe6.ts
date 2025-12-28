import { Tribe } from "./types";
import { createGoblinExcuses } from "./tribeInsults";

export const tribe6: Tribe = {
  name: "Loco Lux Motors",
  percentAngry: 95,
  priceVariability: 16,
  insults: createGoblinExcuses("Loco Lux Motors"),
  items: [
    {
      name: "Wiggly piece of paper!",
      price: 300000,
      description: "(Adel’s copy or clone coupon: after making a purchase, you may trigger this coupon by making an exact copy or clone of the purchase five feet away; this item can only be used once and only in official shops.)",
    },
    {
      name: "Bumbling Buggy",
      price: 100000,
      description: "(An extremely loud, steampunk-based Jeep. More information is provided upon purchase.)",
    },
    {
      name: "Killdozer",
      price: 250000,
      description: "(A steampunk-based bulldozer with one too many metal spikes. More information is provided upon purchase.)",
    },
    {
      name: "Juddering Juggernaut",
      price: 250000,
      description: "(A steampunk-based tank that flies backward after every shot. More information is provided upon purchase.)",
    },
    {
      name: "War Chug Chug MARK-001",
      price: 300000,
      description: "(A steampunk-based, all-terrain battle train—possibly the very same train the goblins use. More information is provided upon purchase.)",
    },
    {
      name: "Rough Rough ta ta",
      price: 100000,
      description: "(A steampunk-based motorcycle with a sidecar. More information is provided upon purchase.)",
    },
    {
      name: "Toot Toot",
      price: 100000,
      description: "(A small steampunk-based fishing boat held together with beeswax, love, and over 40,000 nails. More information provided upon purchase.)",
    },
    {
      name: "Fweeeeeeeeee MARK-058",
      price: 3000000,
      description: "(A steampunk-based blimp that leaks helium. More information is provided upon purchase.)",
    },
    {
      name: "Claptrap Chopper MARK-777",
      price: 100000,
      description: "(A steampunk-based helicopter that sounds like a classroom of children clapping and cheering. More information is provided upon purchase.)",
    },
    {
      name: "Shop Stock",
      price: 10000,
      description: "(Own a little bit of stock in a shop of your choice. More information is provided upon purchase.)",
    },
  ],
};
