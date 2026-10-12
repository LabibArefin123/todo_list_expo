import { Ionicons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import type { Priority } from "./home_tasks/task_types";
import { styles } from "../../styles/home.styles";
import { ModalHeader } from "./home_modal/modal_header";
import { ModalOptions } from "./home_modal/modal_options";
import { ModalTaskFields } from "./home_modal/modal_task_fields";

type TaskModalProps = {
  visible: boolean;
  taskTitle: string;
  taskCategory: string;
  taskPriority: Priority;
  onClose: () => void;
  onTitleChange: (title: string) => void;
  onCategoryChange: (category: string) => void;
  onPriorityChange: (priority: Priority) => void;
  onSubmit: () => void;
};

export function HomeTaskModal({
  visible,
  taskTitle,
  taskCategory,
  taskPriority,
  onClose,
  onTitleChange,
  onCategoryChange,
  onPriorityChange,
  onSubmit,
}: TaskModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.modalOverlay}
        behavior={Platform.select({
          ios: "padding",
          android: "height",
          web: undefined,
          default: undefined,
        })}
      >
        <Pressable style={styles.modalBackdrop} onPress={onClose} />
        <View style={styles.modalContent}>
          <ModalHeader onClose={onClose} />
          <ModalTaskFields
            taskTitle={taskTitle}
            onTitleChange={onTitleChange}
            onSubmit={onSubmit}
          />
          <ModalOptions
            taskCategory={taskCategory}
            taskPriority={taskPriority}
            onCategoryChange={onCategoryChange}
            onPriorityChange={onPriorityChange}
          />
          <Pressable
            style={styles.submitButton}
            onPress={onSubmit}
            accessibilityRole="button"
          >
            <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
            <Text style={styles.submitButtonText}>Create task</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
