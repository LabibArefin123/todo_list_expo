import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  brandText: {
    color: "#27253A",
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
    maxWidth: 290,
  },

  // Progress
  progressCard: {
    backgroundColor: "#302C49",
    padding: 22,
    borderRadius: 25,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressLabel: {
    color: "#BDB5D9",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  progressTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 7,
  },
  progressIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#484164",
    alignItems: "center",
    justifyContent: "center",
  },
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

  // Statistics
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

  // Section
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 17,
  },
  sectionTitle: {
    color: "#29263C",
    fontSize: 21,
    fontWeight: "800",
    letterSpacing: -0.6,
  },
  sectionSubtitle: {
    color: "#9B97A3",
    fontSize: 11,
    marginTop: 5,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#8D78DC",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 13,
    elevation: 3,
    shadowColor: "#8D78DC",
    shadowOpacity: 0.2,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },

  // Search
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

  // Filters
  filterContainer: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 15,
  },
  filterButton: {
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 11,
    backgroundColor: "#EFEDF1",
  },
  filterButtonActive: {
    backgroundColor: "#302C49",
  },
  filterText: {
    color: "#85818E",
    fontSize: 11,
    fontWeight: "700",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },

  // Task cards
  taskList: {
    gap: 11,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0EDF1",
    padding: 15,
    minHeight: 83,
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 8,
    borderWidth: 1.6,
    borderColor: "#C9C3D6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  checkboxCompleted: {
    backgroundColor: "#8D78DC",
    borderColor: "#8D78DC",
  },
  taskContent: {
    flex: 1,
    gap: 8,
  },
  taskTitle: {
    color: "#302D43",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
  completedTitle: {
    color: "#A5A1AD",
    textDecorationLine: "line-through",
  },
  taskMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryText: {
    color: "#918B9B",
    fontSize: 10,
    fontWeight: "600",
  },
  metaDot: {
    height: 3,
    width: 3,
    backgroundColor: "#C6C1CD",
    borderRadius: 3,
  },
  priorityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: "700",
  },
  deleteButton: {
    padding: 9,
    marginLeft: 5,
  },

  // Empty state
  emptyState: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EFEDF0",
    gap: 10,
  },
  emptyTitle: {
    color: "#302D43",
    fontSize: 16,
    fontWeight: "800",
  },
  emptyDescription: {
    color: "#9B97A3",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 18,
  },
  bottomMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    marginTop: 28,
  },
  bottomMessageText: {
    color: "#96929F",
    fontSize: 10,
    fontWeight: "500",
  },

  // Add task modal
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
  inputLabel: {
    color: "#827D90",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 10,
    marginTop: 16,
  },
  modalInput: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#EAE6EE",
    paddingHorizontal: 15,
    color: "#302D43",
    fontSize: 13,
  },
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: "#F0EEF3",
    borderRadius: 10,
  },
  optionButtonActive: {
    backgroundColor: "#EAE4FC",
    borderWidth: 1,
    borderColor: "#A18CE8",
  },
  optionText: {
    color: "#85808F",
    fontSize: 11,
    fontWeight: "700",
  },
  optionTextActive: {
    color: "#7963C9",
  },
  priorityOptions: {
    flexDirection: "row",
    gap: 9,
  },
  priorityOption: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 11,
    backgroundColor: "#F0EEF3",
  },
  priorityOptionActive: {
    backgroundColor: "#EAE4FC",
    borderWidth: 1,
    borderColor: "#A18CE8",
  },
  submitButton: {
    height: 53,
    backgroundColor: "#8D78DC",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 9,
    marginTop: 27,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
});
