import { StyleSheet } from "react-native";

export const progressNumbersStyles = StyleSheet.create({
  progressNumbers: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
    marginTop: 23,
    marginBottom: 13,
  },
  progressPercent: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -1.5,
  },
  progressCount: {
    color: "#C1BAD4",
    fontSize: 11,
    fontWeight: "500",
  },
});
