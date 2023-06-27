import * as I from './interfaces';
import queryString from 'query-string';


const query = queryString.parseUrl(window.location.href).query;
export const port = (query && Number(query.port)) || 1349;

export const isDev = !query.isProd;

export const config = {apiAddress:isDev ? `http://localhost:${port}/` : '/'}
export const apiUrl = config.apiAddress;

export const getAssetURL = (
    asset: string | null | undefined,
    assetType:
      | "heroes_animated"
      | "heroes_icons"
      | "heroes"
      | "items"
      | "abilities"
      | "runes"
  ) => {
    if (!asset) return "";
    if (assetType === "heroes_animated") {
      return `${apiUrl}static/dota2/heroes/animated/${asset.startsWith("npc_dota_hero_")? asset : `npc_dota_hero_${asset}`}.webm`;
    }
    if (assetType === "heroes_icons") {
      return `${apiUrl}static/dota2/heroes/icons/${asset.replace("npc_dota_hero_", "")}.png`;
    }
    if (assetType === "items") {
      return `${apiUrl}static/dota2/${assetType}/${asset.replace(
        /^item_/,
        ""
      )}.webp`;
    }
    if (assetType === "heroes") {
      return `${apiUrl}static/dota2/${assetType}/${asset.replace(
        "npc_dota_hero_",
        ""
      )}.webp`;
    }
    return `${apiUrl}static/dota2/${assetType}/${asset}.webp`;
  };
  
export async function apiV2(url: string, method = 'GET', body?: any) {
    const options: RequestInit = {
        method,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    }
    if (body) {
        options.body = JSON.stringify(body)
    }
    let data: any = null;
    return fetch(`${apiUrl}api/${url}`, options)
        .then(res => {
            data = res;
            return res.json().catch(_e => data && data.status < 300)
        });
}

const api = {
    match: {
        get: async (): Promise<I.Match[]> => apiV2(`match`),
        getCurrent: async (): Promise<I.Match> => apiV2(`match/current`)
    },
    camera: {
        get: (): Promise<{ availablePlayers: ({steamid:string, label: string})[], uuid: string }> => apiV2('camera')
    },
    teams: {
        getOne: async (id: string): Promise<I.Team> => apiV2(`teams/${id}`),
        get: (): Promise<I.Team[]> => apiV2(`teams`),
    },
    players: {
        get: async (): Promise<I.Player[]> => apiV2(`players`),
        getAvatarURLs: async (steamid: string): Promise<{custom: string, steam: string}> => apiV2(`players/avatar/steamid/${steamid}`)
    },
    tournaments: {
        get: () => apiV2('tournament')
    }
}

export default api;