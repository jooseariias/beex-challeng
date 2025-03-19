import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomDrawer from "@/Components/CustomDrawer";

const Drawer = createDrawerNavigator();

import ComplexSearch from "@/Screens/ComplexSearch";
import Profile from "@/Screens/Profile";

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: "#141c24" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        drawerStyle: { backgroundColor: "#142434", width: 250 },
        drawerLabelStyle: { color: "white" },
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 20 }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="menu" size={40} color="white" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Buscar" component={ComplexSearch} />
      <Drawer.Screen name="Mi Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}
