import { Text, View, FlatList, ImageBackground } from "react-native";
import { SearchMatchesHooks } from "@/Hooks/SearchMatchesHooks";
import CardMatchItem from "@/Components/CardMachItem";
import { SearchMatchesStyles } from "@/Style/SearchMatchesStyle";

const SearchMatches = () => {
  const { matches, handleJoinMatch } = SearchMatchesHooks();
  return (
    <ImageBackground
      source={require("../../../assets/images/fondo.jpg")}
      style={SearchMatchesStyles.background}
    >
      <View style={SearchMatchesStyles.container}>
        <Text style={SearchMatchesStyles.title}>Partidos</Text>

        {matches.length === 0 ? (
          <Text style={SearchMatchesStyles.noMatchesText}>
            No se encontraron partidos disponibles
          </Text>
        ) : (
          <FlatList
            data={matches}
            renderItem={({ item }) => (
              <CardMatchItem item={item} handleJoinMatch={handleJoinMatch} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default SearchMatches;
