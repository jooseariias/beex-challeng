import { useState } from "react";
import { Match } from "@/Utils/types";

export const SearchMatchesHooks = () => {
  const [matches] = useState<Match[]>([
    {
      id: 1,
      name: "Partido A",
      minRank: 1200,
      playersRequired: 5,
      playersJoined: 3,
    },
    {
      id: 2,
      name: "Partido B",
      minRank: 1300,
      playersRequired: 8,
      playersJoined: 4,
    },
    {
      id: 3,
      name: "Partido C",
      minRank: 1000,
      playersRequired: 6,
      playersJoined: 6,
    },
    {
      id: 4,
      name: "Partido D",
      minRank: 1400,
      playersRequired: 5,
      playersJoined: 2,
    },
    {
      id: 5,
      name: "Partido E",
      minRank: 1100,
      playersRequired: 7,
      playersJoined: 5,
    },
  ]);

  const handleJoinMatch = (name: string) => {
    alert(`te uniste al  ${name} :)`);
  };

  return {
    matches,
    handleJoinMatch,
  };
};
