import { StyleSheet } from "react-native";

export const CardMatchItemStyle = StyleSheet.create({
  card: {
    backgroundColor: "#2d3748",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 16,
    color: "#e2e8f0",
    marginTop: 4,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  activeButton: {
    backgroundColor: "#3b82f6",
  },
  inactiveButton: {
    backgroundColor: "#4b5563",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
