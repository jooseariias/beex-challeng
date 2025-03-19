import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { Alert } from "react-native";

export const ProfileHooks = () => {
  const navigation = useNavigation();

  const [localCity, setLocalCity] = useState<string>("");
  const [localEmail, setLocalEmail] = useState<string>("");
  const [localLevel, setLocalLevel] = useState<string>("");
  const [localUserName, setLocalUserName] = useState<string>("");
  const [localPassword, setLocalPassword] = useState<string>("");

  const loadProfileData = async () => {
    const city = await AsyncStorage.getItem("city");

    const email = await AsyncStorage.getItem("email");
    const level = await AsyncStorage.getItem("level");
    const userName = await AsyncStorage.getItem("userName");
    const password = await AsyncStorage.getItem("password");

    if (city) setLocalCity(city);
    if (email) setLocalEmail(email);
    if (level) setLocalLevel(level);
    if (userName) setLocalUserName(userName);
    if (password) setLocalPassword(password);
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  const calculateProfileCompletion = (): number => {
    const totalFields = 5;
    let filledFields = 0;

    if (localCity) filledFields++;
    if (localEmail) filledFields++;
    if (localLevel) filledFields++;
    if (localUserName) filledFields++;
    if (localPassword) filledFields++;

    return (filledFields / totalFields) * 100;
  };

  const handleSave = async (data: any) => {
    try {
      await AsyncStorage.setItem("city", data.city);
      await AsyncStorage.setItem("email", data.email);
      await AsyncStorage.setItem("level", data.level);
      await AsyncStorage.setItem("userName", data.userName);
      await AsyncStorage.setItem("password", data.password);
      Alert.alert("Datos actualizados");
    } catch (error) {
      console.error("Error al guardar los datos", error);
      Alert.alert("Error al guardar los datos");
    }
  };

  return {
    localCity,
    localEmail,
    localLevel,
    localUserName,
    localPassword,
    calculateProfileCompletion,
    handleSave,
  };
};
