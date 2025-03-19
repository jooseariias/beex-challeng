import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LoginForm } from "@/Utils/types";
import { LoginHooks } from "@/Hooks/LoginHooks";
import { loginStyles } from "@/Style/LoginStyles";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { handleLogin, navigation } = LoginHooks();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  return (
    <ImageBackground
      source={require("../../../assets/images/fondo.jpg")}
      style={loginStyles.background} // Aplica estilos
    >
      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>Iniciar Sesión</Text>

        <View style={loginStyles.inputGroup}>
          <Text style={loginStyles.label}>Correo electrónico</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Correo es requerido",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Formato de correo no válido",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={loginStyles.input}
                  placeholder="ejemplo@correo.com"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text style={loginStyles.errorText}>
                    {errors.email.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <View style={loginStyles.inputGroup}>
          <Text style={loginStyles.label}>Contraseña</Text>
          <Controller
            control={control}
            name="password"
            rules={{ required: "Contraseña es requerida" }}
            render={({ field: { onChange, value } }) => (
              <>
                <View style={loginStyles.passwordContainer}>
                  <TextInput
                    style={loginStyles.input}
                    placeholder="Ingrese su contraseña"
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={loginStyles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Icon
                      name={showPassword ? "visibility-off" : "visibility"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Text style={loginStyles.errorText}>
                    {errors.password.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit(handleLogin)}
          style={loginStyles.button}
        >
          <Text style={loginStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text
          style={loginStyles.registerText}
          onPress={() => navigation.navigate("Register")}
        >
          ¿No tienes cuenta?{" "}
          <Text style={loginStyles.registerLink}>Regístrate</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Login;
