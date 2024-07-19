import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import TopNav from "../../navigation/TopNav";
import Sidebar from "../../navigation/SidebarNavComponent";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");

const PrivateScreenLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <SafeAreaView style={styles.layoutContainer}>
      <View style={styles.topNavContainer}>
        <TopNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </View>
      <View style={styles.contentContainer}>
        <View
          style={[styles.sidebarContainer, isSidebarOpen && styles.sidebarOpen]}
        >
          <Sidebar />
        </View>
        {isSidebarOpen && (
          <TouchableWithoutFeedback onPress={toggleSidebar}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
        )}
        <ScrollView style={styles.mainContent}>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  topNavContainer: {
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    position: "relative",
  },
  sidebarContainer: {
    width: width > 768 ? "25%" : "0%",
    height: "100%",
    backgroundColor: colors.red,
    overflow: "hidden",
    position: "absolute",
    zIndex: 10,
  },
  sidebarOpen: {
    width: width > 768 ? "25%" : "45%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 5,
  },
  mainContent: {
    flex: 1,
    height: "100%",
  },
});

export default PrivateScreenLayout;
