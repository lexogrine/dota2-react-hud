import { useEffect, useState } from "react";
import { configs } from "../../App";
import { apiUrl } from "../../api/api";
import React from "react";
import { Player } from "dotagsi";

export const Avatar = (
  { player, teamId }: { player: Player; teamId?: string | null },
) => {

  const [replaceAvatars, setAvatars] = useState<"always" | "never" | "if_missing">("never");

  useEffect(() => {
    const onData = (data: any) => {
      if (!data) return;
      const display = data.view;
      if (!display) return;
      setAvatars(display.replace_avatars || "never");
    };
    configs.onChange(onData);
    onData(configs.data);

    return () => {
      configs.listeners = configs.listeners.filter((l) => l !== onData);
    };
  }, []);

  const getUrl = () => {
    const avatarData = player.avatar;
  
    if(replaceAvatars === 'always' || (replaceAvatars === 'if_missing' && !avatarData)){
      return teamId ? `${apiUrl}api/teams/logo/${teamId}` : avatarData || null;
    }
    return avatarData || null;
  }

  const url = getUrl();

  if(!url) return null
  
  return <img src={url} />
};
