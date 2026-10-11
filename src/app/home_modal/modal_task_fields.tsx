import { Text, TextInput, View } from "react-native";
import { styles } from "../../styles/home.styles";

type ModalTaskFieldsProps = {
  taskTitle: string;
  onTitleChange: (title: string) => void;
  onSubmit: () => void;
};

export function ModalTaskFields({
  taskTitle,
  onTitleChange,
  onSubmit,
}: ModalTaskFieldsProps) {
  return (
    <View>
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
    </View>
  );
}
