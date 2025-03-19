import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchMatchesHooks } from "./SearchMatchesHooks";

export const MatchmakingHooks = () => {
  const [level, setLevel] = useState<string>("");
  const { matches } = SearchMatchesHooks();

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const storedLevel = await AsyncStorage.getItem("level");
        if (storedLevel) {
          setLevel(storedLevel);
        }
      } catch (error) {
        console.log("Error al obtener el nivel:", error);
      }
    };

    fetchLevel();

    const intervalId = setInterval(fetchLevel, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const filteredMatches = matches.filter((match) => {
    switch (level) {
      case "Novato":
        return match.minRank >= 0 && match.minRank <= 1000;
      case "Intermedio":
        return match.minRank >= 1001 && match.minRank <= 1500;
      case "Avanzado":
        return match.minRank >= 1501 && match.minRank <= 2000;
      default:
        return true;
    }
  });

  return {
    filteredMatches,
  };
};
