import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProfileState } from "./profile_state";
import {
  ProfileHeader,
  ProfileDateCard,
  ProfileHero,
  ProfileOverview,
  ProfilePreferences,
  ProfileAccountActions,
  ProfileFooter,
} from "./profile_components";
import { ProfileEditModal } from "./profile_modal";
import { styles } from "./profile_styles";

export default function ProfileScreen() {
  const profile = useProfileState();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F6F7FC" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <ProfileHeader accent={profile.accent} />

        <ProfileDateCard
          showTime={profile.showTime}
          formattedTime={profile.formattedTime}
          onToggleTime={() => profile.setShowTime((current) => !current)}
        />

        <ProfileHero
          name={profile.name}
          email={profile.email}
          role={profile.role}
          avatarIndex={profile.avatarIndex}
          avatars={profile.avatars}
          accent={profile.accent}
          profileExpanded={profile.profileExpanded}
          onEdit={profile.openEditProfile}
          onCycleAvatar={profile.cycleAvatar}
          onToggleDetails={() =>
            profile.setProfileExpanded((current) => !current)
          }
        />

        <ProfileOverview />

        <ProfilePreferences
          accent={profile.accent}
          showTime={profile.showTime}
          setShowTime={profile.setShowTime}
          notifications={profile.notifications}
          setNotifications={profile.setNotifications}
          darkAccent={profile.darkAccent}
          setDarkAccent={profile.setDarkAccent}
        />

        <ProfileAccountActions onEdit={profile.openEditProfile} />

        <ProfileFooter />
      </ScrollView>

      <ProfileEditModal
        visible={profile.editVisible}
        accent={profile.accent}
        draftName={profile.draftName}
        draftEmail={profile.draftEmail}
        setDraftName={profile.setDraftName}
        setDraftEmail={profile.setDraftEmail}
        onSave={profile.saveProfile}
        onClose={() => profile.setEditVisible(false)}
      />
    </SafeAreaView>
  );
}
