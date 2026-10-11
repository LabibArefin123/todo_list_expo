import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/home.styles";

type ModalHeaderProps = {
  onClose: () => void;
};

export function ModalHeader({ onClose }: ModalHeaderProps) {
  return (
    <>
      <View style={styles.modalHandle} />
      <View style={styles.modalHeader}>
        <View>
          <Text style={styles.modalTitle}>Create a task</Text>
          <Text style={styles.modalSubtitle}>Make your next move count.</Text>
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
    </>
  );
}
