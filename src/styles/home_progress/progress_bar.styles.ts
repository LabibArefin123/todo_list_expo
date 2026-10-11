import { StyleSheet } from "react-native";

export const progressBarStyles = StyleSheet.create({
  progressTrack: {
    height: 8,
    backgroundColor: "#514B68",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#B4A1FF",
    borderRadius: 10,
  },
  progressFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  progressFooterText: {
    color: "#D5CFE7",
    fontSize: 11,
    fontWeight: "500",
  },
});