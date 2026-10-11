import { StyleSheet } from "react-native";

export const progressStatsStyles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 13,
    minHeight: 118,
    borderWidth: 1,
    borderColor: "#EFEDF0",
  },
  statIconPending: {
    backgroundColor: "#F0EBFC",
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  statIconCompleted: {
    backgroundColor: "#E8F5F0",
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  statIconTotal: {
    backgroundColor: "#FBF1E2",
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  statValue: {
    color: "#29263C",
    fontSize: 23,
    fontWeight: "800",
  },
  statLabel: {
    color: "#96929F",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 3,
  },
});