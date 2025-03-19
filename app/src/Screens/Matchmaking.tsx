import { Text, FlatList, View, ImageBackground } from "react-native";
import CardMatchItem from "@/Components/CardMachItem";
import { MatchmakingHooks } from "@/Hooks/MatchmakingHooks";
import { MatchmakingStyles } from "@/Style/MatchmakingStyle";

const Matchmaking = () => {
  const { filteredMatches } = MatchmakingHooks();
  return (
    <ImageBackground
      source={require("../../../assets/images/fondo.jpg")}
      style={MatchmakingStyles.background}
    >
      <View style={MatchmakingStyles.container}>
        <Text style={MatchmakingStyles.title}>Matchmaking</Text>

        {filteredMatches.length === 0 ? (
          <Text style={MatchmakingStyles.noMatchesText}>
            No se encontraron partidos recomendados para tu nivel
          </Text>
        ) : (
          <FlatList
            data={filteredMatches}
            renderItem={({ item }) => (
              <CardMatchItem
                item={item}
                handleJoinMatch={() => alert(`te uniste al  ${item.name} :)`)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default Matchmaking;
