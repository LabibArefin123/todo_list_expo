import { StyleSheet } from "react-native";

export const modalLayoutStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(31, 28, 48, 0.45)",
  },
  modalContent: {
    backgroundColor: "#FBFAF8",
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    paddingHorizontal: 23,
    paddingTop: 12,
    paddingBottom: 30,
  },
  modalHandle: {
    width: 42,
    height: 4,
    backgroundColor: "#DCD8E2",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 23,
  },
});
