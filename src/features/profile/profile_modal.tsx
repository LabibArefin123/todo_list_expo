import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./profile_styles";

type ProfileModalProps = {
  visible: boolean;
  accent: string;
  draftName: string;
  draftEmail: string;
  setDraftName: (value: string) => void;
  setDraftEmail: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
};

export function ProfileEditModal({
  visible,
  accent,
  draftName,
  draftEmail,
  setDraftName,
  setDraftEmail,
  onSave,
  onClose,
}: ProfileModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Close edit profile modal"
        />

        <View style={styles.modalCard}>
          <View style={styles.modalHandle} />

          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalEyebrow}>YOUR ACCOUNT</Text>
              <Text style={styles.modalTitle}>Edit profile</Text>
            </View>

            <Pressable
              onPress={onClose}
              style={styles.modalClose}
              accessibilityRole="button"
              accessibilityLabel="Close"
            >
              <Text style={styles.modalCloseText}>×</Text>
            </Pressable>
          </View>

          <Text style={styles.inputLabel}>FULL NAME</Text>
          <TextInput
            value={draftName}
            onChangeText={setDraftName}
            placeholder="Enter your name"
            placeholderTextColor="#A0A5B5"
            style={styles.input}
            autoCapitalize="words"
            maxLength={60}
          />

          <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
          <TextInput
            value={draftEmail}
            onChangeText={setDraftEmail}
            placeholder="Enter your email"
            placeholderTextColor="#A0A5B5"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={120}
          />

          <Pressable
            onPress={onSave}
            style={({ pressed }) => [
              styles.saveButton,
              { backgroundColor: accent },
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.saveButtonText}>Save changes</Text>
          </Pressable>

          <Pressable onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
