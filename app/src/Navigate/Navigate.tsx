import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Register from "@/Screens/Register";
import Login from "@/Screens/Login";
import Home from "@/Screens/Home";

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
