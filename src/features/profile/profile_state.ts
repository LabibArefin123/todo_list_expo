import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { AVATARS, PROFILE_COLORS } from "./profile_constants";

export function useProfileState() {
  const [name, setName] = useState("Alex Morgan");
  const [email, setEmail] = useState("alex.morgan@example.com");
  const [role] = useState("Productivity Enthusiast");
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [showTime, setShowTime] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkAccent, setDarkAccent] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [draftName, setDraftName] = useState(name);
  const [draftEmail, setDraftEmail] = useState(email);
  const [clock, setClock] = useState(new Date());

  const accent = darkAccent
    ? PROFILE_COLORS.alternate
    : PROFILE_COLORS.primary;

  useEffect(() => {
    if (!showTime) return;

    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [showTime]);

  const formattedTime = clock.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const openEditProfile = () => {
    setDraftName(name);
    setDraftEmail(email);
    setEditVisible(true);
  };

  const saveProfile = () => {
    const cleanName = draftName.trim();
    const cleanEmail = draftEmail.trim();

    if (!cleanName) {
      Alert.alert("Name required", "Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    setName(cleanName);
    setEmail(cleanEmail);
    setEditVisible(false);

    Alert.alert("Profile updated", "Your profile has been updated.");
  };

  const cycleAvatar = () => {
    setAvatarIndex((current) => (current + 1) % AVATARS.length);
  };

  return {
    name,
    email,
    role,
    avatarIndex,
    avatars: AVATARS,
    accent,
    showTime,
    setShowTime,
    notifications,
    setNotifications,
    darkAccent,
    setDarkAccent,
    profileExpanded,
    setProfileExpanded,
    editVisible,
    setEditVisible,
    draftName,
    setDraftName,
    draftEmail,
    setDraftEmail,
    formattedTime,
    openEditProfile,
    saveProfile,
    cycleAvatar,
  };
}