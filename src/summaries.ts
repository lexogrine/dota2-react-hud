import { Player } from "dotagsi";

export const BOUNTY_RUNES_REASON_ID = 17;

const CUSTOM_GOLD_REASON_MIDAS = -1;
const GOLD_REASON_CREEP_KILL = 13;
const MIDAS_GOLD_PER_USE = 160;

const RuneTypes = [
  "haste",
  "arcane",
  "bounty",
  "double_damage",
  "illusion",
  "invisibility",
  "regeneration",
  "water",
] as const;

type RuneType = (typeof RuneTypes)[number];

export enum GoldReason {
  Unspecified = 0,
  Death = 1,
  Buyback = 2,
  PurchaseConsumable = 3,
  PurchaseItem = 4,
  AbandonedRedistribute = 5,
  SellItem = 6,
  AbilityCost = 7,
  CheatCommand = 8,
  SelectionPenalty = 9,
  GameTick = 10,
  Building = 11,
  HeroKill = 12,
  CreepKill = 13,
  RoshanKill = 14,
  CourierKill = 15,
  SharedGold = 16,
  BountyRune = 17,
  Midas = CUSTOM_GOLD_REASON_MIDAS,
}

type GoldReasonSummary = { [goldReason: number]: number };

type EnemyType = "melee" | "ranged" | "siege" | "summon" | "neutral" | "other";

type GoldEnemyTypeSummary = {
  [enemy in EnemyType]: number;
};

const summonEnemyNameChecks = [
  "_beastmaster_boar",
  "_death_ward",
  "_brewmaster_earth",
  "_eidolon",
  "_visage_familiar",
  "_brewmaster_fire",
  "_invoker_forged_spirit",
  "_furion_treant",
  "_scout_hawk",
  "_lycan_wolf",
  "_lycan_wolf",
  "_necromonicon",
  "_necromonicon",
  "_necromonicon",
  "_necromonicon",
  "_dark_troll_warlord_skeleton_warrior",
  "_broodmother_spiderite",
  "_broodmother_spiderling",
  "_broodmother_web",
  "_lone_druid_bear",
  "_brewmaster_storm",
  "_furion_treant",
  "_undying_zombie",
  "_warlock_golem",
  "_elder_titan_ancestral_spirit",
];

const enemyNameToType = (name: string): EnemyType => {
  if (name.includes("_neutral")) {
    return "neutral";
  }

  if (name.includes("_creep")) {
    if (name.includes("_melee")) {
      return "melee";
    }

    if (name.includes("_ranged")) {
      return "ranged";
    }
  }

  if (name.includes("_siege")) {
    return "siege";
  }

  for (const summonNameCheck of summonEnemyNameChecks) {
    if (name.includes(summonNameCheck)) {
      return "summon";
    }
  }

  return "other";
};

type Channelling = {
	lastTimestamp: number;
	lastRealTimeTimestamp: string;
	isCurrentlyChannelling: boolean;
	channellingTimes: number;
};

type EnemyTypeInProgress = {
	killedEnemy?: string;
	killedAt?: number;
};

type AbilityStats = {
	[skillName: string]: {
		hitCount: number;
		useCount: number;
	};
};

export type PlayerSummary = {
	goldReasonSummary: GoldReasonSummary;
	goldEnemyTypeSummary: GoldEnemyTypeSummary;
	activeRunes: RuneType[];
	bountyRuneTimeline: BountyRuneData[];

	enemyTypeInProgress: EnemyTypeInProgress;
	chanellings: Channelling;
	abilityStats: AbilityStats;
	towerDamage: number;
};

export type PlayerSummaries = { [hero: string]: PlayerSummary };

export type CreepKill = {
	playerName: string;
	creepName: string;
};

export type AbilityUse = {
	playerName: string;
	abilityName: string;
	abilityLevel: number;
};

export type AbilityHit = {
	playerName: string;
	abilityName: string;
	targetName: string;
};

export type TickSummary = {
	creepsKilled: CreepKill[];
	abilitiesUsed: AbilityUse[];
	abilitiesHit: AbilityHit[];
};

export type BountyRuneData = {
	time: number;
	gold: number;
};

export type GameSummary = {
	players: PlayerSummaries;
	tickSummary: TickSummary;
};


export const findPlayerSummary = (
  summary: GameSummary | null | undefined,
  player: Player
) => {
  return summary &&
    summary.players &&
    player.hero &&
    player.hero.name &&
    player.hero.name in summary.players
    ? summary.players[player.hero.name]
    : null;
};

export type EnrichedPlayerData = Player & { summary: PlayerSummary | null };

export const enrichPossiblePlayerData = (
  summary: GameSummary | null | undefined,
  player: Player | null | undefined
) => {
  return player
    ? { ...player, summary: findPlayerSummary(summary, player) }
    : null;
};

export const enrichPlayerData = (
  summary: GameSummary | null | undefined,
  player: Player
) => {
  return { ...player, summary: findPlayerSummary(summary, player) };
};
