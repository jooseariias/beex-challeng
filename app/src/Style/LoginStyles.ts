import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    padding: 24,
  },
  title: {
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 36,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 22,
    color: "white",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  errorText: {
    color: "red",
    fontSize: 18,
    marginTop: 4,
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  registerText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    marginTop: 28,
  },
  registerLink: {
    color: "#3b82f6",
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
