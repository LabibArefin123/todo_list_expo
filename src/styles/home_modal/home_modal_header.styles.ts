import { StyleSheet } from "react-native";

export const modalHeaderStyles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  modalTitle: {
    color: "#29263C",
    fontSize: 23,
    fontWeight: "800",
  },
  modalSubtitle: {
    color: "#96929F",
    fontSize: 11,
    marginTop: 5,
  },
  modalClose: {
    width: 37,
    height: 37,
    backgroundColor: "#EFEDF1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});