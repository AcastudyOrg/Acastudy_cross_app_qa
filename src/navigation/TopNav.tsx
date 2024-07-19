import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";

const TopNav = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { width } = Dimensions.get("window");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      {width < 768 && (
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <AntDesign
            name={isSidebarOpen ? "menufold" : "menuunfold"}
            size={24}
            color={COLORS.white}
          />
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
      <View style={styles.profile}>
        <Text style={styles.profileName}>John Doe</Text>
        <Image
          style={styles.avatar}
          source={{ uri: "https://via.placeholder.com/150" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.purple,
    padding: 10,
  },
  menuButton: {
    padding: 5,
  },
  searchInput: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 5,
    width: "30%",
  },
  profile: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    color: COLORS.white,
    marginLeft: 10,
  },
});

export default TopNav;
