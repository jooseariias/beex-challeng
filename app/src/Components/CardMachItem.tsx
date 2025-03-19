import { Text, View, TouchableOpacity } from "react-native";
import { CardMatchItemProps } from "@/Utils/types";
import { CardMatchItemStyle } from "@/Style/CardMatchItemStyle";

const CardMatchItem = ({ item, handleJoinMatch }: CardMatchItemProps) => (
  <View style={CardMatchItemStyle.card}>
    <Text style={CardMatchItemStyle.title}>{item.name}</Text>
    <Text style={CardMatchItemStyle.text}>
      Ranking mínimo requerido: {item.minRank}
    </Text>
    <Text style={CardMatchItemStyle.text}>
      Jugadores requeridos: {item.playersRequired}
    </Text>
    <Text style={CardMatchItemStyle.text}>
      Jugadores unidos: {item.playersJoined}
    </Text>

    <TouchableOpacity
      onPress={() => handleJoinMatch(item.name)}
      style={[
        CardMatchItemStyle.button,
        item.playersJoined < item.playersRequired
          ? CardMatchItemStyle.activeButton
          : CardMatchItemStyle.inactiveButton,
      ]}
      disabled={item.playersJoined >= item.playersRequired}
    >
      <Text style={CardMatchItemStyle.buttonText}>
        {item.playersJoined < item.playersRequired
          ? "Unirse al partido"
          : "Partido completo"}
      </Text>
    </TouchableOpacity>
  </View>
);

export default CardMatchItem;
