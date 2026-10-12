import { StyleSheet } from "react-native";

export const overviewStyles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#25283B",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.4,
  },
  sectionCaption: {
    color: "#A0A1B3",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  overviewGrid: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },
  overviewCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    paddingVertical: 15,
    paddingHorizontal: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECF5",
  },
  overviewIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  overviewEmoji: {
    color: "#5E50D4",
    fontSize: 21,
    fontWeight: "800",
  },
  overviewValue: {
    color: "#292B3F",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center",
  },
  overviewLabel: {
    color: "#999BAD",
    fontSize: 9,
    marginTop: 5,
    textAlign: "center",
  },
});