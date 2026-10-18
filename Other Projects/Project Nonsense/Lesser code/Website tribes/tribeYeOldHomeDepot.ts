import { Item, Tribe } from "./types";

export interface YeOldHomeDepotItem extends Item {
  priceText?: string;
}

export const tribeYeOldHomeDepot: Tribe & { items: YeOldHomeDepotItem[] } = {
  name: "Ye Old Home Depot",
  owner: "Henry",
  percentAngry: 0,
  priceVariability: 8,
  insults: [
          "I’ve got a little stamp challenge folks do for fun. Take a minute and pull one of your companions into a quick in-character moment, just a short question, a check-in, a joke, or a pep talk. Nothing long, just enough to feel real.  |  Stamp Quest (Scene Partner): Pull another PC into a short 30–60 second roleplay moment (a question, a check-in, a joke, a pep talk). | Reward: 4 Stamps",
          "Hey, if you’ve stepped on someone’s toes even a little today, give them a quick in-character apology for something minor. No drama, just so there's no blood in the water between, ya.  |  Stamp Quest (Apology Tour): Apologize (in-character) to a party member for something minor you did this session. | Reward: 3 Stamps",
          "Alright, this one’s a quiet game some regulars like.  |  Stamp Quest (One liners): Subtly quote movies, shows, or books loud enough for the person beside you to hear you, but if you get caught by the ‘DM’, you fail this quest. | Reward: At the session's end, earn stamps equal to the number of quotes you successfully make.",
          "One last stamp challenge, easy peasy lemon squeeze.  |  Stamp Quest (Tableau): When the party enters a new place, describe one small sensory detail (smell, sound, texture) in-character. | Reward: 2 Stamps",
          "Um? How'd you get in here? This shop is open to adventurers. Meh, I don't get paid enough to care.",
          "Welcome to Ye Old Home Depot, blah blah blah, we both know you're not going to pay any attention to me.",
          "Just wander around until you find what you're looking for; I don't know where anything is either.",
          "Oh... It's you, listen I only got an hour and a half left on my shift, so please don't bother me. I just want to go home.",
          "Yippee, another customer.",
          "Hey, HR said I need to be more friendly to customers, but they got us on camera, so if you can pretend to be polite to me, I'll slip you a few coins when you check out. Make a DC 14 Persuasion check to help me sort these. If you succeed, he’ll pay you 7 silver pieces. If you fail, you now have the knowledge that you made an employee cry, you sick monster.",

          "Um? How'd you get in here? This shop is open to adventurers. Meh, I don't get paid enough to care.",
          "Welcome to Ye Old Home Depot, blah blah blah, we both know you're not going to pay any attention to me.",
          "Just wander around until you find what you're looking for; I don't know where anything is either.",
          "Oh... It's you, listen I only got an hour and a half left on my shift, so please don't bother me. I just want to go home.",
          "Yippee, another customer.",
          "Um? How'd you get in here? This shop is open to adventurers. Meh, I don't get paid enough to care.",
          "Welcome to Ye Old Home Depot, blah blah blah, we both know you're not going to pay any attention to me.",
          "Just wander around until you find what you're looking for; I don't know where anything is either.",
          "Oh... It's you, listen I only got an hour and a half left on my shift, so please don't bother me. I just want to go home.",
          "Yippee, another customer.",
          "Um? How'd you get in here? This shop is open to adventurers. Meh, I don't get paid enough to care.",
          "Welcome to Ye Old Home Depot, blah blah blah, we both know you're not going to pay any attention to me.",
          "Just wander around until you find what you're looking for; I don't know where anything is either.",
          "Oh... It's you, listen I only got an hour and a half left on my shift, so please don't bother me. I just want to go home.",
          "Yippee, another customer.",
          
          ],
  items: [
    {
      name: "Plank of Wood (it’s a freshly cut 2x4)",
      price: 1,
      description: "Straight, smooth lumber ready for framing or quick fixes.",
    },
    {
      name: "Box of Iron Nails (100 count)",
      price: 5,
      description: "Reliable fasteners for framing, patching, and everyday builds.",
    },
    {
      name: "Sturdy Claw Hammer",
      price: 12,
      description: "Balanced grip with a claw that yanks mistakes back out.",
    },
    {
      name: "Coiled Hemp Rope (50 ft)",
      price: 8,
      description: "Tough, weather-ready rope for hauling, tying, and towing.",
    },
    {
      name: "Weatherproof Paint (gallon)",
      price: 18,
      description: "Neutral base coat that shrugs off rain and road dust.",
    },
    {
      name: "Bag of Quick-Set Concrete",
      price: 22,
      description: "Just add water for posts, steps, or a speedy patch job.",
    },
    {
      name: "Pair of Reinforced Work Gloves",
      price: 7,
      description: "Thick palms and knuckle guards to keep splinters away.",
    },
    {
      name: "Door Hinges & Screws Kit",
      price: 9,
      description: "Matching hinges, screws, and shims to square up any entryway.",
    },
    {
      name: "Custom Lumber Cutting",
      price: 0,
      priceText: "Price may vary",
      description: "Cut sheets and boards to fit without wasting a single inch.",
    },
    {
      name: "Wheelbarrow Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Haul gravel, soil, or stone without buying the whole cart.",
    },
    {
    name: "Plank of Wood (2x6)",
    price: 2,
    description: "More heft for ramps, braces, and “no really, it’ll hold” builds.",
    },
    {
      name: "Treated Timber Post (8 ft)",
      price: 6,
      description: "Resists rot, rain, and goblin sabotage.",
    },
    {
      name: "Sheet of Plywood (4x8)",
      price: 7,
      description: "Instant barricade, floor patch, or “secret door” practice.",
    },
    {
      name: "Bundle of Shingles (roof patch)",
      price: 9,
      description: "Stops leaks and stray sparks.",
    },
    {
      name: "Bag of Gravel (50 lb)",
      price: 3,
      description: "Drainage, backfill, or “make the alley crunchy” security.",
    },
    {
      name: "Bag of Sand (50 lb)",
      price: 2,
      description: "Leveling stones, mixing mortar, or emergency traction.",
    },
    {
      name: "Sack of Mortar Mix",
      price: 8,
      description: "For brickwork and stone-setting when “stack rocks” isn’t enough.",
    },
    {
      name: "Stack of Bricks (20 count)",
      price: 5,
      description: "Reliable, heavy, and great for stopping doors.",
    },
    {
      name: "Stone Paver Slabs (4 count)",
      price: 6,
      description: "Quick path, quick patio, quick “we live here now.”",
    },
    {
      name: "Bundle of Wooden Stakes (12 count)",
      price: 4,
      description: "Garden, tents, traps, or mild intimidation.",
    },
    {
      name: "Box of Steel Nails (200 count)",
      price: 9,
      description: "For when iron bends and shame follows.",
    },
    {
      name: "Box of Wood Screws (100 count)",
      price: 7,
      description: "Tighter bite than nails; less regret later.",
    },
    {
      name: "Assorted Bolts & Nuts (50 count)",
      price: 11,
      description: "Wagons, gates, and “why is this loose again?” repairs.",
    },
    {
      name: "Door Latch Bar (Heavy)",
      price: 10,
      description: "Turns any door into a statement.",
    },
    {
      name: "Padlock (Stout)",
      price: 8,
      description: "Keeps honest folk honest and thieves mildly annoyed.",
    },
    {
      name: "Chain (10 ft)",
      price: 9,
      description: "Hauling, locking, hanging, or dramatic rattling.",
    },
    {
      name: "Hasps & Staples Kit",
      price: 6,
      description: "Mountable locking hardware for chests, sheds, and “not yours.”",
    },
    {
      name: "Corner Braces (4 pack)",
      price: 4,
      description: "Reinforce shelves, crates, and wobbly tables of fate.",
    },
    {
      name: "Metal Hook Set (6 count)",
      price: 3,
      description: "Hang lanterns, packs, or suspicious meats.",
    },
    {
      name: "Door Wedges (2 pack)",
      price: 1,
      description: "The cheapest lifesaver you’ll ever buy.",
    },

    // Hand Tools (The Classics)
    {
      name: "Sturdy Handsaw",
      price: 8,
      description: "Cuts boards clean and cuts conversations short.",
    },
    {
      name: "Wood Chisel Set (3 pieces)",
      price: 7,
      description: "For hinges, joints, and carving rude messages.",
    },
    {
      name: "Carpenter’s Square",
      price: 3,
      description: "Proof that right angles still exist.",
    },
    {
      name: "Measuring Line & Chalk",
      price: 2,
      description: "Mark it once, cut it once, brag forever.",
    },
    {
      name: "Spirit Level Vial",
      price: 4,
      description: "Because “looks straight” is a lie.",
    },
    {
      name: "Hand Drill (Brace & Bit)",
      price: 10,
      description: "Quiet drilling—stealthy, but still annoying.",
    },
    {
      name: "Screwdriver Set (4 pieces)",
      price: 5,
      description: "For screws, prying, and “I can fix it.”",
    },
    {
      name: "Pry Bar (Medium)",
      price: 6,
      description: "Opens crates and sometimes… answers.",
    },
    {
      name: "Mason’s Trowel",
      price: 4,
      description: "Mortar work that doesn’t look like porridge.",
    },
    {
      name: "Whetstone",
      price: 2,
      description: "Make it sharp again. Make it right again.",
    },

    // “Power” Tools (Fantasy-Appropriate)
    {
      name: "Wind-Up Rotary Drill (Gnomish)",
      price: 18,
      description: "Crank it, drill it, pretend it’s not magic.",
    },
    {
      name: "Foot-Treadle Scroll Saw",
      price: 16,
      description: "Precision cuts for signs and delicate panels.",
    },
    {
      name: "Belt Sander (Hand-crank)",
      price: 14,
      description: "Turns rough wood into “almost professional.”",
    },
    {
      name: "Stone Cutter’s Chipper (Heavy)",
      price: 12,
      description: "For trimming pavers and egos.",
    },
    {
      name: "Portable Workbench (Folds)",
      price: 11,
      description: "Instant shop anywhere; dignity not included.",
    },

    // Adhesives, Sealants, and “Patch the Consequences”
    {
      name: "Barrel of Wood Glue (Quart)",
      price: 4,
      description: "Stronger than apologies; weaker than fire.",
    },
    {
      name: "Pitch & Tar Jar",
      price: 6,
      description: "Waterproofing for boats, roofs, boots, and questionable plans.",
    },
    {
      name: "Caulking Paste",
      price: 5,
      description: "Seals cracks to stop drafts, leaks, and tiny crawling horrors.",
    },
    {
      name: "Epoxy Putty",
      price: 9,
      description: "Hardens like stone—fix a helm, fix a hinge, fix your reputation.",
    },
    {
      name: "Leather Patching Kit",
      price: 7,
      description: "Straps, belts, and light armor repairs—adventurer essentials.",
    },
    {
      name: "Canvas Patch Roll",
      price: 4,
      description: "For tents and sails when the wind gets personal.",
    },
    {
      name: "Rope Splice Kit",
      price: 3,
      description: "Hooks and needles to make rope last longer than patience.",
    },

    // Paint, Stain, and Protective Coatings
    {
      name: "Wood Stain (Quart)",
      price: 6,
      description: "Makes new boards look “historic.”",
    },
    {
      name: "Oil Sealant (Quart)",
      price: 7,
      description: "Protects wood from water, rot, and suspicious slime.",
    },
    {
      name: "Whitewash Bucket",
      price: 4,
      description: "Cheap bright coat for barns, basements, and hiding soot.",
    },
    {
      name: "Brush Set (3 pack)",
      price: 3,
      description: "One for paint, one for tar, one you’ll regret.",
    },
    {
      name: "Roller & Tray Kit",
      price: 4,
      description: "Fast coverage for when the deadline is yesterday.",
    },
    {
      name: "Painter’s Drop Cloth (Canvas)",
      price: 3,
      description: "Protect floors… or hide evidence.",
    },

    // Plumbing & Water
    {
      name: "Copper Pipe (5 ft)",
      price: 8,
      description: "Clean water lines and classy contraptions.",
    },
    {
      name: "Iron Pipe (5 ft)",
      price: 6,
      description: "Heavier, tougher, louder when it falls on toes.",
    },
    {
      name: "Pipe Couplers (6 pack)",
      price: 3,
      description: "Because you definitely measured wrong.",
    },
    {
      name: "Valve Spigot (Brass)",
      price: 5,
      description: "Turn water on/off like a wizard of plumbing.",
    },
    {
      name: "Bucket (Sturdy)",
      price: 1,
      description: "For water, grout, vomit, or “emergency helmet.”",
    },
    {
      name: "Washbasin Tub (Portable)",
      price: 4,
      description: "Luxury camping—almost.",
    },
    {
      name: "Plunger",
      price: 2,
      description: "Great for clogs. Surprisingly good for slapstick.",
    },
    {
      name: "Wax Ring Seal",
      price: 3,
      description: "For privy fitting—smells like victory eventually.",
    },

    // Lighting, Heat, and “Home Comforts”
    {
      name: "Lantern (Hooded)",
      price: 5,
      description: "Wind-resistant light for night work.",
    },
    {
      name: "Lantern Oil (Flask, 4 hours)",
      price: 1,
      description: "Smells like competence.",
    },
    {
      name: "Candle Bundle (20 count)",
      price: 2,
      description: "Reliable, dramatic, and totally not spooky.",
    },
    {
      name: "Firestarter Kit (Flint, steel, tinder)",
      price: 4,
      description: "Stop begging the wizard for sparks.",
    },
    {
      name: "Chimney Soot Brush",
      price: 6,
      description: "Keep smoke inside the chimney, not your lungs.",
    },

    // Garden, Farm, and Outdoor
    {
      name: "Shovel (Solid)",
      price: 8,
      description: "Dig holes. Fill holes. Bury mistakes.",
    },
    {
      name: "Pickaxe (Standard)",
      price: 10,
      description: "For stone, roots, and stubborn things.",
    },
    {
      name: "Rake (Wide)",
      price: 5,
      description: "Level soil, clear debris, threaten enemies comedically.",
    },
    {
      name: "Hand Trowel (Small digs)",
      price: 2,
      description: "Herbs, bulbs, and tiny treasure caches.",
    },
    {
      name: "Bag of Seeds (Common veggies)",
      price: 1,
      description: "You can’t eat gold. Sadly.",
    },
    {
      name: "Watering Can (Metal)",
      price: 3,
      description: "For gardens and gentle alchemy.",
    },
    {
      name: "Fence Wire Roll (50 ft)",
      price: 4,
      description: "Pens, trellises, alarms, and “stay out.”",
    },

    // Rentals & Services (Price may vary)
    {
      name: "Ladder Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Reach roofs, walls, and regrettable decisions.",
    },
    {
      name: "Handcart Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Move crates without hiring three barbarians.",
    },
    {
      name: "Tool Sharpening Service",
      price: 0,
      priceText: "Price may vary",
      description: "Blades, axes, chisels—same-day, unless cursed.",
    },
    {
      name: "Key Cutting",
      price: 0,
      priceText: "Price may vary",
      description: "House keys or chest keys, if you have the original… or a good story.",
    },
    {
      name: "Paint Mixing",
      price: 0,
      priceText: "Price may vary",
      description: "Custom color match—bring a swatch: cloak, banner, or monster ichor.",
    },
    {
      name: "Bulk Order / Special Timber",
      price: 0,
      priceText: "Price may vary",
      description: "Hardwoods and long beams delivered by mule train.",
    },
    // Flooring & Tile
    {
      name: "Box of Ceramic Floor Tile (12 sq ft)",
      price: 14,
      description: "Sturdy tiles for kitchens, entryways, and fancy dungeon renovations.",
    },
    {
      name: "Bag of Grout (Stone-Fill Blend)",
      price: 6,
      description: "Locks tiles in place and keeps water (and ants) from moving in.",
    },
    {
      name: "Tile Spacers (100 count)",
      price: 2,
      description: "Tiny wedges that keep your tile lines crisp and your ego intact.",
    },
    {
      name: "Notched Trowel (Tile-Set)",
      price: 5,
      description: "Spreads adhesive evenly so tiles stick like they mean it.",
    },
    {
      name: "Floor Underlayment Roll (10x20 ft)",
      price: 9,
      description: "Softens footsteps, blocks drafts, and makes floors feel ‘finished.’",
    },
    {
      name: "Plank Flooring (Bundle, 20 sq ft)",
      price: 18,
      description: "Instantly upgrades any room from ‘tavern backroom’ to ‘respectable.’",
    },
    {
      name: "Rug (Stout-Woven, 5x7)",
      price: 16,
      description: "Warms a room, muffles footsteps, and hides trapdoors artistically.",
    },
    {
      name: "Stone Threshold Slab",
      price: 7,
      description: "Reinforces doorways and makes entrances feel important.",
    },

    // Insulation & Weatherproofing
    {
      name: "Wool Insulation Batts (Bundle)",
      price: 12,
      description: "Keeps warmth in, keeps wind out, keeps morale up.",
    },
    {
      name: "Fiberglass Insulation Batts (Bundle)",
      price: 11,
      description: "Itches like a curse, but it works like a charm.",
    },
    {
      name: "Foam Board Insulation (2 panels)",
      price: 10,
      description: "Lightweight barrier for walls, crates, and chilly secret rooms.",
    },
    {
      name: "Draft-Seal Strips (Door & Window)",
      price: 4,
      description: "Stops whistling gaps and makes winter feel less personal.",
    },
    {
      name: "Weatherproofing Tape (Heavy Roll)",
      price: 3,
      description: "Seals seams, patches tears, and fixes problems you’ll deny later.",
    },
    {
      name: "Insulation Support Rods (10 count)",
      price: 3,
      description: "Keeps batts from sagging like a tired scarecrow.",
    },
    {
      name: "Chimney Cap (Sootguard)",
      price: 9,
      description: "Blocks rain and birds from turning your chimney into a condo.",
    },

    // Electrical-ish (Fantasy Safe)
    {
      name: "Copper Wire Spool (50 ft)",
      price: 9,
      description: "For bell rigs, door alarms, and ‘totally not a trap’ mechanisms.",
    },
    {
      name: "Iron Conduit Tube (5 ft)",
      price: 6,
      description: "Protects wire runs from critters, boots, and bad ideas.",
    },
    {
      name: "Switch Lever (Wall-Mount)",
      price: 4,
      description: "A sturdy toggle for lamps, bells, or secret-door theatrics.",
    },
    {
      name: "Fuse Link Set (5 count)",
      price: 5,
      description: "Breaks safely when your tinkering gets… ambitious.",
    },
    {
      name: "Bell & Pull-Cord Kit",
      price: 6,
      description: "Perfect for shop doors, servant calls, and ‘someone’s here!’ alerts.",
    },
    {
      name: "Lantern Sconce (Iron, Wall-Mount)",
      price: 7,
      description: "Holds a lantern steady so your light stops falling over dramatically.",
    },

    // Cleaning & Organization
    {
      name: "Storage Crate (Stacking, Large)",
      price: 5,
      description: "Organize supplies, loot, or the party’s endless rope collection.",
    },
    {
      name: "Oilcloth Tarp (10x10)",
      price: 8,
      description: "Covers gear, blocks rain, or becomes an emergency groundsheet.",
    },
    {
      name: "Shelf Bracket Set (2 pack)",
      price: 3,
      description: "Turns planks into shelves and chaos into something manageable.",
    },
    {
      name: "Wall Peg Board (Tool-Hanging Panel)",
      price: 9,
      description: "Hang tools neatly so you can find them before the crisis hits.",
    },
    {
      name: "Peg Hooks (12 count)",
      price: 2,
      description: "The little hooks that make a tool wall actually work.",
    },
    {
      name: "Work Apron (Pockets Galore)",
      price: 6,
      description: "Keeps nails, chalk, and questionable snacks within quick reach.",
    },
    {
      name: "Toolbox (Iron-Clasp, Medium)",
      price: 10,
      description: "Stops your tools from living separate lives in separate bushes.",
    },
    {
      name: "Broom (Stiff Bristle)",
      price: 2,
      description: "Sweeps dust, ash, and the evidence of minor misadventures.",
    },
    {
      name: "Mop & Bucket Set",
      price: 4,
      description: "For taverns, shops, and ‘why is the floor sticky?’ moments.",
    },
    {
      name: "Scrub Brush (Handheld)",
      price: 1,
      description: "Cleans pots, floors, armor dents, and your reputation (slightly).",
    },
    {
      name: "Lye Soap Bar (Heavy Duty)",
      price: 1,
      description: "Cuts grease like a paladin cuts excuses.",
    },
    {
      name: "Rag Bundle (10 count)",
      price: 1,
      description: "Wipe spills, polish metal, or stuff into cracks as a last resort.",
    },

    // Safety Gear
    {
      name: "Protective Goggles",
      price: 4,
      description: "Keeps sawdust, grit, and regret out of your eyes.",
    },
    {
      name: "Dust Mask (5 pack)",
      price: 3,
      description: "For sanding, sweeping, and exploring ‘totally safe’ basements.",
    },
    {
      name: "Earplugs (10 pack)",
      price: 2,
      description: "Ideal for loud work, loud taverns, or louder party members.",
    },
    {
      name: "Hard Hat (Leather & Rivet)",
      price: 6,
      description: "Protects your head from falling boards and falling common sense.",
    },

    // Hardware: Doors, Windows, and Trim
    {
      name: "Door Knob Set (Iron, Simple)",
      price: 6,
      description: "A proper handle for doors that deserve better than a rope pull.",
    },
    {
      name: "Door Sweep Strip",
      price: 3,
      description: "Blocks drafts, bugs, and the occasional crawling horror.",
    },
    {
      name: "Window Latch (2 pack)",
      price: 4,
      description: "Keeps windows shut when the wind (or thieves) get curious.",
    },
    {
      name: "Glass Pane (2x3 ft)",
      price: 7,
      description: "Replace a broken window without resorting to ‘open concept.’",
    },
    {
      name: "Screen Mesh Roll",
      price: 5,
      description: "Lets air in, keeps flies out, and saves your sanity in summer.",
    },
    {
      name: "Wood Trim Molding (8 ft)",
      price: 3,
      description: "Makes rough edges look intentional and expensive.",
    },

    // Paint Prep & Finishing
    {
      name: "Sandpaper Pack (Assorted Grit)",
      price: 2,
      description: "Smooths wood, preps paint, and removes ‘oops’ marks.",
    },
    {
      name: "Putty Knife (Flexible)",
      price: 3,
      description: "Spread filler, scrape paint, or pry tiny lids with confidence.",
    },
    {
      name: "Paint Scraper (Blade Tool)",
      price: 4,
      description: "For stripping old paint and bad decisions from surfaces.",
    },
    {
      name: "Wood Filler (Small Tub)",
      price: 4,
      description: "Patches holes, dents, and ‘we swear it was always like that.’",
    },
    {
      name: "Primer (Quart)",
      price: 6,
      description: "Helps paint stick and keeps stains from haunting you.",
    },

    // Garden Center Extras
    {
      name: "Bag of Compost (40 lb)",
      price: 3,
      description: "Turns sad soil into thriving soil with suspicious enthusiasm.",
    },
    {
      name: "Bag of Mulch (40 lb)",
      price: 2,
      description: "Holds moisture, blocks weeds, and makes gardens look cared for.",
    },
    {
      name: "Fertilizer Mix (All-Purpose)",
      price: 4,
      description: "Encourages growth for crops, herbs, and ‘please survive’ plants.",
    },
    {
      name: "Clay Plant Pots (3 count)",
      price: 2,
      description: "For herbs, flowers, and tiny intimidating cacti.",
    },
    {
      name: "Garden Hose (25 ft)",
      price: 7,
      description: "Move water where you want it—no bucket brigade required.",
    },
    {
      name: "Nozzle Sprayer Head (Adjustable)",
      price: 4,
      description: "From gentle mist to ‘blast the mud off the wagon.’",
    },
    {
      name: "Hand Pruners",
      price: 5,
      description: "Trim shrubs, vines, and anything that thinks it owns your path.",
    },

    // Pest Control (Mundane, non-magical)
    {
      name: "Mouse Trap Set (4 count)",
      price: 2,
      description: "For small pests, not for party members (strictly speaking).",
    },
    {
      name: "Rat Cage Trap (Humane)",
      price: 5,
      description: "Catch and release—because some cities fine you for being mean.",
    },
    {
      name: "Insect Repellent Sachets (10 pack)",
      price: 3,
      description: "Keeps biting bugs away from beds, packs, and pantries.",
    },
    {
      name: "Flea Powder (Small Tin)",
      price: 4,
      description: "For pets, rugs, and that one cursed blanket nobody admits exists.",
    },

    // Rentals & Big-Job Help (Price may vary)
    {
      name: "Rug Scrubber Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Deep-clean rugs after muddy boots and messier stories.",
    },
    {
      name: "High-Pressure Water Sprayer Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Blast grime off stone, wagons, and ‘how did that even happen?’ stains.",
    },
    {
      name: "Insulation Blower Rental",
      price: 0,
      priceText: "Price may vary",
      description: "For stuffing lofts and walls fast without hiring ten cousins.",
    },
    {
      name: "Floor Sander Rental",
      price: 0,
      priceText: "Price may vary",
      description: "Refinish floors until they look rich enough to get robbed.",
    },
    // Core Paints (Walls, Trim, Exterior)
    {
      name: "Interior Wall Paint (gallon, matte)",
      price: 16,
      description: "Low-glare coverage for rooms, halls, and ‘we live here now’ hideouts.",
    },
    {
      name: "Interior Wall Paint (gallon, eggshell)",
      price: 17,
      description: "Slight sheen—easier to clean after smoke, mud, or soup incidents.",
    },
    {
      name: "Trim & Door Enamel (quart, semi-gloss)",
      price: 9,
      description: "Hard-wearing finish for doors, trim, and anything that gets grabbed daily.",
    },
    {
      name: "Exterior Siding Paint (gallon)",
      price: 20,
      description: "Weather-ready coat that shrugs off rain, sun, and village gossip.",
    },
    {
      name: "Fence & Barn Paint (gallon, classic red)",
      price: 18,
      description: "Bold protection for fences, barns, and ‘please don’t climb this’ barriers.",
    },
    {
      name: "Masonry Paint (gallon)",
      price: 19,
      description: "Made for stone and brick—keeps walls from looking like sad rubble piles.",
    },

    // Primers & Prep Coats
    {
      name: "All-Purpose Primer (gallon)",
      price: 14,
      description: "Helps paint stick, blocks stains, and forgives questionable surfaces.",
    },
    {
      name: "Stain-Blocking Primer (quart)",
      price: 8,
      description: "For smoke marks, water rings, and mysteries you refuse to explain.",
    },
    {
      name: "Metal Primer (rust-guard, quart)",
      price: 9,
      description: "Keeps ironwork from flaking like a cheap curse.",
    },
    {
      name: "Wood Knot-Seal Primer (quart)",
      price: 8,
      description: "Stops sap bleed-through so your walls don’t look haunted later.",
    },

    // Stains, Sealers, and Waterproofing
    {
      name: "Wood Stain (gallon)",
      price: 18,
      description: "Deep color for beams and boards—makes new lumber look ‘heritage.’",
    },
    {
      name: "Deck & Dock Sealant (gallon)",
      price: 21,
      description: "Waterproofing for porches, docks, wagons, and questionable bridges.",
    },
    {
      name: "Masonry Sealer (gallon)",
      price: 20,
      description: "Seals porous stone to resist moisture, mildew, and dungeon vibes.",
    },
    {
      name: "Varnish (quart, clear coat)",
      price: 8,
      description: "Protects wood from scratches, spills, and overconfident elbows.",
    },
    {
      name: "Shellac (quart)",
      price: 9,
      description: "Fast-drying barrier coat—great for sticky woods and stubborn odors.",
    },
    {
      name: "Linseed Oil (quart)",
      price: 6,
      description: "Classic wood conditioner for tools, handles, and well-loved gear.",
    },
    {
      name: "Wax Finish (tin)",
      price: 5,
      description: "Buff-on protection for furniture and ‘fine, we’re classy now’ tables.",
    },

    // Specialty Finishes (Very Home-Depot-but-Fantasy)
    {
      name: "Chalk Paint (quart)",
      price: 7,
      description: "Matte, vintage look for furniture flips and cozy shop signage.",
    },
    {
      name: "Limewash Paint (bucket)",
      price: 10,
      description: "Old-world breathable coat for stone walls and rustic charm.",
    },
    {
      name: "Heat-Resistant Stove Paint (quart)",
      price: 11,
      description: "For stoves, grates, and metal that gets hot enough to swear at.",
    },
    {
      name: "Anti-Mildew Wash Additive (vial)",
      price: 3,
      description: "Mix into paint to fight damp basements and suspicious corners.",
    },
    {
      name: "Reflective Road-Marker Paint (quart)",
      price: 10,
      description: "Bright markings for steps, hazards, and ‘don’t fall here’ reminders.",
    },

    // Pigments & Decorative
    {
      name: "Pigment Pouch (basic colors)",
      price: 2,
      description: "Mix custom hues for banners, murals, and extremely extra doors.",
    },
    {
      name: "Pigment Pouch (rare metallic)",
      price: 6,
      description: "Add shimmer for trims, crests, or tasteful intimidation.",
    },
    {
      name: "Gold Leaf Kit (small)",
      price: 15,
      description: "For fancy signs, holy icons, and ‘this tavern is upscale’ lies.",
    },
    {
      name: "Stencil Set (letters & borders)",
      price: 6,
      description: "Clean signage without needing a steady hand or a calm life.",
    },

    // Paint Removal & Solvents
    {
      name: "Paint Stripper Gel (jar)",
      price: 8,
      description: "Peels old coats off wood and metal—best used with patience and gloves.",
    },
    {
      name: "Turpentine / Brush Thinner (quart)",
      price: 5,
      description: "Cleans oil paints and strips gunk from tools like a charm (a smelly one).",
    },
    {
      name: "Soap & Brush Cleaner (bottle)",
      price: 3,
      description: "Keeps brushes alive for more than one job (a rare achievement).",
    },

    // Painting Supplies (The Stuff Everyone Forgets)
    {
      name: "Painter’s Tape (2 rolls)",
      price: 3,
      description: "Crisp lines, fewer regrets, and less ‘why is it on the ceiling?’",
    },
    {
      name: "Roller Frame & Cover (set)",
      price: 5,
      description: "Fast coverage for big walls and bigger ambitions.",
    },
    {
      name: "Roller Covers (2 pack)",
      price: 3,
      description: "Swap covers between coats instead of painting with sadness.",
    },
    {
      name: "Extension Pole (roller handle)",
      price: 4,
      description: "Reach high walls without balancing on destiny.",
    },
    {
      name: "Paint Tray & Liners (set)",
      price: 4,
      description: "Less cleanup, more painting, fewer sink tragedies.",
    },
    {
      name: "Mixing Sticks (10 count)",
      price: 1,
      description: "Stir paint properly so the color doesn’t betray you mid-wall.",
    },
    {
      name: "Paint Can Pour Spout",
      price: 2,
      description: "Pour without drips—an invention worthy of bards.",
    },
    {
      name: "Paint Can Opener Key",
      price: 1,
      description: "Opens lids without mangling them like a barbarian with a spoon.",
    },
    {
      name: "Edge Brush (angled)",
      price: 4,
      description: "For corners and trim where rollers fear to tread.",
    },

    // Services (Price may vary)
    {
      name: "Color Matching & Tinting",
      price: 0,
      priceText: "Price may vary",
      description: "Bring a swatch—cloak, banner, or monster ichor—for a near-perfect match.",
    },
    {
      name: "Paint Shaking Service",
      price: 0,
      priceText: "Price may vary",
      description: "We shake the can until it’s uniform (and slightly intimidated).",
    },
  ],
};
