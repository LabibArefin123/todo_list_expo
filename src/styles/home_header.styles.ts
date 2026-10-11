import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  brandText: {
    color: "#27254A",
    fontSize: 27,
    fontWeight: "900",
    letterSpacing: -1.5,
  },
  dateText: {
    color: "#96929F",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 17,
    backgroundColor: "#E9E3FB",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  avatarText: {
    color: "#8069D3",
    fontSize: 17,
    fontWeight: "800",
  },
});
