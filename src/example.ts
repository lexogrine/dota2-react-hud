import { Dota2Raw } from "dotagsi";

export const exampleData = {
    "provider": {
      "name": "Dota 2",
      "appid": 570,
      "version": 47,
      "timestamp": 1628270293
    },
    "map": {
      "name": "start",
      "matchid": "6081890096",
      "game_time": 2097,
      "clock_time": 1162,
      "daytime": false,
      "nightstalker_night": false,
      "game_state": "DOTA_GAMERULES_STATE_GAME_IN_PROGRESS",
      "paused": false,
      "win_team": "none",
      "customgamename": "",
      "radiant_ward_purchase_cooldown": 0,
      "dire_ward_purchase_cooldown": 98,
      "roshan_state": "respawn_base",
      "roshan_state_end_seconds": 410,
      "radiant_win_chance": 44
    },
    "buildings": {
      "radiant": {
        "dota_goodguys_tower1_top": {
          "health": 997,
          "max_health": 1800
        },
        "dota_goodguys_tower2_top": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_goodguys_tower3_top": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_goodguys_tower1_mid": {
          "health": 241,
          "max_health": 1800
        },
        "dota_goodguys_tower2_mid": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_goodguys_tower3_mid": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_goodguys_tower2_bot": {
          "health": 1804,
          "max_health": 2500
        },
        "dota_goodguys_tower3_bot": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_goodguys_tower4_top": {
          "health": 2600,
          "max_health": 2600
        },
        "dota_goodguys_tower4_bot": {
          "health": 2600,
          "max_health": 2600
        },
        "good_rax_melee_top": {
          "health": 2200,
          "max_health": 2200
        },
        "good_rax_range_top": {
          "health": 1300,
          "max_health": 1300
        },
        "good_rax_melee_mid": {
          "health": 2200,
          "max_health": 2200
        },
        "good_rax_range_mid": {
          "health": 1300,
          "max_health": 1300
        },
        "good_rax_melee_bot": {
          "health": 2200,
          "max_health": 2200
        },
        "good_rax_range_bot": {
          "health": 1300,
          "max_health": 1300
        },
        "dota_goodguys_fort": {
          "health": 4500,
          "max_health": 4500
        }
      },
      "dire": {
        "dota_badguys_tower2_top": {
          "health": 2496,
          "max_health": 2500
        },
        "dota_badguys_tower3_top": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_badguys_tower2_mid": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_badguys_tower3_mid": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_badguys_tower1_bot": {
          "health": 1260,
          "max_health": 1800
        },
        "dota_badguys_tower2_bot": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_badguys_tower3_bot": {
          "health": 2500,
          "max_health": 2500
        },
        "dota_badguys_tower4_top": {
          "health": 2600,
          "max_health": 2600
        },
        "dota_badguys_tower4_bot": {
          "health": 2600,
          "max_health": 2600
        },
        "bad_rax_melee_top": {
          "health": 2200,
          "max_health": 2200
        },
        "bad_rax_range_top": {
          "health": 1300,
          "max_health": 1300
        },
        "bad_rax_melee_mid": {
          "health": 2200,
          "max_health": 2200
        },
        "bad_rax_range_mid": {
          "health": 1300,
          "max_health": 1300
        },
        "bad_rax_melee_bot": {
          "health": 2200,
          "max_health": 2200
        },
        "bad_rax_range_bot": {
          "health": 1300,
          "max_health": 1300
        },
        "dota_badguys_fort": {
          "health": 4500,
          "max_health": 4500
        }
      }
    },
    "player": {
      "team2": {
        "player0": {
          "steamid": "76561197979938082",
          "name": "N0tail",
          "activity": "playing",
          "kills": 1,
          "deaths": 2,
          "assists": 7,
          "last_hits": 49,
          "denies": 3,
          "kill_streak": 1,
          "commands_issued": 3482,
          "kill_list": {
            "victimid_8": 1
          },
          "team_name": "radiant",
          "gold": 332,
          "gold_reliable": 203,
          "gold_unreliable": 129,
          "gold_from_hero_kills": 580,
          "gold_from_creep_kills": 290,
          "gold_from_income": 2022,
          "gold_from_shared": 388,
          "gpm": 254,
          "xpm": 356,
          "net_worth": 4607,
          "hero_damage": 4505,
          "wards_purchased": 20,
          "wards_placed": 9,
          "wards_destroyed": 2,
          "runes_activated": 1,
          "camps_stacked": 12,
          "support_gold_spent": 655,
          "consumable_gold_spent": 1235,
          "item_gold_spent": 4275,
          "gold_lost_to_death": 49,
          "gold_spent_on_buybacks": 0
        },
        "player1": {
          "steamid": "76561198071885769",
          "name": "SumaiL",
          "activity": "playing",
          "kills": 3,
          "deaths": 1,
          "assists": 6,
          "last_hits": 137,
          "denies": 19,
          "kill_streak": 3,
          "commands_issued": 3596,
          "kill_list": {
            "victimid_5": 1,
            "victimid_6": 1,
            "victimid_8": 1
          },
          "team_name": "radiant",
          "gold": 2215,
          "gold_reliable": 579,
          "gold_unreliable": 1636,
          "gold_from_hero_kills": 1055,
          "gold_from_creep_kills": 3670,
          "gold_from_income": 2022,
          "gold_from_shared": 471,
          "gpm": 483,
          "xpm": 529,
          "net_worth": 9870,
          "hero_damage": 8137,
          "wards_purchased": 0,
          "wards_placed": 0,
          "wards_destroyed": 1,
          "runes_activated": 2,
          "camps_stacked": 0,
          "support_gold_spent": 0,
          "consumable_gold_spent": 550,
          "item_gold_spent": 7700,
          "gold_lost_to_death": 5,
          "gold_spent_on_buybacks": 0
        },
        "player2": {
          "steamid": "76561198048536965",
          "name": "Ceb",
          "activity": "playing",
          "kills": 2,
          "deaths": 6,
          "assists": 8,
          "last_hits": 86,
          "denies": 8,
          "kill_streak": 0,
          "commands_issued": 8550,
          "kill_list": {
            "victimid_6": 2
          },
          "team_name": "radiant",
          "gold": 938,
          "gold_reliable": 782,
          "gold_unreliable": 156,
          "gold_from_hero_kills": 859,
          "gold_from_creep_kills": 2740,
          "gold_from_income": 2022,
          "gold_from_shared": 451,
          "gpm": 365,
          "xpm": 359,
          "net_worth": 5648,
          "hero_damage": 6095,
          "wards_purchased": 0,
          "wards_placed": 3,
          "wards_destroyed": 0,
          "runes_activated": 0,
          "camps_stacked": 1,
          "support_gold_spent": 0,
          "consumable_gold_spent": 570,
          "item_gold_spent": 4835,
          "gold_lost_to_death": 713,
          "gold_spent_on_buybacks": 623
        },
        "player3": {
          "steamid": "76561198064001473",
          "name": "Saksa",
          "activity": "playing",
          "kills": 3,
          "deaths": 5,
          "assists": 8,
          "last_hits": 26,
          "denies": 9,
          "kill_streak": 0,
          "commands_issued": 7713,
          "kill_list": {
            "victimid_5": 1,
            "victimid_7": 2
          },
          "team_name": "radiant",
          "gold": 57,
          "gold_reliable": 57,
          "gold_unreliable": 0,
          "gold_from_hero_kills": 1185,
          "gold_from_creep_kills": 651,
          "gold_from_income": 2022,
          "gold_from_shared": 498,
          "gpm": 245,
          "xpm": 298,
          "net_worth": 3732,
          "hero_damage": 9387,
          "wards_purchased": 20,
          "wards_placed": 11,
          "wards_destroyed": 2,
          "runes_activated": 3,
          "camps_stacked": 0,
          "support_gold_spent": 400,
          "consumable_gold_spent": 1230,
          "item_gold_spent": 3375,
          "gold_lost_to_death": 248,
          "gold_spent_on_buybacks": 479
        },
        "player4": {
          "steamid": "76561198054320440",
          "name": "Topson",
          "activity": "playing",
          "kills": 4,
          "deaths": 4,
          "assists": 5,
          "last_hits": 83,
          "denies": 13,
          "kill_streak": 0,
          "commands_issued": 9419,
          "kill_list": {
            "victimid_5": 2,
            "victimid_7": 1,
            "victimid_8": 1
          },
          "team_name": "radiant",
          "gold": 1176,
          "gold_reliable": 578,
          "gold_unreliable": 598,
          "gold_from_hero_kills": 1118,
          "gold_from_creep_kills": 2358,
          "gold_from_income": 2022,
          "gold_from_shared": 406,
          "gpm": 374,
          "xpm": 439,
          "net_worth": 6821,
          "hero_damage": 12058,
          "wards_purchased": 0,
          "wards_placed": 0,
          "wards_destroyed": 0,
          "runes_activated": 9,
          "camps_stacked": 1,
          "support_gold_spent": 80,
          "consumable_gold_spent": 850,
          "item_gold_spent": 5490,
          "gold_lost_to_death": 333,
          "gold_spent_on_buybacks": 0
        }
      },
      "team3": {
        "player5": {
          "steamid": "76561198042528392",
          "name": "KuroKy",
          "activity": "playing",
          "kills": 3,
          "deaths": 4,
          "assists": 8,
          "last_hits": 22,
          "denies": 4,
          "kill_streak": 0,
          "commands_issued": 3428,
          "kill_list": {
            "victimid_1": 1,
            "victimid_2": 1,
            "victimid_3": 1
          },
          "team_name": "dire",
          "gold": 280,
          "gold_reliable": 220,
          "gold_unreliable": 60,
          "gold_from_hero_kills": 1246,
          "gold_from_creep_kills": 812,
          "gold_from_income": 2022,
          "gold_from_shared": 587,
          "gpm": 240,
          "xpm": 358,
          "net_worth": 3380,
          "hero_damage": 8330,
          "wards_purchased": 17,
          "wards_placed": 9,
          "wards_destroyed": 3,
          "runes_activated": 0,
          "camps_stacked": 0,
          "support_gold_spent": 350,
          "consumable_gold_spent": 1420,
          "item_gold_spent": 3250,
          "gold_lost_to_death": 234,
          "gold_spent_on_buybacks": 471
        },
        "player6": {
          "steamid": "76561197994770931",
          "name": "MinD_ContRoL",
          "activity": "playing",
          "kills": 2,
          "deaths": 3,
          "assists": 7,
          "last_hits": 111,
          "denies": 12,
          "kill_streak": 0,
          "commands_issued": 4722,
          "kill_list": {
            "victimid_3": 1,
            "victimid_4": 1
          },
          "team_name": "dire",
          "gold": 1019,
          "gold_reliable": 622,
          "gold_unreliable": 397,
          "gold_from_hero_kills": 836,
          "gold_from_creep_kills": 3034,
          "gold_from_income": 2022,
          "gold_from_shared": 432,
          "gpm": 372,
          "xpm": 446,
          "net_worth": 6734,
          "hero_damage": 11826,
          "wards_purchased": 3,
          "wards_placed": 2,
          "wards_destroyed": 0,
          "runes_activated": 2,
          "camps_stacked": 0,
          "support_gold_spent": 50,
          "consumable_gold_spent": 730,
          "item_gold_spent": 5815,
          "gold_lost_to_death": 434,
          "gold_spent_on_buybacks": 0
        },
        "player7": {
          "steamid": "76561198065514372",
          "name": "Miracle-",
          "activity": "playing",
          "kills": 6,
          "deaths": 3,
          "assists": 8,
          "last_hits": 84,
          "denies": 21,
          "kill_streak": 2,
          "commands_issued": 7443,
          "kill_list": {
            "victimid_0": 1,
            "victimid_2": 2,
            "victimid_4": 3
          },
          "team_name": "dire",
          "gold": 943,
          "gold_reliable": 242,
          "gold_unreliable": 701,
          "gold_from_hero_kills": 1854,
          "gold_from_creep_kills": 3345,
          "gold_from_income": 2022,
          "gold_from_shared": 746,
          "gpm": 413,
          "xpm": 490,
          "net_worth": 8043,
          "hero_damage": 13005,
          "wards_purchased": 1,
          "wards_placed": 1,
          "wards_destroyed": 0,
          "runes_activated": 3,
          "camps_stacked": 0,
          "support_gold_spent": 0,
          "consumable_gold_spent": 560,
          "item_gold_spent": 7075,
          "gold_lost_to_death": 312,
          "gold_spent_on_buybacks": 0
        },
        "player8": {
          "steamid": "76561198061622614",
          "name": "Gh",
          "activity": "playing",
          "kills": 3,
          "deaths": 3,
          "assists": 6,
          "last_hits": 33,
          "denies": 1,
          "kill_streak": 0,
          "commands_issued": 6594,
          "kill_list": {
            "victimid_0": 1,
            "victimid_2": 1,
            "victimid_3": 1
          },
          "team_name": "dire",
          "gold": 144,
          "gold_reliable": 144,
          "gold_unreliable": 0,
          "gold_from_hero_kills": 919,
          "gold_from_creep_kills": 501,
          "gold_from_income": 2022,
          "gold_from_shared": 387,
          "gpm": 239,
          "xpm": 299,
          "net_worth": 3834,
          "hero_damage": 8279,
          "wards_purchased": 18,
          "wards_placed": 11,
          "wards_destroyed": 2,
          "runes_activated": 4,
          "camps_stacked": 5,
          "support_gold_spent": 575,
          "consumable_gold_spent": 1435,
          "item_gold_spent": 3645,
          "gold_lost_to_death": 176,
          "gold_spent_on_buybacks": 0
        },
        "player9": {
          "steamid": "76561198074261550",
          "name": "iLTW",
          "activity": "playing",
          "kills": 3,
          "deaths": 0,
          "assists": 7,
          "last_hits": 161,
          "denies": 13,
          "kill_streak": 3,
          "commands_issued": 8222,
          "kill_list": {
            "victimid_2": 2,
            "victimid_3": 1
          },
          "team_name": "dire",
          "gold": 423,
          "gold_reliable": 194,
          "gold_unreliable": 229,
          "gold_from_hero_kills": 1078,
          "gold_from_creep_kills": 3473,
          "gold_from_income": 2022,
          "gold_from_shared": 442,
          "gpm": 501,
          "xpm": 518,
          "net_worth": 9053,
          "hero_damage": 10671,
          "wards_purchased": 0,
          "wards_placed": 0,
          "wards_destroyed": 0,
          "runes_activated": 3,
          "camps_stacked": 1,
          "support_gold_spent": 0,
          "consumable_gold_spent": 1280,
          "item_gold_spent": 8605,
          "gold_lost_to_death": 0,
          "gold_spent_on_buybacks": 0
        }
      }
    },
    "hero": {
      "team2": {
        "player0": {
          "xpos": -1471,
          "ypos": -3919,
          "id": 66,
          "name": "npc_dota_hero_chen",
          "level": 11,
          "xp": 6896,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 554,
          "buyback_cooldown": 0,
          "health": 1250,
          "max_health": 1250,
          "health_percent": 100,
          "mana": 388,
          "max_mana": 807,
          "mana_percent": 48,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": true,
          "talent_2": false,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player1": {
          "xpos": -4567,
          "ypos": -17,
          "id": 10,
          "name": "npc_dota_hero_morphling",
          "level": 14,
          "xp": 10249,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 959,
          "buyback_cooldown": 0,
          "health": 1029,
          "max_health": 1080,
          "health_percent": 95,
          "mana": 566,
          "max_mana": 807,
          "mana_percent": 70,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": true,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": false,
          "talent_2": true,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player2": {
          "xpos": 3061,
          "ypos": -3757,
          "id": 97,
          "name": "npc_dota_hero_magnataur",
          "level": 11,
          "xp": 6966,
          "alive": false,
          "respawn_seconds": 31,
          "buyback_cost": 634,
          "buyback_cooldown": 2442,
          "health": 0,
          "max_health": 1660,
          "health_percent": 0,
          "mana": 731,
          "max_mana": 805,
          "mana_percent": 90,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": false,
          "talent_2": false,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player3": {
          "xpos": -249,
          "ypos": 430,
          "id": 119,
          "name": "npc_dota_hero_dark_willow",
          "level": 10,
          "xp": 5773,
          "alive": false,
          "respawn_seconds": 5,
          "buyback_cost": 487,
          "buyback_cooldown": 2440,
          "health": 0,
          "max_health": 1120,
          "health_percent": 0,
          "mana": 248,
          "max_mana": 985,
          "mana_percent": 25,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": false,
          "talent_2": true,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player4": {
          "xpos": -3219,
          "ypos": 5734,
          "id": 123,
          "name": "npc_dota_hero_hoodwink",
          "level": 12,
          "xp": 8519,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 724,
          "buyback_cooldown": 0,
          "health": 1137,
          "max_health": 1160,
          "health_percent": 98,
          "mana": 344,
          "max_mana": 807,
          "mana_percent": 42,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": false,
          "talent_2": true,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        }
      },
      "team3": {
        "player5": {
          "xpos": 2099,
          "ypos": -2100,
          "id": 20,
          "name": "npc_dota_hero_vengefulspirit",
          "level": 11,
          "xp": 6943,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 460,
          "buyback_cooldown": 2490,
          "health": 1138,
          "max_health": 1285,
          "health_percent": 88,
          "mana": 683,
          "max_mana": 719,
          "mana_percent": 94,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": true,
          "selected_unit": false,
          "talent_1": true,
          "talent_2": false,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player6": {
          "xpos": 2810,
          "ypos": -4661,
          "id": 129,
          "name": "npc_dota_hero_mars",
          "level": 13,
          "xp": 8646,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 718,
          "buyback_cooldown": 0,
          "health": 1740,
          "max_health": 1740,
          "health_percent": 100,
          "mana": 315,
          "max_mana": 699,
          "mana_percent": 45,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": true,
          "talent_2": false,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player7": {
          "xpos": 761,
          "ypos": 66,
          "id": 74,
          "name": "npc_dota_hero_invoker",
          "level": 13,
          "xp": 9504,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 818,
          "buyback_cooldown": 0,
          "health": 1284,
          "max_health": 1810,
          "health_percent": 70,
          "mana": 256,
          "max_mana": 1227,
          "mana_percent": 20,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": true,
          "aghanims_shard": true,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": true,
          "talent_1": false,
          "talent_2": false,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player8": {
          "xpos": -2084,
          "ypos": 6994,
          "id": 110,
          "name": "npc_dota_hero_phoenix",
          "level": 10,
          "xp": 5800,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 494,
          "buyback_cooldown": 0,
          "health": 1400,
          "max_health": 1400,
          "health_percent": 100,
          "mana": 319,
          "max_mana": 495,
          "mana_percent": 64,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": true,
          "talent_2": false,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        },
        "player9": {
          "xpos": 3711,
          "ypos": -4981,
          "id": 109,
          "name": "npc_dota_hero_terrorblade",
          "level": 14,
          "xp": 10044,
          "alive": true,
          "respawn_seconds": 0,
          "buyback_cost": 896,
          "buyback_cooldown": 0,
          "health": 1580,
          "max_health": 1580,
          "health_percent": 100,
          "mana": 236,
          "max_mana": 771,
          "mana_percent": 30,
          "silenced": false,
          "stunned": false,
          "disarmed": false,
          "magicimmune": false,
          "hexed": false,
          "muted": false,
          "break": false,
          "aghanims_scepter": false,
          "aghanims_shard": false,
          "smoked": false,
          "has_debuff": false,
          "selected_unit": false,
          "talent_1": false,
          "talent_2": true,
          "talent_3": false,
          "talent_4": false,
          "talent_5": false,
          "talent_6": false,
          "talent_7": false,
          "talent_8": false
        }
      }
    },
    "abilities": {
      "team2": {
        "player0": {
          "ability0": {
            "name": "chen_penitence",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "chen_holy_persuasion",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "chen_divine_favor",
            "level": 4,
            "can_cast": false,
            "passive": true,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "chen_hand_of_god",
            "level": 1,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 58,
            "ultimate": true
          },
          "ability4": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability5": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player1": {
          "ability0": {
            "name": "morphling_waveform",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "morphling_adaptive_strike_agi",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "morphling_adaptive_strike_str",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "morphling_morph_agi",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability4": {
            "name": "morphling_morph_str",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability5": {
            "name": "morphling_replicate",
            "level": 1,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 40,
            "ultimate": true
          },
          "ability6": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability7": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player2": {
          "ability0": {
            "name": "magnataur_shockwave",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "magnataur_empower",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "magnataur_skewer",
            "level": 2,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 13,
            "ultimate": false
          },
          "ability3": {
            "name": "magnataur_reverse_polarity",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": true
          },
          "ability4": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability5": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player3": {
          "ability0": {
            "name": "dark_willow_bramble_maze",
            "level": 3,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "dark_willow_shadow_realm",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "dark_willow_cursed_crown",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "dark_willow_bedlam",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": true
          },
          "ability4": {
            "name": "dark_willow_terrorize",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": true
          },
          "ability5": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability6": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player4": {
          "ability0": {
            "name": "hoodwink_acorn_shot",
            "level": 4,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 9,
            "ultimate": false
          },
          "ability1": {
            "name": "hoodwink_bushwhack",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "hoodwink_scurry",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false,
            "charges": 2,
            "max_charges": 2,
            "charge_cooldown": 0
          },
          "ability3": {
            "name": "hoodwink_sharpshooter",
            "level": 2,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": true
          },
          "ability4": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability5": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        }
      },
      "team3": {
        "player5": {
          "ability0": {
            "name": "vengefulspirit_magic_missile",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "vengefulspirit_wave_of_terror",
            "level": 2,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 9,
            "ultimate": false
          },
          "ability2": {
            "name": "vengefulspirit_command_aura",
            "level": 3,
            "can_cast": false,
            "passive": true,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "vengefulspirit_nether_swap",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": true
          },
          "ability4": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player6": {
          "ability0": {
            "name": "mars_spear",
            "level": 4,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 7,
            "ultimate": false
          },
          "ability1": {
            "name": "mars_gods_rebuke",
            "level": 4,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 3,
            "ultimate": false
          },
          "ability2": {
            "name": "mars_bulwark",
            "level": 2,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "mars_arena_of_blood",
            "level": 2,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 68,
            "ultimate": true
          },
          "ability4": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability5": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player7": {
          "ability0": {
            "name": "invoker_quas",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "invoker_wex",
            "level": 6,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "invoker_exort",
            "level": 3,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "invoker_chaos_meteor",
            "level": 1,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 54,
            "ultimate": false
          },
          "ability4": {
            "name": "invoker_sun_strike",
            "level": 1,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 19,
            "ultimate": false
          },
          "ability5": {
            "name": "invoker_invoke",
            "level": 1,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 1,
            "ultimate": true
          },
          "ability6": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player8": {
          "ability0": {
            "name": "phoenix_icarus_dive",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability1": {
            "name": "phoenix_fire_spirits",
            "level": 4,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability2": {
            "name": "phoenix_sun_ray",
            "level": 3,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability3": {
            "name": "phoenix_sun_ray_toggle_move",
            "level": 1,
            "can_cast": false,
            "passive": false,
            "ability_active": false,
            "cooldown": 0,
            "ultimate": false
          },
          "ability4": {
            "name": "phoenix_supernova",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": true
          },
          "ability5": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          },
          "ability6": {
            "name": "plus_guild_banner",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        },
        "player9": {
          "ability0": {
            "name": "terrorblade_reflection",
            "level": 2,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 16,
            "ultimate": false
          },
          "ability1": {
            "name": "terrorblade_conjure_image",
            "level": 4,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 3,
            "ultimate": false
          },
          "ability2": {
            "name": "terrorblade_metamorphosis",
            "level": 4,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 51,
            "ultimate": false
          },
          "ability3": {
            "name": "terrorblade_sunder",
            "level": 2,
            "can_cast": false,
            "passive": false,
            "ability_active": true,
            "cooldown": 8,
            "ultimate": true
          },
          "ability4": {
            "name": "plus_high_five",
            "level": 1,
            "can_cast": true,
            "passive": false,
            "ability_active": true,
            "cooldown": 0,
            "ultimate": false
          }
        }
      }
    },
    "items": {
      "team2": {
        "player0": {
          "slot0": {
            "name": "item_headdress",
            "purchaser": 0,
            "passive": true
          },
          "slot1": {
            "name": "item_boots",
            "purchaser": 0,
            "passive": true
          },
          "slot2": {
            "name": "item_ring_of_basilius",
            "purchaser": 0,
            "passive": true
          },
          "slot3": {
            "name": "item_magic_stick",
            "purchaser": 0,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 10
          },
          "slot4": {
            "name": "item_infused_raindrop",
            "purchaser": 0,
            "passive": true,
            "charges": 2
          },
          "slot5": {
            "name": "item_force_staff",
            "purchaser": 0,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot6": {
            "name": "item_smoke_of_deceit",
            "purchaser": 0,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 0,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 2
          },
          "neutral0": {
            "name": "empty"
          }
        },
        "player1": {
          "slot0": {
            "name": "item_circlet",
            "purchaser": 1,
            "passive": true
          },
          "slot1": {
            "name": "item_sphere",
            "purchaser": 1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot2": {
            "name": "item_power_treads",
            "purchaser": 1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot3": {
            "name": "item_magic_wand",
            "purchaser": 1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot4": {
            "name": "item_lifesteal",
            "purchaser": 1,
            "passive": true
          },
          "slot5": {
            "name": "item_aegis",
            "purchaser": 1,
            "passive": true
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "item_branches",
            "purchaser": 1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "neutral0": {
            "name": "item_imp_claw",
            "purchaser": -1,
            "passive": true
          }
        },
        "player2": {
          "slot0": {
            "name": "item_magic_stick",
            "purchaser": 2,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 10
          },
          "slot1": {
            "name": "item_mekansm",
            "purchaser": 2,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot2": {
            "name": "item_buckler",
            "purchaser": 2,
            "passive": true
          },
          "slot3": {
            "name": "item_soul_ring",
            "purchaser": 2,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot4": {
            "name": "item_arcane_boots",
            "purchaser": 2,
            "can_cast": false,
            "cooldown": 37,
            "passive": false
          },
          "slot5": {
            "name": "item_quelling_blade",
            "purchaser": 2,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot6": {
            "name": "item_smoke_of_deceit",
            "purchaser": 0,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 2,
            "can_cast": false,
            "cooldown": 41,
            "passive": false,
            "charges": 2
          },
          "neutral0": {
            "name": "item_possessed_mask",
            "purchaser": -1,
            "passive": true
          }
        },
        "player3": {
          "slot0": {
            "name": "item_boots",
            "purchaser": 3,
            "passive": true
          },
          "slot1": {
            "name": "item_aether_lens",
            "purchaser": 3,
            "passive": true
          },
          "slot2": {
            "name": "item_magic_wand",
            "purchaser": 3,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 20
          },
          "slot3": {
            "name": "item_ward_dispenser",
            "purchaser": 3,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot4": {
            "name": "item_enchanted_mango",
            "purchaser": -1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot5": {
            "name": "item_wind_lace",
            "purchaser": 3,
            "passive": true
          },
          "slot6": {
            "name": "item_trusty_shovel",
            "purchaser": -1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot7": {
            "name": "item_smoke_of_deceit",
            "purchaser": 3,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 3,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 2
          },
          "neutral0": {
            "name": "item_keen_optic",
            "purchaser": -1,
            "passive": true
          }
        },
        "player4": {
          "slot0": {
            "name": "item_bottle",
            "purchaser": 4,
            "contains_rune": "empty",
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot1": {
            "name": "item_power_treads",
            "purchaser": 4,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot2": {
            "name": "item_dust",
            "purchaser": 4,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot3": {
            "name": "item_magic_wand",
            "purchaser": 4,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot4": {
            "name": "item_slippers",
            "purchaser": 4,
            "passive": true
          },
          "slot5": {
            "name": "item_maelstrom",
            "purchaser": 4,
            "passive": true
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 4,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 2
          },
          "neutral0": {
            "name": "item_ironwood_tree",
            "purchaser": -1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          }
        }
      },
      "team3": {
        "player5": {
          "slot0": {
            "name": "item_fluffy_hat",
            "purchaser": 5,
            "passive": true
          },
          "slot1": {
            "name": "item_tranquil_boots",
            "purchaser": 5,
            "passive": true
          },
          "slot2": {
            "name": "item_wind_lace",
            "purchaser": 5,
            "passive": true
          },
          "slot3": {
            "name": "item_medallion_of_courage",
            "purchaser": 5,
            "can_cast": false,
            "cooldown": 8,
            "passive": false
          },
          "slot4": {
            "name": "item_magic_wand",
            "purchaser": 5,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot5": {
            "name": "item_ward_dispenser",
            "purchaser": 5,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 5,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "neutral0": {
            "name": "item_faded_broach",
            "purchaser": -1,
            "passive": true
          }
        },
        "player6": {
          "slot0": {
            "name": "item_phase_boots",
            "purchaser": 6,
            "can_cast": false,
            "cooldown": 6,
            "passive": false
          },
          "slot1": {
            "name": "item_blink",
            "purchaser": 6,
            "can_cast": false,
            "cooldown": 7,
            "passive": false
          },
          "slot2": {
            "name": "item_magic_wand",
            "purchaser": 6,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 3
          },
          "slot3": {
            "name": "item_quelling_blade",
            "purchaser": 6,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot4": {
            "name": "item_soul_ring",
            "purchaser": 6,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot5": {
            "name": "item_bracer",
            "purchaser": 6,
            "passive": true
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 6,
            "can_cast": false,
            "cooldown": 27,
            "passive": false,
            "charges": 2
          },
          "neutral0": {
            "name": "item_broom_handle",
            "purchaser": -1,
            "passive": true
          }
        },
        "player7": {
          "slot0": {
            "name": "item_boots",
            "purchaser": 7,
            "passive": true
          },
          "slot1": {
            "name": "item_magic_wand",
            "purchaser": 7,
            "can_cast": false,
            "cooldown": 0,
            "passive": false,
            "charges": 0
          },
          "slot2": {
            "name": "item_hand_of_midas",
            "purchaser": 7,
            "can_cast": false,
            "cooldown": 61,
            "passive": false
          },
          "slot3": {
            "name": "item_spirit_vessel",
            "purchaser": 7,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 2
          },
          "slot4": {
            "name": "item_null_talisman",
            "purchaser": 7,
            "passive": true
          },
          "slot5": {
            "name": "item_null_talisman",
            "purchaser": 7,
            "passive": true
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 7,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "neutral0": {
            "name": "item_ocean_heart",
            "purchaser": -1,
            "passive": true
          }
        },
        "player8": {
          "slot0": {
            "name": "item_tranquil_boots",
            "purchaser": 8,
            "passive": true
          },
          "slot1": {
            "name": "item_magic_wand",
            "purchaser": 8,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 3
          },
          "slot2": {
            "name": "empty"
          },
          "slot3": {
            "name": "item_void_stone",
            "purchaser": 8,
            "passive": true
          },
          "slot4": {
            "name": "item_wind_lace",
            "purchaser": 8,
            "passive": true
          },
          "slot5": {
            "name": "item_gauntlets",
            "purchaser": 8,
            "passive": true
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 8,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 2
          },
          "neutral0": {
            "name": "empty"
          }
        },
        "player9": {
          "slot0": {
            "name": "item_power_treads",
            "purchaser": 9,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot1": {
            "name": "item_dragon_lance",
            "purchaser": 9,
            "passive": true
          },
          "slot2": {
            "name": "item_magic_wand",
            "purchaser": 9,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 7
          },
          "slot3": {
            "name": "item_manta",
            "purchaser": 9,
            "can_cast": false,
            "cooldown": 25,
            "passive": false
          },
          "slot4": {
            "name": "item_quelling_blade",
            "purchaser": 9,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          },
          "slot5": {
            "name": "empty"
          },
          "slot6": {
            "name": "empty"
          },
          "slot7": {
            "name": "empty"
          },
          "slot8": {
            "name": "empty"
          },
          "stash0": {
            "name": "empty"
          },
          "stash1": {
            "name": "empty"
          },
          "stash2": {
            "name": "empty"
          },
          "stash3": {
            "name": "empty"
          },
          "stash4": {
            "name": "empty"
          },
          "stash5": {
            "name": "empty"
          },
          "teleport0": {
            "name": "item_tpscroll",
            "purchaser": 9,
            "can_cast": true,
            "cooldown": 0,
            "passive": false,
            "charges": 1
          },
          "neutral0": {
            "name": "item_ironwood_tree",
            "purchaser": -1,
            "can_cast": true,
            "cooldown": 0,
            "passive": false
          }
        }
      }
    },
    "draft": {
      "activeteam": 0,
      "pick": false,
      "activeteam_time_remaining": 0,
      "radiant_bonus_time": 0,
      "dire_bonus_time": 0,
      "team2": {
        "home_team": true,
        "pick0_id": 123,
        "pick0_class": "hoodwink",
        "pick1_id": 97,
        "pick1_class": "magnataur",
        "pick2_id": 119,
        "pick2_class": "dark_willow",
        "pick3_id": 66,
        "pick3_class": "chen",
        "pick4_id": 10,
        "pick4_class": "morphling",
        "ban0_id": 91,
        "ban0_class": "wisp",
        "ban1_id": 48,
        "ban1_class": "luna",
        "ban2_id": 29,
        "ban2_class": "tidehunter",
        "ban3_id": 98,
        "ban3_class": "shredder",
        "ban4_id": 88,
        "ban4_class": "nyx_assassin",
        "ban5_id": 102,
        "ban5_class": "abaddon",
        "ban6_id": 112,
        "ban6_class": "winter_wyvern"
      },
      "team3": {
        "home_team": false,
        "pick0_id": 74,
        "pick0_class": "invoker",
        "pick1_id": 109,
        "pick1_class": "terrorblade",
        "pick2_id": 110,
        "pick2_class": "phoenix",
        "pick3_id": 129,
        "pick3_class": "mars",
        "pick4_id": 20,
        "pick4_class": "vengefulspirit",
        "ban0_id": 120,
        "ban0_class": "pangolier",
        "ban1_id": 2,
        "ban1_class": "axe",
        "ban2_id": 6,
        "ban2_class": "drow_ranger",
        "ban3_id": 41,
        "ban3_class": "faceless_void",
        "ban4_id": 89,
        "ban4_class": "naga_siren",
        "ban5_id": 8,
        "ban5_class": "juggernaut",
        "ban6_id": 52,
        "ban6_class": "leshrac"
      }
    },
    "wearables": {
      "team2": {
        "player0": {
          "wearable0": 13248,
          "wearable1": 13250,
          "wearable2": 13249,
          "wearable3": 13251,
          "wearable4": 13252,
          "wearable5": 567,
          "wearable6": 8632,
          "wearable7": 521,
          "wearable8": 647,
          "wearable9": 19006,
          "wearable10": 16286,
          "wearable11": 14912
        },
        "player1": {
          "wearable0": 647,
          "wearable1": 16286,
          "wearable2": 14912,
          "wearable3": 7603,
          "wearable4": 8808,
          "wearable5": 8810,
          "wearable6": 8809,
          "wearable7": 8807,
          "wearable8": 8632,
          "wearable9": 507
        },
        "player2": {
          "wearable0": 8300,
          "wearable1": 9971,
          "wearable2": 14295,
          "wearable3": 9974,
          "wearable4": 9973,
          "wearable5": 8059,
          "wearable6": 743,
          "wearable7": 647,
          "wearable8": 19006,
          "wearable9": 16286,
          "wearable10": 18393,
          "wearable11": 14912
        },
        "player3": {
          "wearable0": 12327,
          "wearable1": 642,
          "wearable2": 646,
          "wearable3": 641,
          "wearable4": 651,
          "wearable5": 8632,
          "wearable6": 653,
          "wearable7": 720,
          "wearable8": 16286,
          "wearable9": 14912
        },
        "player4": {
          "wearable0": 749,
          "wearable1": 750,
          "wearable2": 751,
          "wearable3": 752,
          "wearable4": 8632,
          "wearable5": 647,
          "wearable6": 19006,
          "wearable7": 16286,
          "wearable8": 14912
        }
      },
      "team3": {
        "player5": {
          "wearable0": 5344,
          "wearable1": 8919,
          "wearable2": 12420,
          "wearable3": 8920,
          "wearable4": 8632,
          "wearable5": 517,
          "wearable6": 19006,
          "wearable7": 14912
        },
        "player6": {
          "wearable0": 673,
          "wearable1": 14916,
          "wearable2": 14915,
          "wearable3": 13538,
          "wearable4": 18370,
          "wearable5": 12568,
          "wearable6": 717,
          "wearable7": 647,
          "wearable8": 19006,
          "wearable9": 14912
        },
        "player7": {
          "wearable0": 7849,
          "style0": 0,
          "wearable1": 6201,
          "style1": 1,
          "wearable2": 98,
          "wearable3": 6194,
          "style3": 1,
          "wearable4": 6929,
          "style4": 1,
          "wearable5": 6199,
          "wearable6": 8574,
          "wearable7": 7582,
          "wearable8": 683,
          "wearable9": 647,
          "wearable10": 19006,
          "wearable11": 18394,
          "wearable12": 14912
        },
        "player8": {
          "wearable0": 13408,
          "wearable1": 14993,
          "wearable2": 8632,
          "wearable3": 535,
          "wearable4": 13414,
          "wearable5": 14912
        },
        "player9": {
          "wearable0": 9500,
          "wearable1": 9499,
          "wearable2": 8105,
          "wearable3": 5957,
          "wearable4": 9501,
          "wearable5": 8632,
          "wearable6": 540,
          "wearable7": 647,
          "wearable8": 19006,
          "wearable9": 14912
        }
      }
    },
    "previously": {
      "map": {
        "clock_time": 1161,
        "dire_ward_purchase_cooldown": 99
      },
      "hero": {
        "team2": {
          "player0": {
            "xpos": -1461,
            "ypos": -3922
          }
        },
        "team3": {
          "player5": {
            "xpos": 2106,
            "ypos": -2111
          },
          "player6": {
            "xpos": 2821,
            "ypos": -4654
          },
          "player7": {
            "xpos": 756,
            "ypos": 76
          },
          "player8": {
            "ypos": 7000
          },
          "player9": {
            "xpos": 3710,
            "ypos": -4969
          }
        }
      }
    }
  } as Dota2Raw;
  