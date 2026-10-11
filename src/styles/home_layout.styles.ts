import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollContent: {
    width: "100%",
    maxWidth: 650,
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 40,
  },

  // Loading
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F8F7F4",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  loadingText: {
    color: "#96929F",
    fontSize: 13,
  },

  // Welcome
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeTitle: {
    color: "#28263B",
    fontSize: 37,
    lineHeight: 43,
    fontWeight: "800",
    letterSpacing: -1.8,
  },
  welcomeAccent: {
    color: "#927CE3",
  },
  welcomeDescription: {
    color: "#96929F",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
    maxWidth: 350,
  },
});
