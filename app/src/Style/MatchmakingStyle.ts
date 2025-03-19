import { StyleSheet } from "react-native";

export const MatchmakingStyles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "white",
  },
  noMatchesText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
