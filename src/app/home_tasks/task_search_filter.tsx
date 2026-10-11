import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/home.styles";
import { filters } from "./task_helpers";
import type { Filter } from "./task_types";

type TaskSearchFilterProps = {
  search: string;
  filter: Filter;
  onSearchChange: (search: string) => void;
  onFilterChange: (filter: Filter) => void;
};

export function TaskSearchFilter({
  search,
  filter,
  onSearchChange,
  onFilterChange,
}: TaskSearchFilterProps) {
  return (
    <>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={19} color="#9996A4" />
        <TextInput
          value={search}
          onChangeText={onSearchChange}
          placeholder="Search your tasks..."
          placeholderTextColor="#A5A2AE"
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <Pressable
            onPress={() => onSearchChange("")}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Ionicons name="close-circle" size={19} color="#9996A4" />
          </Pressable>
        )}
      </View>
      <View style={styles.filterContainer}>
        {filters.map((item) => (
          <Pressable
            key={item}
            onPress={() => onFilterChange(item)}
            style={[
              styles.filterButton,
              filter === item && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.filterTextActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </>
  );
}
