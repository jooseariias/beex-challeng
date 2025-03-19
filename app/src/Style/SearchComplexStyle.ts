import { StyleSheet } from "react-native";

export const SearchComplexStyles = StyleSheet.create({
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
  searchInput: {
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    color: "black",
  },
  noResultsText: {
    color: "white",
    textAlign: "center",
    marginTop: 24,
  },
});
