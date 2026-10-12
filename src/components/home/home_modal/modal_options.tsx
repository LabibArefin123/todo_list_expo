import { Pressable, Text, View } from "react-native";
import { styles } from "../../../styles/home.styles";
import type { Priority } from "../home_tasks/task_types";

const categories = ["Work", "Personal", "Design", "Study", "Health"];
const priorities: Priority[] = ["High", "Medium", "Low"];

type ModalOptionsProps = {
  taskCategory: string;
  taskPriority: Priority;
  onCategoryChange: (category: string) => void;
  onPriorityChange: (priority: Priority) => void;
};

export function ModalOptions({
  taskCategory,
  taskPriority,
  onCategoryChange,
  onPriorityChange,
}: ModalOptionsProps) {
  return (
    <>
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
    </>
  );
}
