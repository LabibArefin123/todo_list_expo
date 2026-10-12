import { StyleSheet } from "react-native";

export const settingsStyles = StyleSheet.create({
  settingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#ECECF5",
    paddingHorizontal: 15,
    marginBottom: 28,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },
  settingIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  settingIconText: {
    color: "#6658C8",
    fontSize: 21,
    fontWeight: "700",
  },
  settingCopy: {
    flex: 1,
  },
  settingTitle: {
    color: "#292B3F",
    fontSize: 12,
    fontWeight: "800",
  },
  settingDescription: {
    color: "#9899AC",
    fontSize: 10,
    marginTop: 5,
    lineHeight: 15,
  },
  settingDivider: {
    height: 1,
    backgroundColor: "#F0F0F6",
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },
  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#F0EDFF",
    alignItems: "center",
    justifyContent: "center",
  },
  actionIconText: {
    color: "#6658C8",
    fontSize: 20,
    fontWeight: "800",
  },
  actionArrow: {
    color: "#9B9CB0",
    fontSize: 27,
    fontWeight: "400",
  },
  footerText: {
    textAlign: "center",
    color: "#8884BE",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 4,
  },
  versionText: {
    textAlign: "center",
    color: "#B0B1C1",
    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 9,
  },
});