type Facet = {
    id: number;
    name: string;
    icon: string;
    color: string;
    deprecated?: "true";
    gradient_id: number;
    title: string;
    description: string;
    abilities?: string[];
  };
  
  export const heroFacets: Record<string, Facet[]> = {
    npc_dota_hero_antimage: [
      {
        id: 0,
        name: "antimage_magebanes_mirror",
        icon: "ricochet",
        color: "Purple",
        gradient_id: 1,
        title: "Magebane's Mirror",
        description:
          "Counterspell and Counterspell Ally reflect spells back at their caster instead of just blocking.",
      },
      {
        id: 1,
        name: "antimage_mana_thirst",
        icon: "mana",
        color: "Blue",
        gradient_id: 3,
        title: "Mana Thirst",
        description: "Anti-Mage gains damage when his enemies are at low mana.",
      },
    ],
    npc_dota_hero_axe: [
      {
        id: 0,
        name: "axe_one_man_army",
        icon: "strength",
        color: "Red",
        gradient_id: 0,
        title: "One Man Army",
        description:
          "Axe gains Strength based on his armor as long as he's away from his allies.",
        abilities: ["axe_one_man_army"],
      },
      {
        id: 1,
        name: "axe_call_out",
        icon: "armor",
        color: "Red",
        gradient_id: 2,
        title: "Call Out",
        description:
          "Berserker's Call gives attacking enemies more attack speed and Axe more armor for the duration.",
      },
    ],
    npc_dota_hero_bane: [
      {
        id: 0,
        name: "bane_dream_stalker",
        icon: "damage",
        color: "Gray",
        gradient_id: 0,
        title: "Dream Stalker",
        description:
          "Bane has increased attack speed when attacking Nightmared units.",
      },
      {
        id: 1,
        name: "bane_sleepwalk",
        icon: "movement",
        color: "Purple",
        gradient_id: 1,
        title: "Sleepwalk",
        description: "Nightmared units walk in Bane's chosen direction.",
      },
    ],
    npc_dota_hero_bloodseeker: [
      {
        id: 0,
        name: "bloodseeker_arterial_spray",
        icon: "movement",
        color: "Red",
        gradient_id: 1,
        title: "Arterial Spray",
        description: "Ruptured units are pushed when attacked by Bloodseeker.",
      },
      {
        id: 1,
        name: "bloodseeker_bloodrush",
        icon: "speed",
        color: "Gray",
        gradient_id: 1,
        title: "Bloodrush",
        description:
          "Bloodseeker can supercharge the movement speed from Thirst temporarily.",
      },
    ],
    npc_dota_hero_crystal_maiden: [
      {
        id: 0,
        name: "crystal_maiden_frozen_expanse",
        icon: "area_of_effect",
        color: "Gray",
        gradient_id: 1,
        title: "Frozen Expanse",
        description:
          "Freezing Field also passively increases Crystal Maiden's cast range and area of effect.",
      },
      {
        id: 1,
        name: "crystal_maiden_cold_comfort",
        icon: "mana",
        color: "Blue",
        gradient_id: 2,
        title: "Cold Comfort",
        description:
          "Crystal Maiden restores her allies' Mana when casting spells. Increases innate Mana Regen Amplification.",
      },
    ],
    npc_dota_hero_drow_ranger: [
      {
        id: 0,
        name: "drow_ranger_high_ground",
        icon: "damage",
        color: "Gray",
        gradient_id: 1,
        title: "Vantage Point",
        description:
          "Drow deals 20% more damage when attacking from high ground.",
        abilities: ["drow_ranger_vantage_point"],
      },
      {
        id: 1,
        name: "drow_ranger_sidestep",
        icon: "multi_arrow",
        color: "Blue",
        gradient_id: 1,
        title: "Sidestep",
        description:
          "Drow can move slowly and use items while casting Multishot.",
      },
    ],
    npc_dota_hero_earthshaker: [
      {
        id: 0,
        name: "earthshaker_tectonic_buildup",
        icon: "area_of_effect",
        color: "Red",
        gradient_id: 1,
        title: "Tectonic Buildup",
        description: "Aftershock radius is increased by 50 every 10 hero levels.",
      },
      {
        id: 1,
        name: "earthshaker_slugger",
        icon: "movement",
        color: "Yellow",
        gradient_id: 1,
        title: "Slugger",
        description:
          "Enemies killed with Enchant Totem or Earthshaker's other abilities are sent flying, dealing damage to enemies they hit.",
      },
    ],
    npc_dota_hero_juggernaut: [
      {
        id: 0,
        name: "juggernaut_bladestorm",
        icon: "spinning",
        color: "Yellow",
        gradient_id: 1,
        title: "Bladestorm",
        description:
          "Blade Fury can now critically strike based on the level of Blade Dance.",
      },
      {
        id: 1,
        name: "juggernaut_agigain",
        icon: "agility",
        color: "Red",
        gradient_id: 2,
        title: "Bladeform",
        description:
          "Juggernaut gains Agility and Movement Speed as long as he's not taking damage.",
        abilities: ["juggernaut_bladeform"],
      },
    ],
    npc_dota_hero_mirana: [
      {
        id: 0,
        name: "mirana_moonlight",
        icon: "moon",
        color: "Blue",
        gradient_id: 1,
        title: "Moonlight Shadow",
        description:
          "Mirana's Ultimate grants allies invisiblity and movement speed.",
        abilities: ["mirana_invis"],
      },
      {
        id: 1,
        name: "mirana_sunlight",
        icon: "sun",
        color: "Gray",
        gradient_id: 3,
        title: "Solar Flare",
        description:
          "Mirana's Ultimate grants allies increasing attack speed and damage over time.",
        abilities: ["mirana_solar_flare"],
      },
    ],
    npc_dota_hero_nevermore: [
      {
        id: 0,
        name: "nevermore_lasting_presence",
        icon: "armor_broken",
        color: "Gray",
        gradient_id: 0,
        title: "Lasting Presence",
        description:
          "Presence of the Dark Lord temporarily reduces more armor after nearby enemy heroes are killed. Every hero kill increases Necromastery's max souls by 1 until Shadow Fiend dies.",
      },
      {
        id: 1,
        name: "nevermore_shadowmire",
        icon: "slow",
        color: "Red",
        gradient_id: 0,
        title: "Shadowmire",
        description: "Shadowraze slows enemies.",
      },
    ],
    npc_dota_hero_morphling: [
      {
        id: 0,
        name: "morphling_agi",
        icon: "agility",
        color: "Green",
        gradient_id: 0,
        title: "Ebb",
        description:
          "Morphling's Primary Attribute is now Agility and Adaptive Strike pushes enemies.",
        abilities: ["morphling_ebb"],
      },
      {
        id: 1,
        name: "morphling_str",
        icon: "strength",
        color: "Red",
        gradient_id: 0,
        title: "Flow",
        description:
          "Morphling's Primary Attribute is now Strength and Attribute Shift can accelerate his cooldowns.",
        abilities: ["morphling_flow"],
      },
    ],
    npc_dota_hero_phantom_lancer: [
      {
        id: 0,
        name: "phantom_lancer_convergence",
        icon: "illusion",
        color: "Yellow",
        gradient_id: 1,
        title: "Convergence",
        description:
          "Doppelganger spawns additional illusions, with the amount depending on Phantom Lancer's current health.",
      },
      {
        id: 1,
        name: "phantom_lancer_divergence",
        icon: "summons",
        color: "Blue",
        gradient_id: 2,
        title: "Divergence",
        description:
          "Juxtapose Illusions spawn on random nearby units and deal more damage but can't be controlled.",
      },
    ],
    npc_dota_hero_puck: [
      {
        id: 0,
        name: "puck_jostling_rift",
        icon: "movement",
        color: "Purple",
        gradient_id: 0,
        title: "Jostling Rift",
        description: "Waning Rift can push or pull targets.",
      },
      {
        id: 1,
        name: "puck_curveball",
        icon: "curve_ball",
        color: "Blue",
        gradient_id: 2,
        title: "Curveball",
        description:
          "Puck's Illusory Orb can be curved in any direction, moves faster, and lasts longer.",
      },
    ],
    npc_dota_hero_pudge: [
      {
        id: 0,
        name: "pudge_fresh_meat",
        icon: "meat",
        color: "Green",
        gradient_id: 3,
        title: "Fresh Meat",
        description:
          "Dismember increases Strength when dealing damage to heroes.",
      },
      {
        id: 1,
        name: "pudge_flayers_hook",
        icon: "pudge_hook",
        color: "Red",
        gradient_id: 0,
        title: "Flayer's Hook",
        description:
          "Meat Hook deals bonus damage based on the distance pulled, but base damage is reduced.",
      },
    ],
    npc_dota_hero_razor: [
      {
        id: 0,
        name: "razor_thunderhead",
        icon: "barrier",
        color: "Gray",
        gradient_id: 0,
        title: "Thunderhead",
        description:
          "Storm Surge lightning strikes more often and hits all units within Eye of the Storm's area of effect when it is active.",
      },
      {
        id: 1,
        name: "razor_spellamp",
        icon: "nuke",
        color: "Blue",
        gradient_id: 0,
        title: "Dynamo",
        description:
          "Razor gains 1% spell amplification for every 20 points of attack damage.",
        abilities: ["razor_dynamo"],
      },
    ],
    npc_dota_hero_sand_king: [
      {
        id: 0,
        name: "sand_king_sandshroud",
        icon: "vision",
        color: "Gray",
        gradient_id: 3,
        title: "Sandshroud",
        description:
          "Sand Storm has increased radius and grants Sand King Invisibility while in it.",
      },
      {
        id: 1,
        name: "sand_king_dust_devil",
        icon: "speed",
        color: "Yellow",
        gradient_id: 1,
        title: "Dust Devil",
        description:
          "Sand Storm follows Sand King when he moves or Burrowstrikes.",
      },
    ],
    npc_dota_hero_storm_spirit: [
      {
        id: 0,
        name: "storm_spirit_shock_collar",
        icon: "nuke",
        color: "Blue",
        gradient_id: 1,
        title: "Shock Collar",
        description:
          "Electric Vortex applies a debuff that triggers an Overload Charge if they attack.",
      },
      {
        id: 1,
        name: "storm_spirit_static_slide",
        icon: "movement",
        color: "Gray",
        gradient_id: 3,
        title: "Static Slide",
        description:
          "Static Remnants spawn at Storm Spirit and move to the target position.",
      },
    ],
    npc_dota_hero_sven: [
      {
        id: 0,
        name: "sven_heavy_plate",
        icon: "armor",
        color: "Blue",
        gradient_id: 0,
        title: "Heavy Plate",
        description: "Warcry provides a physical damage barrier.",
      },
      {
        id: 1,
        name: "sven_strscaling",
        icon: "strength",
        color: "Red",
        gradient_id: 0,
        title: "Wrath of God",
        description:
          "Sven gains additional attack damage from Strength, but has decreased base damage.",
        abilities: ["sven_wrath_of_god"],
      },
    ],
    npc_dota_hero_tiny: [
      {
        id: 0,
        name: "tiny_crash_landing",
        icon: "nuke",
        color: "Gray",
        gradient_id: 2,
        title: "Crash Landing",
        description:
          "Tossed units slow and deal bonus damage to other targets at the Toss destination.",
      },
      {
        id: 1,
        name: "tiny_insurmountable",
        icon: "armor",
        color: "Green",
        gradient_id: 4,
        title: "Insurmountable",
        description: "Tiny gains Status and Slow Resistance from Strength.",
        abilities: ["tiny_insurmountable"],
      },
    ],
    npc_dota_hero_vengefulspirit: [
      {
        id: 0,
        name: "vengefulspirit_avenging_missile",
        icon: "nuke",
        color: "Purple",
        gradient_id: 2,
        title: "Avenging Missile",
        description:
          "Magic Missile deals 0.75 bonus damage for every creep the enemy has killed.",
      },
      {
        id: 1,
        name: "vvengefulspirit_melee",
        icon: "fist",
        color: "Blue",
        gradient_id: 1,
        title: "Soul Strike",
        description:
          "Vengeful Spirit's ranged attacks behave as if they were melee attacks.",
        abilities: ["vengefulspirit_soul_strike"],
      },
    ],
    npc_dota_hero_windrunner: [
      {
        id: 0,
        name: "windrunner_tailwind",
        deprecated: "true",
        icon: "speed",
        color: "Yellow",
        gradient_id: 2,
        title: "Tailwind",
        description:
          "Windrun grants additional bonus movement speed to Windranger and nearby allies.",
      },
      {
        id: 1,
        name: "windrunner_focusfire",
        icon: "focus_fire",
        color: "Yellow",
        gradient_id: 2,
        title: "Focus Fire",
        description: "Focus Fire rapidly attacks a single target.",
      },
      {
        id: 2,
        name: "windrunner_whirlwind",
        icon: "multi_arrow",
        color: "Green",
        gradient_id: 0,
        title: "Whirlwind",
        description: "Focus Fire randomly attacks enemies within range.",
      },
    ],
    npc_dota_hero_zuus: [
      {
        id: 0,
        name: "zuus_livewire",
        icon: "range",
        color: "Blue",
        gradient_id: 1,
        title: "Livewire",
        description: "Static Field deals more damage to nearby enemies.",
      },
      {
        id: 1,
        name: "zuus_divine_rampage",
        icon: "nuke",
        color: "Gray",
        gradient_id: 3,
        title: "Divine Rampage",
        description:
          "When Thundergod's Wrath kills an enemy, it deals more damage to the other enemies.",
      },
    ],
    npc_dota_hero_kunkka: [
      {
        id: 0,
        name: "kunkka_high_tide",
        icon: "cooldown",
        color: "Blue",
        gradient_id: 2,
        title: "High Tide",
        description: "Tidebringer cooldown is reduced per enemy hero it hits.",
      },
      {
        id: 1,
        name: "kunkka_grog",
        icon: "armor",
        color: "Yellow",
        gradient_id: 2,
        title: "Grog Blossom",
        description:
          "When X Marks the Spot returns its target, nearby allies gain Ghostship's improved Admiral's Rum buff.",
      },
    ],
    npc_dota_hero_lina: [
      {
        id: 0,
        name: "lina_supercharge",
        icon: "damage",
        color: "Yellow",
        gradient_id: 0,
        title: "Thermal Runaway",
        description:
          "Casting Laguna Blade temporarily supercharges Lina, granting her stacks of Fiery Soul.",
      },
      {
        id: 1,
        name: "lina_dot",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Slow Burn",
        description: "Lina's spells deal extra damage over time.",
        abilities: ["lina_slow_burn"],
      },
    ],
    npc_dota_hero_lich: [
      {
        id: 0,
        name: "lich_frostbound",
        icon: "snowflake",
        color: "Blue",
        gradient_id: 0,
        title: "Frostbound",
        description:
          "Chain Frost lingers on its last target if it fails to bounce and can bounce again if new targets become available.",
      },
      {
        id: 1,
        name: "lich_growing_cold",
        icon: "cooldown",
        color: "Gray",
        gradient_id: 0,
        title: "Growing Cold",
        description:
          "When an enemy is killed by Chain Frost or while under the effect of Frost Shield, the duration of these abilities is extended.",
      },
    ],
    npc_dota_hero_lion: [
      {
        id: 0,
        name: "lion_essence_eater",
        icon: "nuke",
        color: "Purple",
        gradient_id: 2,
        title: "Essence Eater",
        description:
          "Mana Drain mana per second increased and damage equal to 100% of mana stolen.",
      },
      {
        id: 1,
        name: "lion_fist_of_death",
        icon: "fist",
        color: "Red",
        gradient_id: 2,
        title: "Fist of Death",
        description:
          "Lion gains a strong Melee cleaving attack after casting Finger of Death.",
      },
    ],
    npc_dota_hero_shadow_shaman: [
      {
        id: 0,
        name: "shadow_shaman_cluster_cluck",
        icon: "chicken",
        color: "Yellow",
        gradient_id: 1,
        title: "Cluster Cluck",
        description:
          "Hex can turn allies into a flock of chickens, removing other negative effects.",
      },
      {
        id: 1,
        name: "shadow_shaman_massive_serpent_ward",
        icon: "snake",
        color: "Red",
        gradient_id: 1,
        title: "Massive Serpent Ward",
        description:
          "Summons a single massive Serpent Ward with 10x damage and bounty values and 10x health.",
      },
    ],
    npc_dota_hero_slardar: [
      {
        id: 0,
        name: "slardar_leg_day",
        icon: "speed",
        color: "Red",
        gradient_id: 2,
        title: "Leg Day",
        description:
          "Slardar has slow resistance and even more movement speed at the beginning of Guardian Sprint.",
      },
      {
        id: 1,
        name: "slardar_brineguard",
        icon: "armor",
        color: "Purple",
        gradient_id: 1,
        title: "Brineguard",
        description:
          "Corrosive Haze increases Slardar's armor by 40% of the total armor reduced.",
      },
    ],
    npc_dota_hero_tidehunter: [
      {
        id: 0,
        name: "tidehunter_kraken_swell",
        icon: "armor",
        color: "Green",
        gradient_id: 2,
        title: "Kraken Swell",
        description:
          "Kraken Shell gains permanent Damage Block when an enemy hero dies under the effects of Anchor Smash.",
      },
      {
        id: 1,
        name: "tidehunter_sizescale",
        icon: "overshadow",
        color: "Green",
        gradient_id: 0,
        title: "Krill Eater",
        description: "Tidehunter grows larger and gains extra bonuses per level.",
        abilities: ["tidehunter_krill_eater"],
      },
    ],
    npc_dota_hero_witch_doctor: [
      {
        id: 0,
        name: "witch_doctor_headhunter",
        icon: "ricochet",
        color: "Gray",
        gradient_id: 3,
        title: "Headhunter",
        description: "Paralyzing Cask deals more damage each bounce.",
      },
      {
        id: 1,
        name: "witch_doctor_voodoo_festeration",
        icon: "nuke",
        color: "Red",
        gradient_id: 2,
        title: "Voodoo Festeration",
        description:
          "Voodoo Restoration deals damage to enemies and only heals Witch Doctor.",
      },
      {
        id: 2,
        name: "witch_doctor_cleft_death",
        icon: "death_ward",
        color: "Purple",
        gradient_id: 0,
        title: "Cleft Death",
        description: "Death Ward attacks multiple targets with reduced damage.",
      },
    ],
    npc_dota_hero_riki: [
      {
        id: 0,
        name: "riki_contract_killer",
        icon: "xp",
        color: "Gray",
        gradient_id: 3,
        title: "Contract Killer",
        description: "Riki receives bonus experience for assists and kills.",
      },
      {
        id: 1,
        name: "riki_exterminator",
        icon: "agility",
        color: "Purple",
        gradient_id: 2,
        title: "Exterminator",
        description:
          "Tricks of the Trade has 4.5x Agility Bonus when attacking non-hero units.",
      },
    ],
    npc_dota_hero_enigma: [
      {
        id: 0,
        name: "enigma_gravity",
        icon: "slow",
        color: "Gray",
        gradient_id: 3,
        title: "Event Horizon",
        description:
          "Units in a 600 radius moving away from Enigma have a 9% movespeed penalty.",
        abilities: ["enigma_event_horizon"],
      },
      {
        id: 1,
        name: "enigma_fragment",
        icon: "summons",
        color: "Purple",
        gradient_id: 0,
        title: "Splitting Image",
        description: "Enigma spawns Eidolons upon receiving damage.",
        abilities: ["enigma_splitting_image"],
      },
    ],
    npc_dota_hero_tinker: [
      {
        id: 0,
        name: "tinker_repair_bots",
        icon: "healing",
        color: "Blue",
        gradient_id: 2,
        title: "Repair Bots",
        description:
          "March of the Machines applies a non-stacking heal over time when passing through allied heroes.",
      },
      {
        id: 1,
        name: "tinker_translocator",
        icon: "movement",
        color: "Yellow",
        gradient_id: 2,
        title: "Translocator",
        description:
          "When a Self-Defense Matrix barrier on Tinker is fully absorbed, he blinks in a random forward direction.<br><br>DISPEL TYPE: Basic Dispel",
      },
    ],
    npc_dota_hero_sniper: [
      {
        id: 0,
        name: "sniper_ghillie_suit",
        icon: "vision",
        color: "Yellow",
        gradient_id: 0,
        title: "Ghillie Suit",
        description:
          "While Take Aim is active, Sniper's attacks do not reveal him from fog of war.",
      },
      {
        id: 1,
        name: "sniper_scattershot",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Scattershot",
        description:
          "Shrapnel slow and damage are increased, but duration is decreased.",
      },
    ],
    npc_dota_hero_necrolyte: [
      {
        id: 0,
        name: "necrolyte_profane_potency",
        icon: "area_of_effect",
        color: "Yellow",
        gradient_id: 2,
        title: "Profane Potency",
        description:
          "Sadist also grants Necrophos' AoE abilities and items bonus Radius per kill.",
      },
      {
        id: 1,
        name: "necrolyte_rapid_decay",
        icon: "speed",
        color: "Green",
        gradient_id: 3,
        title: "Rapid Decay",
        description: "Ghost Shroud steals speed from his enemies.",
      },
    ],
    npc_dota_hero_warlock: [
      {
        id: 0,
        name: "warlock_golem",
        icon: "summons",
        color: "Red",
        gradient_id: 0,
        title: "Champion of Gorroth",
        description:
          "Chaotic Offering Golems deal more burn damage based on Warlock's health and mana regeneration.",
      },
      {
        id: 1,
        name: "warlock_grimoire",
        icon: "xp",
        color: "Gray",
        gradient_id: 3,
        title: "Black Grimoire",
        description:
          "Grants Warlock the item Black Grimoire, which can be consumed to gain experience for each kill Warlock participated in. Starts with 1 charge.",
        abilities: ["warlock_black_grimoire"],
      },
    ],
    npc_dota_hero_beastmaster: [
      {
        id: 0,
        name: "beastmaster_wild_hunt",
        icon: "summons",
        color: "Red",
        gradient_id: 1,
        title: "Wild Hunt",
        description: "Beastmaster attacks faster when his units are nearby.",
      },
      {
        id: 1,
        name: "beastmaster_beast_mode",
        icon: "damage",
        color: "Yellow",
        gradient_id: 1,
        title: "Beast Mode",
        description:
          "Beastmaster can get a self attack speed and damage amplification boost.",
      },
    ],
    npc_dota_hero_queenofpain: [
      {
        id: 0,
        name: "queenofpain_lifesteal",
        icon: "healing",
        color: "Blue",
        gradient_id: 0,
        title: "Succubus",
        description:
          "Queen of Pain gains Spell Lifesteal that increases with proximity to her enemies.",
        abilities: ["queenofpain_succubus"],
      },
      {
        id: 1,
        name: "queenofpain_selfdmg",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Masochist",
        description:
          "Queen of Pain has bonus Spell Amplification but a percentage of her spell damage is reflected back to her.",
        abilities: ["queenofpain_masochist"],
      },
    ],
    npc_dota_hero_venomancer: [
      {
        id: 0,
        name: "venomancer_patient_zero",
        icon: "snot",
        color: "Green",
        gradient_id: 0,
        title: "Patient Zero",
        description: "Noxious Plague spreads again.",
      },
      {
        id: 1,
        name: "venomancer_plague_carrier",
        icon: "summons",
        color: "Yellow",
        gradient_id: 0,
        title: "Plague Carrier",
        description:
          "Plague Wards can be attached to allies and have extra charges.",
      },
    ],
    npc_dota_hero_faceless_void: [
      {
        id: 0,
        name: "faceless_void_temporal_impunity",
        deprecated: "true",
        icon: "armor",
        color: "Green",
        gradient_id: 0,
        title: "Temporal Impunity",
        description:
          "Prevents all damage for a short duration after casting Time Walk.",
      },
      {
        id: 1,
        name: "faceless_void_chronosphere",
        icon: "area_of_effect",
        color: "Green",
        gradient_id: 0,
        title: "Chronosphere",
        description:
          "Faceless Void can cast Chronosphere , trapping enemies in a sphere.",
        abilities: ["faceless_void_chronosphere"],
      },
      {
        id: 2,
        name: "faceless_void_time_zone",
        icon: "chrono_cube",
        color: "Purple",
        gradient_id: 1,
        title: "Time Zone",
        description:
          "Faceless Void can cast Time Zone , dramatically slowing down enemies and speeding up allies in an area.",
        abilities: ["faceless_void_time_zone"],
      },
    ],
    npc_dota_hero_skeleton_king: [
      {
        id: 0,
        name: "skeleton_king_facet_bone_guard",
        icon: "summons",
        color: "Yellow",
        gradient_id: 0,
        title: "Bone Guard",
        description: "Wraith King can summon skeletons to fight for him.",
        abilities: ["skeleton_king_bone_guard"],
      },
      {
        id: 1,
        name: "skeleton_king_facet_cursed_blade",
        icon: "damage",
        color: "Red",
        gradient_id: 0,
        title: "Spectral Blade",
        description:
          "Wraith King's attacks curse enemies, dealing additional damage after a delay.",
        abilities: ["skeleton_king_spectral_blade"],
      },
    ],
    npc_dota_hero_death_prophet: [
      {
        id: 0,
        name: "death_prophet_suppress",
        icon: "slow",
        color: "Purple",
        gradient_id: 2,
        title: "Suppress",
        description: "Silenced enemies are also slowed.",
      },
      {
        id: 1,
        name: "death_prophet_ghosts",
        icon: "spirit",
        color: "Green",
        gradient_id: 1,
        title: "Spirit Collector",
        description: "Hero deaths empower your next Exorcism.",
        abilities: ["death_prophet_spirit_collector"],
      },
      {
        id: 2,
        name: "death_prophet_delayed_damage",
        icon: "healing",
        color: "Red",
        gradient_id: 1,
        title: "Mourning Ritual",
        description:
          "Death Prophet delays a percentage of incoming damage, taking the damage in even intervals over a short duration.",
        abilities: ["death_prophet_mourning_ritual"],
      },
    ],
    npc_dota_hero_phantom_assassin: [
      {
        id: 0,
        name: "phantom_assassin_veiled_one",
        icon: "mana",
        color: "Blue",
        gradient_id: 3,
        title: "Veiled One",
        description:
          "Blur is no longer dispelled when attacking and reduces mana costs during and after Blur.",
      },
      {
        id: 1,
        name: "phantom_assassin_methodical",
        icon: "damage",
        color: "Gray",
        gradient_id: 0,
        title: "Methodical",
        description:
          "Coup de Grace procs every 6 attacks on the same hero or 4 attacks on non hero units.",
      },
    ],
    npc_dota_hero_pugna: [
      {
        id: 0,
        name: "pugna_siphoning_ward",
        icon: "healing",
        color: "Green",
        gradient_id: 0,
        title: "Siphoning Ward",
        description:
          "Nether Ward restores mana and health to Pugna based on how much damage is dealt.",
      },
      {
        id: 1,
        name: "pugna_rewards_of_ruin",
        icon: "siege",
        color: "Purple",
        gradient_id: 2,
        title: "Rewards of Ruin",
        description:
          "Pugna receives 1.25% spell amplification per destroyed tower.",
      },
    ],
    npc_dota_hero_templar_assassin: [
      {
        id: 0,
        name: "templar_assassin_voidblades",
        icon: "ricochet",
        color: "Gray",
        gradient_id: 3,
        title: "Voidblades",
        description:
          "Attacking a target with Meld also applies the bonus damage and debuff to enemies hit by the Psi Blades spill.",
      },
      {
        id: 1,
        name: "templar_assassin_refractor",
        icon: "damage",
        color: "Purple",
        gradient_id: 0,
        title: "Refractor",
        description:
          "Refraction gains a damage charge every time a shield charge gets consumed.",
      },
    ],
    npc_dota_hero_viper: [
      {
        id: 0,
        name: "viper_poison_burst",
        icon: "area_of_effect",
        color: "Green",
        gradient_id: 0,
        title: "Poison Burst",
        description:
          "After Poison Attack stacks expire, enemies around the target take additional damage.",
      },
      {
        id: 1,
        name: "viper_caustic_bath",
        icon: "armor",
        color: "Yellow",
        gradient_id: 2,
        title: "Caustic Bath",
        description:
          "Viper's Corrosive Skin effects are increased while he is in Nethertoxin.",
      },
    ],
    npc_dota_hero_luna: [
      {
        id: 0,
        name: "luna_lunar_orbit",
        deprecated: "true",
        icon: "armor",
        color: "Gray",
        gradient_id: 3,
        title: "Lunar Orbit Facet",
        description: "",
      },
      {
        id: 1,
        name: "luna_moonshield",
        icon: "armor",
        color: "Gray",
        gradient_id: 3,
        title: "Moonshield",
        description: "Lunar Orbit provide damage reduction while active.",
      },
      {
        id: 2,
        name: "luna_moonstorm",
        icon: "damage",
        color: "Blue",
        gradient_id: 1,
        title: "Moonstorm",
        description:
          "Hitting enemies with Lucent Beams or Eclipse grants Luna bonus attack damage.",
      },
    ],
    npc_dota_hero_dragon_knight: [
      {
        id: 0,
        name: "dragon_knight_fire_dragon",
        icon: "dragon_fire",
        color: "Red",
        gradient_id: 1,
        title: "Fire Dragon",
        description:
          "Dragon Knight has Splash Damage on his attacks that get stronger when in Elder Dragon Form.",
      },
      {
        id: 1,
        name: "dragon_knight_corrosive_dragon",
        icon: "dragon_poison",
        color: "Green",
        gradient_id: 0,
        title: "Corrosive Dragon",
        description:
          "Dragon Knight has Corrosive Powers on his attacks that get stronger when in Elder Dragon Form.",
      },
      {
        id: 2,
        name: "dragon_knight_frost_dragon",
        icon: "dragon_frost",
        color: "Blue",
        gradient_id: 0,
        title: "Frost Dragon",
        description:
          "Dragon Knight has Slow and Healing Reduction Effects on his attacks that get stronger when in Elder Dragon Form.",
      },
    ],
    npc_dota_hero_dazzle: [
      {
        id: 0,
        name: "dazzle_facet_nothl_boon",
        icon: "armor",
        color: "Red",
        gradient_id: 1,
        title: "Nothl Boon",
        description: "Dazzle's overhealing is converted into a barrier.",
        abilities: ["dazzle_nothl_boon"],
      },
      {
        id: 1,
        name: "dazzle_poison_bloom",
        icon: "ricochet",
        color: "Purple",
        gradient_id: 0,
        title: "Poison Bloom",
        description:
          "Dazzle can refresh and spread his Poison Touch when attacking enemies.",
      },
    ],
    npc_dota_hero_rattletrap: [
      {
        id: 0,
        name: "rattletrap_hookup",
        icon: "cooldown",
        color: "Gray",
        gradient_id: 2,
        title: "Hookup",
        description:
          "When hitting an ally, Hookshot has a larger impact radius, grants armor, and partially refunds its cooldown and manacost.",
      },
      {
        id: 1,
        name: "rattletrap_expanded_armature",
        icon: "area_of_effect",
        color: "Red",
        gradient_id: 2,
        title: "Expanded Armature",
        description: "Power Cogs form in a larger radius.",
      },
    ],
    npc_dota_hero_leshrac: [
      {
        id: 0,
        name: "leshrac_attacks_mana",
        icon: "mana",
        color: "Blue",
        gradient_id: 1,
        title: "Chronoptic Nourishment",
        description: "Leshrac's attacks restore mana.",
        abilities: ["leshrac_chronoptic_nourishment"],
      },
      {
        id: 1,
        name: "leshrac_misanthropy",
        icon: "nuke",
        color: "Purple",
        gradient_id: 0,
        title: "Misanthropy",
        description:
          "Diabolic Edict explosion rate increased but it no longer damages buildings.",
      },
    ],
    npc_dota_hero_furion: [
      {
        id: 0,
        name: "furion_soothing_saplings",
        icon: "healing",
        color: "Green",
        gradient_id: 0,
        title: "Soothing Saplings",
        description:
          "Allies inside and nearby on the outside of Sprout are healed over time.",
      },
      {
        id: 1,
        name: "furion_ironwood_treant",
        icon: "siege",
        color: "Blue",
        gradient_id: 2,
        title: "Ironwood Treant",
        description:
          "Nature's Call creates only 1 =1 =1 =1 Treant that has more health, more damage, increased vision, increased movement speed, and is Reinforced.",
      },
    ],
    npc_dota_hero_life_stealer: [
      {
        id: 0,
        name: "life_stealer_maxhp_gain",
        deprecated: "true",
        icon: "armor",
        color: "Yellow",
        gradient_id: 3,
        title: "Corpse Eater",
        description:
          "Lifestealer gains 1 HP whenever he kills a creep, and 15 whenever he kills a hero.",
        abilities: ["life_stealer_corpse_eater"],
      },
      {
        id: 1,
        name: "life_stealer_rage",
        icon: "lifestealer_rage",
        color: "Yellow",
        gradient_id: 3,
        title: "Rage",
        description:
          "Lifestealer can cast Rage , becoming Debuff Immune and increasing magic resistance.",
        abilities: ["life_stealer_rage"],
      },
      {
        id: 2,
        name: "life_stealer_rage_dispell",
        icon: "broken_chain",
        color: "Red",
        gradient_id: 0,
        title: "Unfettered",
        description:
          "Lifestealer can cast Unfettered to dispel himself and become more resilient. Can cast while stunned.",
        abilities: ["life_stealer_unfettered"],
      },
    ],
    npc_dota_hero_dark_seer: [
      {
        id: 0,
        name: "dark_seer_atkspd",
        icon: "damage",
        color: "Gray",
        gradient_id: 3,
        title: "Quick Wit",
        description: "Dark Seer also gains Attack Speed from Intelligence.",
        abilities: ["dark_seer_quick_wit"],
      },
      {
        id: 1,
        name: "dark_seer_movespd",
        icon: "speed",
        color: "Purple",
        gradient_id: 2,
        title: "Heart of Battle",
        description: "Dark Seer moves faster when near other heroes.",
        abilities: ["dark_seer_heart_of_battle"],
      },
    ],
    npc_dota_hero_clinkz: [
      {
        id: 0,
        name: "clinkz_suppressive_fire",
        icon: "no_vision",
        color: "Gray",
        gradient_id: 3,
        title: "Suppressive Fire",
        description: "Strafe attacks cause enemies to miss more often.",
      },
      {
        id: 1,
        name: "clinkz_engulfing_step",
        icon: "teleport",
        color: "Yellow",
        gradient_id: 0,
        title: "Engulfing Step",
        description:
          "Death Pact teleports Clinkz towards his victim. Reduces Death Pact cooldown.",
      },
    ],
    npc_dota_hero_omniknight: [
      {
        id: 0,
        name: "omniknight_omnipresent",
        icon: "damage",
        color: "Gray",
        gradient_id: 3,
        title: "Omnipresent",
        description:
          "Omniknight deals more damage to heroes inside his Degen Aura.",
      },
      {
        id: 1,
        name: "omniknight_dmgheals",
        icon: "healing",
        color: "Yellow",
        gradient_id: 0,
        title: "Healing Hammer",
        description:
          "Ability damage done to enemies by Omniknight heals him over time.",
        abilities: ["omniknight_healing_hammer"],
      },
    ],
    npc_dota_hero_enchantress: [
      {
        id: 0,
        name: "enchantress_overprotective_wisps",
        icon: "healing",
        color: "Green",
        gradient_id: 0,
        title: "Overprotective Wisps",
        description: "Summon Healing Wisps upon receiving damage.",
      },
      {
        id: 1,
        name: "enchantress_spellbound",
        icon: "range",
        color: "Yellow",
        gradient_id: 2,
        title: "Spellbound",
        description: "Enchant and attacks on Enchanted targets have extra range.",
      },
    ],
    npc_dota_hero_huskar: [
      {
        id: 0,
        name: "huskar_bloodbath",
        icon: "area_of_effect",
        color: "Red",
        gradient_id: 0,
        title: "Bloodbath",
        description:
          "Life Break also slows enemies in a radius around the target.",
      },
      {
        id: 1,
        name: "huskar_nothl_transfusion",
        icon: "healing",
        color: "Blue",
        gradient_id: 2,
        title: "Nothl Transfusion",
        description:
          "Life Break also heals friendly units in a radius around the target.",
      },
      {
        id: 2,
        name: "huskar_nothl_conflagration",
        icon: "damage",
        color: "Yellow",
        gradient_id: 0,
        title: "Incendiary",
        description:
          "Burning Spears also burns enemies for a percentage of their max health. Costs Max Health instead of Current Health. Reduces burn duration.",
      },
    ],
    npc_dota_hero_night_stalker: [
      {
        id: 0,
        name: "night_stalker_blinding_void",
        icon: "no_vision",
        color: "Blue",
        gradient_id: 0,
        title: "Blinding Void",
        description:
          "Enemies affected by Void do not share vision with their allies. Affected enemies take damage per second when they are not visible to their allies.",
      },
      {
        id: 1,
        name: "night_stalker_dayswap",
        icon: "moon",
        color: "Gray",
        gradient_id: 0,
        title: "Night Reign",
        description:
          "The game now starts at night instead of day. Night is longer than day.",
        abilities: ["night_stalker_night_reign"],
      },
    ],
    npc_dota_hero_broodmother: [
      {
        id: 0,
        name: "broodmother_necrotic_webs",
        icon: "debuff",
        color: "Gray",
        gradient_id: 0,
        title: "Necrotic Webs",
        description: "Reduces health regeneration of enemies on webs.",
      },
      {
        id: 1,
        name: "broodmother_feeding_frenzy",
        icon: "summons",
        color: "Red",
        gradient_id: 0,
        title: "Feeding Frenzy",
        description: "Insatiable Hunger also applies to nearby Spiderlings.",
      },
    ],
    npc_dota_hero_bounty_hunter: [
      {
        id: 0,
        name: "bounty_hunter_shuriken",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Through and Through",
        description:
          "Shuriken Toss applies its damage and slow to all enemies it passes through.",
      },
      {
        id: 1,
        name: "bounty_hunter_mugging",
        icon: "gold",
        color: "Yellow",
        gradient_id: 0,
        title: "Cutpurse",
        description:
          "Bounty Hunter steals gold when targeting enemy heroes with his abilities or items.",
        abilities: ["bounty_hunter_cutpurse"],
      },
    ],
    npc_dota_hero_weaver: [
      {
        id: 0,
        name: "weaver_skitterstep",
        icon: "speed",
        color: "Red",
        gradient_id: 0,
        title: "Skitterstep",
        description:
          "Shukuchi movespeed increased and slows enemies when passing through them.",
      },
      {
        id: 1,
        name: "weaver_hivemind",
        icon: "xp",
        color: "Blue",
        gradient_id: 1,
        title: "Hivemind",
        description:
          "Weaver gains experience when The Swarm beetles attack heroes.",
      },
    ],
    npc_dota_hero_jakiro: [
      {
        id: 0,
        name: "jakiro_fire",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Liquid Fire",
        description:
          "Jakiro can imbue his attacks with Attack Speed Slow and Damage over Time in an AoE.",
        abilities: ["jakiro_liquid_fire"],
      },
      {
        id: 1,
        name: "jakiro_ice",
        icon: "snowflake",
        color: "Blue",
        gradient_id: 1,
        title: "Liquid Frost",
        description:
          "Jakiro can imbue his attacks with Movement Speed Slow and a debuff that amplifies damage from his other spells.",
        abilities: ["jakiro_liquid_ice"],
      },
    ],
    npc_dota_hero_batrider: [
      {
        id: 0,
        name: "batrider_buff_on_displacement",
        icon: "speed",
        color: "Yellow",
        gradient_id: 1,
        title: "Stoked",
        description:
          "Batrider gains Move Speed and Spell Amplification when displacing enemies.",
        abilities: ["batrider_stoked"],
      },
      {
        id: 1,
        name: "batrider_arsonist",
        icon: "siege",
        color: "Red",
        gradient_id: 0,
        title: "Arsonist",
        description: "Sticky Napalm deals damage to structures.",
      },
    ],
    npc_dota_hero_chen: [
      {
        id: 0,
        name: "chen_centaur_convert",
        icon: "area_of_effect",
        color: "Blue",
        gradient_id: 3,
        title: "Centaur Convert",
        description:
          "Summon Convert calls forth either a Centaur Courser or Centaur Conqueror.",
      },
      {
        id: 1,
        name: "chen_wolf_convert",
        icon: "damage",
        color: "Yellow",
        gradient_id: 2,
        title: "Wolf Convert",
        description:
          "Summon Convert calls forth either a Giant Wolf or Alpha Wolf.",
      },
      {
        id: 2,
        name: "chen_hellbear_convert",
        icon: "slow",
        color: "Red",
        gradient_id: 0,
        title: "Hellbear Convert",
        description:
          "Summon Convert calls forth either a Hellbear or Hellbear Smasher.",
      },
      {
        id: 3,
        name: "chen_troll_convert",
        icon: "summons",
        color: "Green",
        gradient_id: 0,
        title: "Troll Convert",
        description:
          "Summon Convert calls forth either a Hill Troll or Dark Troll Summoner.",
      },
      {
        id: 4,
        name: "chen_satyr_convert",
        icon: "mana",
        color: "Purple",
        gradient_id: 1,
        title: "Satyr Convert",
        description:
          "Summon Convert calls forth either a Satyr Mindstealer or Satyr Tormenter.",
      },
    ],
    npc_dota_hero_spectre: [
      {
        id: 0,
        name: "spectre_forsaken",
        icon: "spectre",
        color: "Gray",
        gradient_id: 0,
        title: "Forsaken",
        description:
          "Desolate can deal partial damage to enemies and is applied by Spectral Dagger.",
      },
      {
        id: 1,
        name: "spectre_twist_the_knife",
        icon: "nuke",
        color: "Purple",
        gradient_id: 2,
        title: "Twist the Knife",
        description:
          "Reality also casts Spectral Dagger on the target and has a decreased cooldown.",
      },
    ],
    npc_dota_hero_doom_bringer: [
      {
        id: 0,
        name: "doom_bringer_gluttony",
        icon: "meat",
        color: "Red",
        gradient_id: 0,
        title: "Gluttony",
        description:
          "Devour now has 2 charges and stolen creep abilities are upgraded by one level.",
      },
      {
        id: 1,
        name: "doom_bringer_boost_selling",
        icon: "gold",
        color: "Yellow",
        gradient_id: 0,
        title: "Devil's Bargain",
        description:
          "Doom can sell items for 90% of their value, but his buyback costs are increased by 15%.",
        abilities: ["doom_bringer_devils_bargain"],
      },
      {
        id: 2,
        name: "doom_bringer_impending_doom",
        icon: "cooldown",
        color: "Gray",
        gradient_id: 0,
        title: "Impending Doom",
        description:
          "Every 6.66 minutes, Doom's duration is increased by 0.66s. Doom DPS decreased.",
      },
    ],
    npc_dota_hero_ancient_apparition: [
      {
        id: 0,
        name: "ancient_apparition_bone_chill",
        icon: "debuff",
        color: "Gray",
        gradient_id: 3,
        title: "Bone Chill",
        description:
          "Ancient Apparition's abilities reduce the enemy's Strength.",
      },
      {
        id: 1,
        name: "ancient_apparition_exposure",
        icon: "area_of_effect",
        color: "Blue",
        gradient_id: 0,
        title: "Exposure",
        description:
          "Cold Feet applies in an AoE, depending on the current level of Ice Blast.",
      },
    ],
    npc_dota_hero_ursa: [
      {
        id: 0,
        name: "ursa_grudge_bearer",
        icon: "damage",
        color: "Red",
        gradient_id: 0,
        title: "Grudge Bearer",
        description:
          "When damaged during Enrage, Ursa gains bonus attack damage.",
      },
      {
        id: 1,
        name: "ursa_debuff_reduce",
        icon: "cooldown",
        color: "Blue",
        gradient_id: 0,
        title: "Bear Down",
        description: "Debuffs inflicted by Ursa last longer.",
        abilities: ["ursa_bear_down"],
      },
    ],
    npc_dota_hero_spirit_breaker: [
      {
        id: 0,
        name: "spirit_breaker_bull_rush",
        icon: "speed",
        color: "Red",
        gradient_id: 1,
        title: "Bull Rush",
        description:
          "Charge of Darkness bonus movement speed lingers after charge ends.",
      },
      {
        id: 1,
        name: "spirit_breaker_imbalanced",
        icon: "movement",
        color: "Blue",
        gradient_id: 2,
        title: "Imbalanced",
        description:
          "Enemy targets hit by Nether Strike will be moved further by allied forced movement effects.",
      },
    ],
    npc_dota_hero_gyrocopter: [
      {
        id: 0,
        name: "gyrocopter_secondary_strikes",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Secondary Strikes",
        description:
          "Call Down creates delayed secondary explosions around heroes it hits.",
      },
      {
        id: 1,
        name: "gyrocopter_afterburner",
        icon: "speed",
        color: "Yellow",
        gradient_id: 1,
        title: "Afterburner",
        description:
          "Every successful hit of a Rocket Barrage rocket on an enemy hero increases Gyrocopter's movement speed.",
      },
    ],
    npc_dota_hero_alchemist: [
      {
        id: 0,
        name: "alchemist_seed_money",
        icon: "gold",
        color: "Yellow",
        gradient_id: 0,
        title: "Seed Money",
        description: "Alchemist starts with 250 more gold.",
      },
      {
        id: 1,
        name: "alchemist_mixologist",
        icon: "cooldown",
        color: "Purple",
        gradient_id: 2,
        title: "Mixologist",
        description:
          "Unstable Concoction and Berserk Potion recharge faster when in Chemical Rage.",
      },
    ],
    npc_dota_hero_invoker: [
      {
        id: 0,
        name: "invoker_agnostic",
        icon: "invoker_passive",
        color: "Purple",
        gradient_id: 0,
        title: "Agnostic",
        description:
          "Your orbs passively grant <font color='#7998b5'>Damage Over Time</font>, <font color='#d671a9'>Attack Speed</font> and <font color='#cabe68'>Attack Damage</font> when leveled.",
      },
      {
        id: 1,
        name: "invoker_elitist",
        icon: "invoker_active",
        color: "Gray",
        gradient_id: 0,
        title: "Elitist",
        description:
          "Your active orbs grant <font color='#7998b5'>Lifesteal</font>, <font color='#d671a9'>Movespeed</font> and <font color='#cabe68'>Spell Amplification</font>.",
      },
    ],
    npc_dota_hero_silencer: [
      {
        id: 0,
        name: "silencer_irrepressible",
        icon: "silencer",
        color: "Purple",
        gradient_id: 1,
        title: "Irrepressible",
        description: "Silencer cannot be silenced.",
        abilities: ["silencer_irrepressible"],
      },
      {
        id: 1,
        name: "silencer_reverberating_silence",
        icon: "debuff",
        color: "Gray",
        gradient_id: 3,
        title: "Reverberating Silence",
        description:
          "The first time Global Silence ends on a unit it is applied again.",
      },
    ],
    npc_dota_hero_obsidian_destroyer: [
      {
        id: 0,
        name: "obsidian_destroyer_obsidian_decimator",
        icon: "mana",
        color: "Blue",
        gradient_id: 0,
        title: "Obsidian Decimator",
        description:
          "When Essence Flux restores mana, it also temporarily increases maximum mana.",
      },
      {
        id: 1,
        name: "obsidian_destroyer_overwhelming_devourer",
        icon: "healing",
        color: "Blue",
        gradient_id: 2,
        title: "Overwhelming Devourer",
        description:
          "Heroes affected by Astral Imprisonment and Sanity's Eclipse heal Outworld Destroyer every time they cast a spell.",
      },
    ],
    npc_dota_hero_lycan: [
      {
        id: 0,
        name: "lycan_pack_leader",
        icon: "summons",
        color: "Gray",
        gradient_id: 1,
        title: "Pack Leader",
        description:
          "Enemy heroes killed by Lycan or his units extend Shapeshift duration.",
      },
      {
        id: 1,
        name: "lycan_spirit_wolves",
        icon: "spirit",
        color: "Red",
        gradient_id: 0,
        title: "Spirit Wolves",
        description:
          "Summon Wolves creates invulnerable non-attacking wolves that buff Lycan's health and attack damage.",
      },
      {
        id: 2,
        name: "lycan_alpha_wolves",
        icon: "wolf",
        color: "Green",
        gradient_id: 2,
        title: "Alpha Wolves",
        description:
          "Increases the max level of Summon Wolves while lowering the max level of Howl and Feral Impulse.",
      },
    ],
    npc_dota_hero_brewmaster: [
      {
        id: 0,
        name: "brewmaster_roll_out_the_barrel",
        icon: "nuke",
        color: "Red",
        gradient_id: 1,
        title: "Roll Out the Barrel",
        description:
          "Throw a barrel at enemies, damaging them and applying Cinder Brew.",
      },
      {
        id: 1,
        name: "brewmaster_drunken_master",
        icon: "speed",
        color: "Yellow",
        gradient_id: 1,
        title: "Drunken Master",
        description:
          "When brewed up, Brewmaster moves with a varying amount of movement speed, altering between 15% slower and 50% faster for the duration.",
      },
    ],
    npc_dota_hero_shadow_demon: [
      {
        id: 0,
        name: "shadow_demon_promulgate",
        icon: "nuke",
        color: "Gray",
        gradient_id: 0,
        title: "Promulgate",
        description:
          "Disseminate instantly removes a percentage of the opponent's health for its duration.",
      },
      {
        id: 1,
        name: "shadow_demon_facet_soul_mastery",
        icon: "illusion",
        color: "Purple",
        gradient_id: 0,
        title: "Shadow Servant",
        description:
          "Shadow Demon creates illusions of heroes that die near him.",
        abilities: ["shadow_demon_shadow_servant"],
      },
    ],
    npc_dota_hero_lone_druid: [
      {
        id: 0,
        name: "lone_druid_bear_with_me",
        icon: "healing",
        color: "Green",
        gradient_id: 1,
        title: "Bear with Me",
        description:
          "Spirit Link's Shared Armor is increased and Lone Druid's attacks heal the Spirit Bear.",
      },
      {
        id: 1,
        name: "lone_druid_unbearable",
        icon: "overshadow",
        color: "Yellow",
        gradient_id: 1,
        title: "Unbearable",
        description:
          "True Form transforms the Spirit Bear instead of Lone Druid. Increases the distance from Lone Druid at which the Spirit Bear can attack.",
      },
      {
        id: 2,
        name: "lone_druid_bear_necessities",
        icon: "item",
        color: "Gray",
        gradient_id: 1,
        title: "Bear Necessities",
        description:
          "Lone Druid's items are more powerful and his inventory is smaller.",
        abilities: ["lone_druid_bear_necessities"],
      },
    ],
    npc_dota_hero_chaos_knight: [
      {
        id: 0,
        name: "chaos_knight_strong_illusions",
        icon: "illusion",
        color: "Red",
        gradient_id: 1,
        title: "Phantasmagoria",
        description:
          "All Chaos Knight Illusions are Strong Illusions and take less damage when near him.",
        abilities: ["chaos_knight_phantasmagoria"],
      },
      {
        id: 1,
        name: "chaos_knight_irrationality",
        icon: "rng",
        color: "Gray",
        gradient_id: 0,
        title: "Irrationality",
        description:
          "Reality Rift has equal chances of applying Break, Disarm, or Silence for 50% of the base debuff duration in addition to its normal effects.",
      },
    ],
    npc_dota_hero_meepo: [
      {
        id: 0,
        name: "meepo_more_meepo",
        icon: "summons",
        color: "Blue",
        gradient_id: 2,
        title: "More Meepo",
        description: "Obtain extra Meepos sooner and get 1 extra Meepo.",
      },
      {
        id: 1,
        name: "meepo_pack_rat",
        icon: "item",
        color: "Yellow",
        gradient_id: 1,
        title: "Pack Rat",
        description: "All Meepos can use the item in the neutral item slot. ",
        abilities: ["meepo_pack_rat"],
      },
    ],
    npc_dota_hero_treant: [
      {
        id: 0,
        name: "treant_primeval_power",
        icon: "damage",
        color: "Yellow",
        gradient_id: 2,
        title: "Primeval Power",
        description: "Treant gains +5 base attack damage per hero level.",
      },
      {
        id: 1,
        name: "treant_sapling",
        icon: "tree",
        color: "Green",
        gradient_id: 2,
        title: "Sapling",
        description: "Leech Seed can be ground targeted to plant a tree.",
      },
    ],
    npc_dota_hero_ogre_magi: [
      {
        id: 0,
        name: "ogre_magi_fat_chance",
        icon: "rng",
        color: "Red",
        gradient_id: 0,
        title: "Fat Chance",
        description:
          "Multicast chance is increased by  0.06% of Ogre Magi's Strength.",
      },
      {
        id: 1,
        name: "ogre_magi_learning_curve",
        icon: "ogre",
        color: "Blue",
        gradient_id: 1,
        title: "Learning Curve",
        description:
          "Level requirement of all spells and talents reduced by 1. You get 0 Ability Points at level one and 3 Ability Points at level two.",
      },
    ],
    npc_dota_hero_undying: [
      {
        id: 0,
        name: "undying_rotting_mitts",
        icon: "summons",
        color: "Green",
        gradient_id: 4,
        title: "Rotting Mitts",
        description:
          "While transformed into a Flesh Golem, attacks spawn a zombie.",
      },
      {
        id: 1,
        name: "undying_ripped",
        icon: "strength",
        color: "Red",
        gradient_id: 1,
        title: "Ripped",
        description:
          "Casting Soul Rip on allies increases their Strength by a percentage of Undying's Strength.",
      },
    ],
    npc_dota_hero_rubick: [
      {
        id: 0,
        name: "rubick_frugal_filch",
        icon: "mana",
        color: "Purple",
        gradient_id: 2,
        title: "Frugal Filch",
        description: "Stolen spells also have lower mana cost.",
      },
      {
        id: 1,
        name: "rubick_arcane_accumulation",
        icon: "area_of_effect",
        color: "Green",
        gradient_id: 0,
        title: "Arcane Accumulation",
        description:
          "Casting a spell temporarily increases the area of effect for all subsequent spells.",
      },
    ],
    npc_dota_hero_disruptor: [
      {
        id: 0,
        name: "disruptor_thunderstorm",
        icon: "area_of_effect",
        color: "Red",
        gradient_id: 1,
        title: "Thunderstorm",
        description:
          "Thunder Strike additionally hits all enemies within Kinetic Field.",
      },
      {
        id: 1,
        name: "disruptor_line_walls",
        icon: "fence",
        color: "Blue",
        gradient_id: 1,
        title: "Kinetic Fence",
        description:
          "Replaces Kinetic Field with the ability to create impassable walls.",
        abilities: ["disruptor_kinetic_fence"],
      },
    ],
    npc_dota_hero_nyx_assassin: [
      {
        id: 0,
        name: "nyx_assassin_burn_mana",
        icon: "nuke",
        color: "Blue",
        gradient_id: 3,
        title: "Mana Burn",
        description: "Nyx Assassin's ability damage burns enemies' mana.",
        abilities: ["nyx_assassin_innate_mana_burn"],
      },
      {
        id: 1,
        name: "nyx_assassin_scuttle",
        icon: "speed",
        color: "Red",
        gradient_id: 2,
        title: "Scuttle",
        description:
          "For the first 15s of Vendetta, Nyx is hasted and has unobstructed pathing.",
      },
    ],
    npc_dota_hero_naga_siren: [
      {
        id: 0,
        name: "naga_siren_passive_riptide",
        icon: "armor_broken",
        color: "Yellow",
        gradient_id: 2,
        title: "Rip Tide",
        description:
          "Every 6 attacks from Naga and her illusions, enemies around them are damaged and their Armor is reduced.",
        abilities: ["naga_siren_rip_tide"],
      },
      {
        id: 1,
        name: "naga_siren_active_riptide",
        icon: "nuke",
        color: "Green",
        gradient_id: 2,
        title: "Deluge",
        description:
          "Naga Siren can create a splash around herself and her illusions, damaging enemies and reducing their Status Resistance.",
        abilities: ["naga_siren_deluge"],
      },
    ],
    npc_dota_hero_keeper_of_the_light: [
      {
        id: 0,
        name: "keeper_of_the_light_facet_solar_bind",
        icon: "slow",
        color: "Yellow",
        gradient_id: 1,
        title: "Solar Bind",
        description: "Grants the Solar Bind ability while active.",
        abilities: ["keeper_of_the_light_radiant_bind"],
      },
      {
        id: 1,
        name: "keeper_of_the_light_facet_recall",
        icon: "teleport",
        color: "Gray",
        gradient_id: 3,
        title: "Recall",
        description:
          "After a short delay, teleports the targeted friendly hero to your location. If the targeted friendly hero takes player based damage during this time, the ability is interrupted. When cast, the teleport target's movement speed is increased. Upon teleporting, Chakra Magic and the increased movement speed buff are applied to both Keeper of the Light and the teleport target.\\n\\n If alt-cast, teleports Keeper of the Light to the target Ally instead. \\n\\n Ability Level increases with levels of Spirit Form.",
        abilities: ["keeper_of_the_light_recall"],
      },
    ],
    npc_dota_hero_wisp: [
      {
        id: 0,
        name: "wisp_kritzkrieg",
        icon: "damage",
        color: "Blue",
        gradient_id: 3,
        title: "Kritzkrieg",
        description:
          "Overcharge grants attack speed and spell amplification to Io and any Tethered allies.",
      },
      {
        id: 1,
        name: "wisp_medigun",
        icon: "armor",
        color: "Gray",
        gradient_id: 3,
        title: "Medigun",
        description:
          "Overcharge grants armor and magic resistance to Io and any Tethered allies.",
      },
    ],
    npc_dota_hero_visage: [
      {
        id: 0,
        name: "visage_sepulchre",
        icon: "area_of_effect",
        color: "Gray",
        gradient_id: 0,
        title: "Sepulchre",
        description:
          "Grave Chill also affects units around the target. Visage can also recall his familiars.",
      },
      {
        id: 1,
        name: "visage_faithful_followers",
        icon: "summons",
        color: "Blue",
        gradient_id: 2,
        title: "Faithful Followers",
        description:
          "Familiars automatically move with Visage and attack his targets.",
      },
      {
        id: 2,
        name: "visage_gold_assumption",
        icon: "gold",
        color: "Yellow",
        gradient_id: 0,
        title: "Death Toll",
        description:
          "Soul Assumption kills give up to 105 140 175 210 bonus gold.",
      },
    ],
    npc_dota_hero_slark: [
      {
        id: 0,
        name: "slark_leeching_leash",
        icon: "agility",
        color: "Green",
        gradient_id: 2,
        title: "Leeching Leash",
        description:
          "Pounce applies stacks of Essence Shift when striking enemy heroes.",
      },
      {
        id: 1,
        name: "slark_dark_reef_renegade",
        icon: "cooldown",
        color: "Blue",
        gradient_id: 2,
        title: "Dark Reef Renegade",
        description:
          "Barracuda lingers after being revealed to the enemy if Slark is not nearby allied heroes.",
      },
    ],
    npc_dota_hero_medusa: [
      {
        id: 0,
        name: "medusa_engorged",
        icon: "snake",
        color: "Green",
        gradient_id: 1,
        title: "Engorged",
        description: "Mystic Snake grants Medusa attack damage.",
      },
      {
        id: 1,
        name: "medusa_mana_pact",
        deprecated: "true",
        icon: "mana",
        color: "Blue",
        gradient_id: 1,
        title: "Mana Pact",
        description:
          "Medusa can gain attack speed at the cost of mana over time.",
      },
      {
        id: 2,
        name: "medusa_slow_attacks",
        icon: "slow",
        color: "Yellow",
        gradient_id: 2,
        title: "Venomous Volley",
        description:
          "Every 5 attacks, Medusa applies poison to her arrow that briefly reduces movement speed, attack speed, and cast speed.",
        abilities: ["medusa_venomed_volley"],
      },
    ],
    npc_dota_hero_troll_warlord: [
      {
        id: 0,
        name: "troll_warlord_insensitive",
        icon: "armor",
        color: "Blue",
        gradient_id: 2,
        title: "Insensitive",
        description: "Fervor grants armor per stack while in melee form.",
      },
      {
        id: 1,
        name: "troll_warlord_bad_influence",
        icon: "damage",
        color: "Red",
        gradient_id: 1,
        title: "Bad Influence",
        description:
          "Battle Trance grants allied heroes 40% of the attack speed bonus.",
      },
    ],
    npc_dota_hero_centaur: [
      {
        id: 0,
        name: "centaur_counter_strike",
        icon: "nuke",
        color: "Red",
        gradient_id: 1,
        title: "Counter-Strike",
        description: "Double Edge damage is increased when Centaur is attacked.",
      },
      {
        id: 1,
        name: "centaur_horsepower",
        icon: "speed",
        color: "Gray",
        gradient_id: 3,
        title: "Horsepower",
        description:
          "Centaur Warrunner gains Movement Speed based on his Strength.",
        abilities: ["centaur_horsepower"],
      },
    ],
    npc_dota_hero_magnataur: [
      {
        id: 0,
        name: "magnataur_run_through",
        deprecated: "true",
        icon: "movement",
        color: "Gray",
        gradient_id: 3,
        title: "Run Through",
        description:
          "Skewer deals bonus damage when pushing enemies through trees and cliffs.",
      },
      {
        id: 1,
        name: "magnataur_reverse_polarity",
        icon: "vortex_in",
        color: "Gray",
        gradient_id: 3,
        title: "Reverse Polarity",
        description: "Reverse Polarity pulls all nearby enemies in.",
      },
      {
        id: 2,
        name: "magnataur_reverse_reverse_polarity",
        icon: "vortex_out",
        color: "Gray",
        gradient_id: 0,
        title: "Reverse Reverse Polarity",
        description: "Reverse Polarity pushes enemies away all around Magnus.",
      },
    ],
    npc_dota_hero_shredder: [
      {
        id: 0,
        name: "shredder_shredder",
        icon: "tree",
        color: "Green",
        gradient_id: 0,
        title: "Shredder",
        description:
          "Timber Chain splinters the tree into all directions around Timbersaw.",
      },
      {
        id: 1,
        name: "shredder_second_chakram",
        icon: "spinning",
        color: "Red",
        gradient_id: 1,
        title: "Twisted Chakram",
        description:
          "Launches a second independent Chakram that follows a curved path and returns to Timbersaw, damaging and slowing enemies it passes through. Enemies caught in the saw blade will move more slowly for every 5% of health missing.",
        abilities: ["shredder_twisted_chakram"],
      },
    ],
    npc_dota_hero_bristleback: [
      {
        id: 0,
        name: "bristleback_berserk",
        icon: "damage",
        color: "Yellow",
        gradient_id: 0,
        title: "Berserk",
        description: "Warpath grants scaling Attack Speed instead of Damage.",
      },
      {
        id: 1,
        name: "bristleback_snot_rocket",
        icon: "snot",
        color: "Green",
        gradient_id: 0,
        title: "Snot Rocket",
        description:
          "Bristleback now fires Viscous Nasal Goo instead of Quills when damaged. Viscous Nasal Goo effects are stronger.",
      },
      {
        id: 2,
        name: "bristleback_seeing_red",
        icon: "no_vision",
        color: "Red",
        gradient_id: 0,
        title: "Seeing Red",
        description:
          "Warpath can be activated to gain extra bonuses. While Seeing Red, Bristleback's vision is limited and he does not share vision with his allies.",
      },
    ],
    npc_dota_hero_tusk: [
      {
        id: 0,
        name: "tusk_facet_tag_team",
        icon: "damage",
        color: "Blue",
        gradient_id: 3,
        title: "Tag Team",
        description:
          "Tusk can cast Tag Team causing nearby enemies to receive bonus damage from attacks.",
        abilities: ["tusk_tag_team"],
      },
      {
        id: 1,
        name: "tusk_facet_fist_bump",
        icon: "movement",
        color: "Yellow",
        gradient_id: 0,
        title: "Drinking Buddies",
        description:
          "Tusk can cast Drinking Buddies , pulling him and a teammate closer and granting both bonus Movement Speed and Attack Damage.",
        abilities: ["tusk_drinking_buddies"],
      },
    ],
    npc_dota_hero_skywrath_mage: [
      {
        id: 0,
        name: "skywrath_mage_shield",
        icon: "armor",
        color: "Blue",
        gradient_id: 0,
        title: "Shield of the Scion",
        description:
          "Skywrath Mage gains a magic damage barrier when dealing damage to heroes.",
        abilities: ["skywrath_mage_shield_of_the_scion"],
      },
      {
        id: 1,
        name: "skywrath_mage_staff",
        icon: "cooldown",
        color: "Yellow",
        gradient_id: 2,
        title: "Staff of the Scion",
        description:
          "Skywrath Mage's Cooldowns are reduced when he deals spell damage to enemy heroes.",
        abilities: ["skywrath_mage_staff_of_the_scion"],
      },
    ],
    npc_dota_hero_abaddon: [
      {
        id: 0,
        name: "abaddon_death_dude",
        icon: "cooldown",
        color: "Gray",
        gradient_id: 0,
        title: "The Quickening",
        description: "Units dying nearby Abaddon lower his cooldowns.",
        abilities: ["abaddon_the_quickening"],
      },
      {
        id: 1,
        name: "abaddon_mephitic_shroud",
        icon: "barrier",
        color: "Blue",
        gradient_id: 1,
        title: "Mephitic Shroud",
        description:
          "Aphotic Shield absorbs more damage and reflects damage when received instead of exploding at the end.",
      },
    ],
    npc_dota_hero_elder_titan: [
      {
        id: 0,
        name: "elder_titan_deconstruction",
        icon: "armor_broken",
        color: "Blue",
        gradient_id: 2,
        title: "Deconstruction",
        description: "Natural Order drains Magic Resistance and Armor over time.",
      },
      {
        id: 1,
        name: "elder_titan_boost_atkspd",
        icon: "damage",
        color: "Yellow",
        gradient_id: 0,
        title: "Momentum",
        description:
          "Elder Titan's Base Attack Speed is reduced but his Movement Speed also grants Attack Speed.",
        abilities: ["elder_titan_momentum"],
      },
    ],
    npc_dota_hero_legion_commander: [
      {
        id: 0,
        name: "legion_commander_stonehall_plate",
        icon: "armor",
        color: "Yellow",
        gradient_id: 1,
        title: "Stonehall Plate",
        description:
          "Overwhelming Odds grants an all damage barrier based on the damage it deals to enemy heroes.",
      },
      {
        id: 1,
        name: "legion_commander_spoils_of_war",
        icon: "damage",
        color: "Red",
        gradient_id: 0,
        title: "Spoils of War",
        description:
          "When a Duel is won, units that damaged the loser during the Duel will receive a small amount of permanent damage.",
      },
    ],
    npc_dota_hero_ember_spirit: [
      {
        id: 0,
        name: "ember_spirit_double_impact",
        icon: "fist",
        color: "Red",
        gradient_id: 0,
        title: "Double Impact",
        description: "Sleight of Fist hits one of its targets an extra time.",
      },
      {
        id: 1,
        name: "ember_spirit_chain_gang",
        icon: "debuff",
        color: "Yellow",
        gradient_id: 1,
        title: "Chain Gang",
        description:
          "Searing Chains affect 1 more enemy and also spawn from Fire Remnants.",
      },
    ],
    npc_dota_hero_earth_spirit: [
      {
        id: 0,
        name: "earth_spirit_resonance",
        icon: "damage",
        color: "Green",
        gradient_id: 0,
        title: "Resonance",
        description: "Gain bonus Attack Damage when Magnetizing Stone Remnants.",
      },
      {
        id: 1,
        name: "earth_spirit_stepping_stone",
        icon: "cooldown",
        color: "Gray",
        gradient_id: 2,
        title: "Stepping Stone",
        description:
          "Stone Remnant has a {s:bonus_AbilityCooldown}s cooldown instead of Charges and Remnants don't get destroyed by Rolling Boulder.",
      },
      {
        id: 2,
        name: "earth_spirit_ready_to_roll",
        icon: "spinning",
        color: "Yellow",
        gradient_id: 1,
        title: "Ready to Roll",
        description:
          "Rolling Boulder can roll over allied heroes for additional bonuses.",
      },
    ],
    npc_dota_hero_terrorblade: [
      {
        id: 0,
        name: "terrorblade_condemned",
        icon: "twin_hearts",
        color: "Gray",
        gradient_id: 0,
        title: "Condemned",
        description: "There is no minimum health threshold for Sundered enemies.",
      },
      {
        id: 1,
        name: "terrorblade_soul_fragment",
        icon: "illusion",
        color: "Blue",
        gradient_id: 2,
        title: "Soul Fragment",
        description:
          "Conjure Image illusions always spawn at full health, but has an additional health cost.",
      },
    ],
    npc_dota_hero_phoenix: [
      {
        id: 0,
        name: "phoenix_facet_immolate",
        icon: "barrier",
        color: "Red",
        gradient_id: 2,
        title: "Dying Light",
        description:
          "Phoenix deals 4.5% of his missing health as magic damage to all enemies in a 400 radius every second.",
        abilities: ["phoenix_dying_light"],
      },
      {
        id: 1,
        name: "phoenix_hotspot",
        icon: "nuke",
        color: "Red",
        gradient_id: 1,
        title: "Hotspot",
        description: "Sun Ray deals more damage towards the tip of the ray.",
      },
    ],
    npc_dota_hero_oracle: [
      {
        id: 0,
        name: "oracle_facet_dmg",
        icon: "nuke",
        color: "Red",
        gradient_id: 2,
        title: "Clairvoyant Curse",
        description: "Spell amplification increased by 0.75% per hero level.",
        abilities: ["oracle_clairvoyant_curse"],
      },
      {
        id: 1,
        name: "oracle_facet_heal",
        icon: "healing",
        color: "Green",
        gradient_id: 1,
        title: "Clairvoyant Cure",
        description: "Heal amplification increased by 0.75% per hero level.",
        abilities: ["oracle_clairvoyant_cure"],
      },
    ],
    npc_dota_hero_techies: [
      {
        id: 0,
        name: "techies_atk_range",
        icon: "range",
        color: "Gray",
        gradient_id: 0,
        title: "Squee's Scope",
        description:
          "Techies gains 1 attack range and attack projectile speed for each point of attack speed.",
        abilities: ["techies_squees_scope"],
      },
      {
        id: 1,
        name: "techies_spleens_secret_sauce",
        icon: "nuke",
        color: "Red",
        gradient_id: 0,
        title: "Spleen's Secret Sauce",
        description: "Increased Blast Off! damage and self damage.",
      },
      {
        id: 2,
        name: "techies_backpack",
        icon: "item",
        color: "Blue",
        gradient_id: 1,
        title: "Spoon's Stash",
        description:
          "Techies can use items in their backpack as if they were in their inventory.",
        abilities: ["techies_spoons_stash"],
      },
    ],
    npc_dota_hero_winter_wyvern: [
      {
        id: 0,
        name: "winter_wyvern_heal_mana",
        icon: "mana",
        color: "Blue",
        gradient_id: 0,
        title: "Essence of the Blueheart",
        description: "Winter Wyvern's heals also restore mana.",
        abilities: ["winter_wyvern_essence_of_the_blueheart"],
      },
      {
        id: 1,
        name: "winter_wyvern_atk_range",
        icon: "damage",
        color: "Gray",
        gradient_id: 3,
        title: "Dragon Sight",
        description:
          "Winter Wyvern gains bonus damage when her attack range is over 400.",
        abilities: ["winter_wyvern_dragon_sight"],
      },
    ],
    npc_dota_hero_arc_warden: [
      {
        id: 0,
        name: "arc_warden_order",
        icon: "arc_warden",
        color: "Gray",
        gradient_id: 3,
        title: "Order",
        description:
          "Arc Warden and Tempest Double have their respective ability effects.",
      },
      {
        id: 1,
        name: "arc_warden_disorder",
        icon: "arc_warden_alt",
        color: "Gray",
        gradient_id: 0,
        title: "Disorder",
        description:
          "Arc Warden and Tempest Double have their ability effects swapped.",
      },
    ],
    npc_dota_hero_abyssal_underlord: [
      {
        id: 0,
        name: "abyssal_underlord_demons_reach",
        icon: "area_of_effect",
        color: "Green",
        gradient_id: 0,
        title: "Demon's Reach",
        description:
          "Underlord's attacks cleave while he has bonus damage from Atrophy Aura.",
      },
      {
        id: 1,
        name: "abyssal_underlord_summons",
        icon: "summons",
        color: "Yellow",
        gradient_id: 3,
        title: "Abyssal Horde",
        description: "Fiend's Gate periodically summons minions.",
        abilities: ["abyssal_underlord_abyssal_horde"],
      },
    ],
    npc_dota_hero_monkey_king: [
      {
        id: 0,
        name: "monkey_king_wukongs_faithful",
        icon: "summons",
        color: "Red",
        gradient_id: 2,
        title: "Wukong's Faithful",
        description:
          "Monkey King's soldiers last longer and do not disperse unless he spends more than 3.0 seconds outside the area.",
      },
      {
        id: 1,
        name: "monkey_king_simian_stride",
        icon: "tree",
        color: "Green",
        gradient_id: 4,
        title: "Simian Stride",
        description:
          "Tree Dance has no cooldown while Monkey King is above 90% health.",
      },
    ],
    npc_dota_hero_pangolier: [
      {
        id: 0,
        name: "pangolier_double_jump",
        icon: "double_bounce",
        color: "Red",
        gradient_id: 1,
        title: "Double Jump",
        description:
          "Pangolier can double jump with Shield Crash dealing more damage and gaining more barrier.",
      },
      {
        id: 1,
        name: "pangolier_thunderbolt",
        icon: "speed",
        color: "Yellow",
        gradient_id: 1,
        title: "Thunderbolt",
        description:
          "Rolling Thunder movement and turn speed increased, but duration is decreased.",
      },
    ],
    npc_dota_hero_dark_willow: [
      {
        id: 0,
        name: "dark_willow_throwing_shade",
        icon: "damage",
        color: "Purple",
        gradient_id: 1,
        title: "Throwing Shade",
        description:
          "Dark Willow deals more damage to nearby heroes when she's in the Shadow Realm.",
      },
      {
        id: 1,
        name: "dark_willow_thorny_thicket",
        icon: "area_of_effect",
        color: "Green",
        gradient_id: 4,
        title: "Thorny Thicket",
        description: "Bramble Maze creates extra brambles.",
      },
    ],
    npc_dota_hero_grimstroke: [
      {
        id: 0,
        name: "grimstroke_inkstigate",
        icon: "area_of_effect",
        color: "Gray",
        gradient_id: 0,
        title: "Inkstigate",
        description: "Ink Swell can be manually detonated early.",
      },
      {
        id: 1,
        name: "grimstroke_fine_art",
        icon: "brush",
        color: "Red",
        gradient_id: 1,
        title: "Fine Art",
        description:
          "Stroke of Fate can now be vector targeted to manipulate the ink's travel path.",
      },
    ],
    npc_dota_hero_mars: [
      {
        id: 0,
        name: "mars_victory_feast",
        icon: "healing",
        color: "Red",
        gradient_id: 2,
        title: "Victory Feast",
        description:
          "Mars gains health, mana, and attack damage when an enemy inside his Arena of Blood dies.",
      },
      {
        id: 1,
        name: "mars_arena",
        icon: "no_vision",
        color: "Yellow",
        gradient_id: 0,
        title: "Blood Sport",
        description:
          "Enemies inside the Arena of Blood don't have vision outside the arena.",
      },
    ],
    npc_dota_hero_void_spirit: [
      {
        id: 0,
        name: "void_spirit_sanctuary",
        icon: "armor",
        color: "Purple",
        gradient_id: 1,
        title: "Sanctuary",
        description:
          "Resonant Pulse creates a larger all damage barrier instead of a physical barrier.",
      },
      {
        id: 1,
        name: "void_spirit_phys_barrier",
        deprecated: "true",
        icon: "nuke",
        color: "Gray",
        gradient_id: 3,
        title: "Symmetry",
        description:
          "Void Spirit gains a physical damage barrier when dealing magic damage to enemy heroes.",
        abilities: ["void_spirit_symmetry"],
      },
      {
        id: 2,
        name: "void_spirit_aether_artifice",
        icon: "illusion",
        color: "Gray",
        gradient_id: 3,
        title: "Call of the Void",
        description:
          "Upon exiting Dissimilate, Aether Remnants are created at the 3 portals furthest from Void Spirit.",
      },
    ],
    npc_dota_hero_snapfire: [
      {
        id: 0,
        name: "snapfire_ricochet_ii",
        icon: "ricochet",
        color: "Gray",
        gradient_id: 3,
        title: "Ricochet II",
        description:
          "Whenever Snapfire glances or misses an attack, 2 ricochet attacks will bounce towards nearby enemies.",
      },
      {
        id: 1,
        name: "snapfire_full_bore",
        icon: "range",
        color: "Red",
        gradient_id: 0,
        title: "Full Bore",
        description:
          "Scatterblast is narrower and longer. Bonus damage and slow when enemies are not in point blank range.",
      },
    ],
    npc_dota_hero_hoodwink: [
      {
        id: 0,
        name: "hoodwink_hunter",
        icon: "range",
        color: "Yellow",
        gradient_id: 0,
        title: "Go Nuts",
        description: "Scurry also provides bonus attack and cast range.",
      },
      {
        id: 1,
        name: "hoodwink_treebounce_trickshot",
        icon: "tree",
        color: "Green",
        gradient_id: 0,
        title: "Treebounce Trickshot",
        description: "Acorn Shot can bounce once on trees.",
      },
    ],
    npc_dota_hero_dawnbreaker: [
      {
        id: 0,
        name: "dawnbreaker_solar_charged",
        icon: "cooldown",
        color: "Gray",
        gradient_id: 3,
        title: "Solar Charged",
        description:
          "Whenever Dawnbreaker hits a target with a powered up Luminosity, she decreases the cooldowns of all of her abilities.",
      },
      {
        id: 1,
        name: "dawnbreaker_gleaming_hammer",
        icon: "dawnbreaker_hammer",
        color: "Yellow",
        gradient_id: 1,
        title: "Gleaming Hammer",
        description:
          "Celestial Hammer heals allies and damages enemies when on the ground.",
      },
    ],
    npc_dota_hero_marci: [
      {
        id: 0,
        name: "marci_sidekick",
        icon: "healing",
        color: "Gray",
        gradient_id: 3,
        title: "Sidekick",
        description:
          "Marci can protect an ally, granting them shared lifesteal and damage. Effect is stronger if she's close to the ally.",
        abilities: ["marci_guardian"],
      },
      {
        id: 1,
        name: "marci_bodyguard",
        icon: "ricochet",
        color: "Blue",
        gradient_id: 1,
        title: "Bodyguard",
        description:
          "Marci can protect an ally, countering attacks directed towards them if she's in range of the enemy.",
        abilities: ["marci_bodyguard"],
      },
    ],
    npc_dota_hero_primal_beast: [
      {
        id: 0,
        name: "primal_beast_romp_n_stomp",
        icon: "speed",
        color: "Red",
        gradient_id: 0,
        title: "Romp n' Stomp",
        description:
          "Trample grants bonus movement speed to Primal Beast and his allies when activated.",
      },
      {
        id: 1,
        name: "primal_beast_ferocity",
        icon: "area_of_effect",
        color: "Yellow",
        gradient_id: 3,
        title: "Ferocity",
        description:
          "Each Pulverize hit increases the AoE bonuses of Primal Beast's abilities and items.",
      },
    ],
    npc_dota_hero_muerta: [
      {
        id: 0,
        name: "muerta_dance_of_the_dead",
        icon: "spirit",
        color: "Green",
        gradient_id: 1,
        title: "Dance of the Dead",
        description: "The Calling becomes stronger when heroes die inside it.",
      },
      {
        id: 1,
        name: "muerta_ofrenda",
        icon: "teleport",
        color: "Yellow",
        gradient_id: 0,
        title: "Ofrenda",
        description:
          "Muerta can place a beneficial Ofrenda on the map to respawn there instead of the fountain.",
        abilities: ["muerta_ofrenda"],
      },
    ],
    npc_dota_hero_ringmaster: [
      {
        id: 0,
        name: "ringmaster_default",
        icon: "item",
        color: "Gray",
        gradient_id: 3,
        title: "Center Stage",
        description:
          "Ringmaster is still new to the spotlight. This facet doesn't do anything... yet.",
      },
    ],
  };
  