import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CardComplexProps } from "@/Utils/types";
import { CardComplexStyles } from "@/Style/CardComplexStyle";

const CardComplex = ({ item, toggleFavorite }: CardComplexProps) => {
  return (
    <View style={CardComplexStyles.cardContainer}>
      <View style={CardComplexStyles.headerContainer}>
        <Text style={CardComplexStyles.nameText}>{item.name}</Text>
        <TouchableOpacity
          onPress={() => toggleFavorite(item.id)}
          style={[
            CardComplexStyles.favoriteButton,
            item.isFavorite
              ? CardComplexStyles.favoriteActive
              : CardComplexStyles.favoriteInactive,
          ]}
        >
          <Icon
            name={item.isFavorite ? "star" : "star-border"}
            size={28}
            color={item.isFavorite ? "red" : "white"}
          />
        </TouchableOpacity>
      </View>

      <Text style={CardComplexStyles.cityText}>{item.city}</Text>
      <Text style={CardComplexStyles.distanceText}>{item.distance} km</Text>
    </View>
  );
};

export default CardComplex;
