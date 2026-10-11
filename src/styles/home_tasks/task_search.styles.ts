import { StyleSheet } from "react-native";

export const taskSearchStyles = StyleSheet.create({
  searchContainer: {
    height: 49,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EFEDF0",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 17,
  },
  searchInput: {
    flex: 1,
    color: "#302D43",
    fontSize: 12,
    paddingVertical: 10,
  },
});