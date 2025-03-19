import { Text, TextInput, FlatList, ImageBackground, View } from "react-native";
import { ComplexHooks } from "@/Hooks/ComplexHooks";
import CardComplex from "@/Components/CardComplex";
import { SearchComplexStyles } from "@/Style/SearchComplexStyle";

const SearchComplex = () => {
  const {
    searchQuery,
    setSearchQuery,
    filteredComplexes,
    toggleFavorite,
  } = ComplexHooks();

  return (
    <ImageBackground
      source={require("../../../assets/images/fondo.jpg")}
      style={SearchComplexStyles.background}
    >
      <View style={SearchComplexStyles.container}>
        <Text style={SearchComplexStyles.title}>Buscar Complejo</Text>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar por ciudad o nombre"
          style={SearchComplexStyles.searchInput}
        />
        {filteredComplexes.length === 0 ? (
          <Text style={SearchComplexStyles.noResultsText}>No se encontraron resultados</Text>
        ) : (
          <FlatList
            data={filteredComplexes}
            renderItem={({ item }) => (
              <CardComplex item={item} toggleFavorite={toggleFavorite} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View >
    </ImageBackground>
  );
};

export default SearchComplex;
