import { StyleSheet } from "react-native";

export const CardComplexStyles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#2d2d2d",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 50,
  },
  favoriteActive: {
    backgroundColor: "#f59e0b",
  },
  favoriteInactive: {
    backgroundColor: "#4b5563",
  },
  cityText: {
    fontSize: 18,
    color: "white",
  },
  distanceText: {
    fontSize: 18,
    color: "white",
  },
});
