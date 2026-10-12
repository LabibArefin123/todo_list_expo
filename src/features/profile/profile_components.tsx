import { Alert, Pressable, Switch, Text, View } from "react-native";
import { PROFILE_DATE } from "./profile_constants";
import { styles } from "./profile_styles";

type HeaderProps = {
  accent: string;
};

export function ProfileHeader({ accent }: HeaderProps) {
  return (
    <View style={styles.topBar}>
      <View>
        <Text style={styles.eyebrow}>TASKFLOW / ACCOUNT</Text>
        <Text style={styles.pageTitle}>My Profile</Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.topIcon, pressed && styles.pressed]}
        onPress={() =>
          Alert.alert(
            "Account settings",
            "Manage your profile and preferences below.",
          )
        }
        accessibilityRole="button"
        accessibilityLabel="Account information"
      >
        <Text style={[styles.topIconText, { color: accent }]}>•••</Text>
      </Pressable>
    </View>
  );
}

type DateCardProps = {
  showTime: boolean;
  formattedTime: string;
  onToggleTime: () => void;
};

export function ProfileDateCard({
  showTime,
  formattedTime,
  onToggleTime,
}: DateCardProps) {
  return (
    <View style={styles.dateCard}>
      <View style={styles.dateIcon}>
        <Text style={styles.dateIconText}>◷</Text>
      </View>

      <View style={styles.dateContent}>
        <Text style={styles.dateLabel}>YOUR DAY, YOUR PACE</Text>
        <Text style={styles.dateText}>{PROFILE_DATE}</Text>
        {showTime && <Text style={styles.timeText}>{formattedTime}</Text>}
      </View>

      <Pressable
        onPress={onToggleTime}
        style={({ pressed }) => [styles.timeToggle, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={showTime ? "Hide clock" : "Show clock"}
      >
        <Text style={styles.timeToggleText}>{showTime ? "−" : "+"}</Text>
      </Pressable>
    </View>
  );
}

type ProfileHeroProps = {
  name: string;
  email: string;
  role: string;
  avatarIndex: number;
  avatars: string[];
  accent: string;
  profileExpanded: boolean;
  onEdit: () => void;
  onCycleAvatar: () => void;
  onToggleDetails: () => void;
};

export function ProfileHero({
  name,
  email,
  role,
  avatarIndex,
  avatars,
  accent,
  profileExpanded,
  onEdit,
  onCycleAvatar,
  onToggleDetails,
}: ProfileHeroProps) {
  return (
    <View style={styles.profileCard}>
      <View style={[styles.heroGlow, { backgroundColor: accent }]} />

      <View style={styles.heroTopRow}>
        <View style={styles.memberBadge}>
          <View style={styles.onlineDot} />
          <Text style={styles.memberBadgeText}>ACTIVE MEMBER</Text>
        </View>

        <Pressable
          style={styles.editButton}
          onPress={onEdit}
          accessibilityRole="button"
        >
          <Text style={styles.editButtonText}>✎ Edit</Text>
        </Pressable>
      </View>

      <View style={styles.avatarArea}>
        <Pressable
          onPress={onCycleAvatar}
          style={({ pressed }) => [
            styles.avatarOuter,
            { borderColor: accent },
            pressed && styles.pressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Change avatar initials"
        >
          <View style={[styles.avatar, { backgroundColor: accent }]}>
            <Text style={styles.avatarLetter}>{avatars[avatarIndex]}</Text>
          </View>

          <View style={styles.avatarEdit}>
            <Text style={styles.avatarEditText}>✎</Text>
          </View>
        </Pressable>

        <Text style={styles.avatarHint}>TAP AVATAR TO CHANGE</Text>
      </View>

      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileEmail}>{email}</Text>

      <View style={styles.roleBadge}>
        <Text style={styles.roleText}>{role}</Text>
      </View>

      <Pressable
        onPress={onToggleDetails}
        style={({ pressed }) => [
          styles.profileDetailsButton,
          pressed && styles.pressed,
        ]}
        accessibilityRole="button"
      >
        <Text style={styles.profileDetailsText}>
          {profileExpanded ? "Hide profile details" : "View profile details"}
        </Text>
        <Text style={styles.profileDetailsArrow}>
          {profileExpanded ? "⌃" : "⌄"}
        </Text>
      </Pressable>

      {profileExpanded && (
        <View style={styles.expandedDetails}>
          <View style={styles.detailLine}>
            <Text style={styles.detailLabel}>Display name</Text>
            <Text style={styles.detailValue}>{name}</Text>
          </View>

          <View style={styles.detailLine}>
            <Text style={styles.detailLabel}>Email address</Text>
            <Text style={styles.detailValue}>{email}</Text>
          </View>

          <View style={styles.detailLine}>
            <Text style={styles.detailLabel}>Membership</Text>
            <Text style={styles.detailValue}>TaskFlow Member</Text>
          </View>
        </View>
      )}
    </View>
  );
}

function SectionHeader({
  title,
  caption,
}: {
  title: string;
  caption?: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {caption ? <Text style={styles.sectionCaption}>{caption}</Text> : null}
    </View>
  );
}

export function ProfileOverview() {
  return (
    <>
      <SectionHeader title="Account overview" caption="YOUR WORKSPACE" />

      <View style={styles.overviewGrid}>
        <View style={styles.overviewCard}>
          <View style={[styles.overviewIcon, { backgroundColor: "#EDE9FE" }]}>
            <Text style={styles.overviewEmoji}>✓</Text>
          </View>
          <Text style={styles.overviewValue}>TaskFlow</Text>
          <Text style={styles.overviewLabel}>Workspace</Text>
        </View>

        <View style={styles.overviewCard}>
          <View style={[styles.overviewIcon, { backgroundColor: "#DDF7ED" }]}>
            <Text style={styles.overviewEmoji}>✦</Text>
          </View>
          <Text style={styles.overviewValue}>Focused</Text>
          <Text style={styles.overviewLabel}>Your mindset</Text>
        </View>

        <View style={styles.overviewCard}>
          <View style={[styles.overviewIcon, { backgroundColor: "#FFF0D9" }]}>
            <Text style={styles.overviewEmoji}>♧</Text>
          </View>
          <Text style={styles.overviewValue}>Personal</Text>
          <Text style={styles.overviewLabel}>Account type</Text>
        </View>
      </View>
    </>
  );
}

type PreferencesProps = {
  accent: string;
  showTime: boolean;
  setShowTime: (value: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  darkAccent: boolean;
  setDarkAccent: (value: boolean) => void;
};

export function ProfilePreferences({
  accent,
  showTime,
  setShowTime,
  notifications,
  setNotifications,
  darkAccent,
  setDarkAccent,
}: PreferencesProps) {
  return (
    <>
      <SectionHeader title="Preferences" caption="MAKE IT YOURS" />

      <View style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <View style={[styles.settingIcon, { backgroundColor: "#EDE9FE" }]}>
            <Text style={styles.settingIconText}>◷</Text>
          </View>

          <View style={styles.settingCopy}>
            <Text style={styles.settingTitle}>Live clock</Text>
            <Text style={styles.settingDescription}>
              Show seconds beside today's date
            </Text>
          </View>

          <Switch
            value={showTime}
            onValueChange={setShowTime}
            trackColor={{ false: "#D9DDE8", true: accent }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingDivider} />

        <View style={styles.settingRow}>
          <View style={[styles.settingIcon, { backgroundColor: "#DDF7ED" }]}>
            <Text style={styles.settingIconText}>♧</Text>
          </View>

          <View style={styles.settingCopy}>
            <Text style={styles.settingTitle}>Notifications</Text>
            <Text style={styles.settingDescription}>
              Enable your notification preference
            </Text>
          </View>

          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#D9DDE8", true: accent }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingDivider} />

        <View style={styles.settingRow}>
          <View style={[styles.settingIcon, { backgroundColor: "#E0EEFF" }]}>
            <Text style={styles.settingIconText}>✦</Text>
          </View>

          <View style={styles.settingCopy}>
            <Text style={styles.settingTitle}>Accent theme</Text>
            <Text style={styles.settingDescription}>
              Switch your profile accent color
            </Text>
          </View>

          <Switch
            value={darkAccent}
            onValueChange={setDarkAccent}
            trackColor={{ false: "#D9DDE8", true: accent }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>
    </>
  );
}

export function ProfileAccountActions({ onEdit }: { onEdit: () => void }) {
  return (
    <>
      <SectionHeader title="Account" />

      <View style={styles.settingsCard}>
        <Pressable
          onPress={onEdit}
          style={({ pressed }) => [styles.actionRow, pressed && styles.pressed]}
        >
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>✎</Text>
          </View>

          <View style={styles.settingCopy}>
            <Text style={styles.settingTitle}>Edit personal information</Text>
            <Text style={styles.settingDescription}>
              Update your name and email
            </Text>
          </View>

          <Text style={styles.actionArrow}>›</Text>
        </Pressable>

        <View style={styles.settingDivider} />

        <Pressable
          onPress={() =>
            Alert.alert(
              "Privacy",
              "Your profile details are currently stored in this screen's local state. Connect a backend to persist account information.",
            )
          }
          style={({ pressed }) => [styles.actionRow, pressed && styles.pressed]}
        >
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>◇</Text>
          </View>

          <View style={styles.settingCopy}>
            <Text style={styles.settingTitle}>Privacy & security</Text>
            <Text style={styles.settingDescription}>
              Review your account privacy
            </Text>
          </View>

          <Text style={styles.actionArrow}>›</Text>
        </Pressable>

        <View style={styles.settingDivider} />

        <Pressable
          onPress={() =>
            Alert.alert(
              "Sign out",
              "Connect your authentication system to enable sign out.",
            )
          }
          style={({ pressed }) => [styles.actionRow, pressed && styles.pressed]}
        >
          <View style={[styles.actionIcon, { backgroundColor: "#FDE8E8" }]}>
            <Text style={[styles.actionIconText, { color: "#DC4545" }]}>↗</Text>
          </View>

          <View style={styles.settingCopy}>
            <Text style={[styles.settingTitle, { color: "#D74444" }]}>
              Sign out
            </Text>
            <Text style={styles.settingDescription}>
              Leave your current session
            </Text>
          </View>

          <Text style={[styles.actionArrow, { color: "#D74444" }]}>›</Text>
        </Pressable>
      </View>
    </>
  );
}

export function ProfileFooter() {
  return (
    <View>
      <Text style={styles.footerText}>MADE FOR YOUR NEXT GREAT DAY</Text>
      <Text style={styles.versionText}>TASKFLOW · PROFILE 1.0</Text>
    </View>
  );
}
