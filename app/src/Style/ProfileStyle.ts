import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "white",
  },
  progressContainer: {
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  progressText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  formContainer: {
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "white",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: "100%",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    marginBottom: 8,
  },
  picker: {
    backgroundColor: "white",
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    zIndex: 1,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
