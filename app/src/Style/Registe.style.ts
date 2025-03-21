import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 28,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    color: "white",
    fontSize: 20,
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
  error: {
    color: "red",
    fontSize: 16,
    marginTop: 4,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    paddingTop:16,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  backButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 28,
    textAlign: "center",
  },
});

export default styles;
