import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SubmitHandler } from "react-hook-form";
import { LoginForm } from "@/Utils/types";
import { Alert } from "react-native";

export const LoginHooks = () => {
  const [storedEmail, setStoredEmail] = useState<string>("");
  const [storedPassword, setStoredPassword] = useState<string>("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCredentials = async () => {
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      setStoredEmail(email || "");
      setStoredPassword(password || "");
    };

    fetchCredentials();
  }, []);

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    const { email, password } = data;

    if (storedEmail && storedPassword) {
      if (email === storedEmail && password === storedPassword) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Invalid credentials");
      }
    } else {
      Alert.alert("Error", "Credentials not found");
    }
  };

  return {
    handleLogin,
    navigation,
  };
};


