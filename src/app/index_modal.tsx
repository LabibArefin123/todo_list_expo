import { Ionicons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from "../styles/home.styles";
import type { Priority } from "./index_tasks";

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

const categories = ["Work", "Personal", "Design", "Study", "Health"];

const priorities: Priority[] = ["High", "Medium", "Low"];

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
        {/* Backdrop */}
        <Pressable style={styles.modalBackdrop} onPress={onClose} />

        {/* Modal Content */}
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />

          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Create a task</Text>

              <Text style={styles.modalSubtitle}>
                Make your next move count.
              </Text>
            </View>

            <Pressable
              onPress={onClose}
              style={styles.modalClose}
              accessibilityRole="button"
              accessibilityLabel="Close modal"
            >
              <Ionicons name="close" size={21} color="#686576" />
            </Pressable>
          </View>

          {/* Task Name */}
          <Text style={styles.inputLabel}>TASK NAME</Text>

          <TextInput
            value={taskTitle}
            onChangeText={onTitleChange}
            placeholder="What needs to be done?"
            placeholderTextColor="#AAA7B3"
            style={styles.modalInput}
            autoFocus
            maxLength={100}
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />

          {/* Category */}
          <Text style={styles.inputLabel}>CATEGORY</Text>

          <View style={styles.optionContainer}>
            {categories.map((category) => (
              <Pressable
                key={category}
                onPress={() => onCategoryChange(category)}
                style={[
                  styles.optionButton,
                  taskCategory === category && styles.optionButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    taskCategory === category && styles.optionTextActive,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Priority */}
          <Text style={styles.inputLabel}>PRIORITY</Text>

          <View style={styles.priorityOptions}>
            {priorities.map((priority) => (
              <Pressable
                key={priority}
                onPress={() => onPriorityChange(priority)}
                style={[
                  styles.priorityOption,
                  taskPriority === priority && styles.priorityOptionActive,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    taskPriority === priority && styles.optionTextActive,
                  ]}
                >
                  {priority}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Submit */}
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
