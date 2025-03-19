import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="white" />
        <Text style={styles.title}> Menú</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 6,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
  },
});
