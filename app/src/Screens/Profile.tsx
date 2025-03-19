import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ProgressBar from "react-native-progress/Bar";
import { ProfileHooks } from "@/Hooks/ProfileHooks";
import { useForm, Controller } from "react-hook-form";
import { User } from "@/Utils/types";
import { ProfileStyles } from "@/Style/ProfileStyle";
import { Ionicons } from "@expo/vector-icons"; 

const Profile = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false); 

  const {
    localCity,
    localEmail,
    localLevel,
    localUserName,
    localPassword,
    calculateProfileCompletion,
    handleSave,
  } = ProfileHooks();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    setValue("city", localCity);
    setValue("email", localEmail);
    setValue("level", localLevel);
    setValue("userName", localUserName);
    setValue("password", localPassword);
  }, [localCity, localEmail, localLevel, localUserName, localPassword, setValue]);

  return (
    <ImageBackground source={require("../../../assets/images/fondo.jpg")} style={ProfileStyles.background}>
      <View style={ProfileStyles.overlay}>
        <ScrollView style={ProfileStyles.container}>
          <Text style={ProfileStyles.title}>Mi Perfil</Text>

          <View style={ProfileStyles.progressContainer}>
            <Text style={ProfileStyles.progressText}>
              Perfil completado: {Math.round(calculateProfileCompletion())}%
            </Text>
            <ProgressBar
              progress={calculateProfileCompletion() / 100}
              width={null}
              height={8}
              borderWidth={0}
              color="blue"
              animated
            />
          </View>

          <View style={ProfileStyles.formContainer}>
            <Text style={ProfileStyles.label}>Nombre de Usuario:</Text>
            <Controller
              control={control}
              name="userName"
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field: { onChange, value } }) => (
                <TextInput style={ProfileStyles.input} value={value} onChangeText={onChange} />
              )}
            />
            {errors.userName && <Text style={ProfileStyles.errorText}>{errors.userName.message}</Text>}

            <Text style={ProfileStyles.label}>Ciudad:</Text>
            <Controller
              control={control}
              name="city"
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field: { onChange, value } }) => (
                <TextInput style={ProfileStyles.input} value={value} onChangeText={onChange} />
              )}
            />
            {errors.city && <Text style={ProfileStyles.errorText}>{errors.city.message}</Text>}

            <Text style={ProfileStyles.label}>Email:</Text>
            <Controller
              control={control}
              name="email"
              rules={{
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email no válido",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput style={ProfileStyles.input} value={value} onChangeText={onChange} />
              )}
            />
            {errors.email && <Text style={ProfileStyles.errorText}>{errors.email.message}</Text>}

            <Text style={ProfileStyles.label}>Nivel de Juego:</Text>
            <Controller
              control={control}
              name="level"
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field: { onChange, value } }) => (
                <Picker selectedValue={value} onValueChange={onChange} style={ProfileStyles.picker}>
                  <Picker.Item label="Novato" value="Novato" />
                  <Picker.Item label="Intermedio" value="Intermedio" />
                  <Picker.Item label="Avanzado" value="Avanzado" />
                </Picker>
              )}
            />
            {errors.level && <Text style={ProfileStyles.errorText}>{errors.level.message}</Text>}

            <Text style={ProfileStyles.label}>Contraseña:</Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field: { onChange, value } }) => (
                <View style={ProfileStyles.passwordContainer}>
                  <TextInput
                    style={ProfileStyles.input}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={ProfileStyles.eyeIcon}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.password && <Text style={ProfileStyles.errorText}>{errors.password.message}</Text>}
          </View>

          <TouchableOpacity style={ProfileStyles.button} onPress={handleSubmit(handleSave)}>
            <Text style={ProfileStyles.buttonText}>Guardar cambios</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Profile;

