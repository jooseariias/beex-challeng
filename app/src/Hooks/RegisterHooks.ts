import { SubmitHandler } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { FormData } from "@/Utils/types";

export const RegisterHooks = () => {
  const navigation = useNavigation();
  const handleRegister: SubmitHandler<FormData> = async (data) => {
    await AsyncStorage.setItem("email", data.email);
    await AsyncStorage.setItem("password", data.password);
    await AsyncStorage.setItem("userName", data.userName);
    await AsyncStorage.setItem("city", data.city);
    navigation.navigate("Login");
  };

  return {
    handleRegister,
    navigation
  };
};
