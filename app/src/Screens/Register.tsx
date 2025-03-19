import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { RegisterHooks } from "@/Hooks/RegisterHooks";
import { FormData } from "@/Utils/types";
import styles from "@/Style/Registe.style";

const Register = () => {
  const { handleRegister } = RegisterHooks();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/images/fondo.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registrate</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo electrónico</Text>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: "Email es requerido",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "El correo no es válido",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="ejemplo@correo.com"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{
              required: "Contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="******"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
                {errors.password && (
                  <Text style={styles.error}>{errors.password.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre de usuario</Text>
          <Controller
            control={control}
            name="userName"
            defaultValue=""
            rules={{ required: "Nombre de usuario es requerido" }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Tu nombre de usuario"
                  value={value}
                  onChangeText={onChange}
                />
                {errors.userName && (
                  <Text style={styles.error}>{errors.userName.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ciudad</Text>
          <Controller
            control={control}
            name="city"
            defaultValue=""
            rules={{ required: "Ciudad es requerida" }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Ciudad, Ej: Madrid"
                  value={value}
                  onChangeText={onChange}
                />
                {errors.city && (
                  <Text style={styles.error}>{errors.city.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit(handleRegister)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.backButton}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Register;
