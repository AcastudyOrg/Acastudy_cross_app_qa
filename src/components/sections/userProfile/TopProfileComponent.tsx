import { View, Text, Image, TouchableOpacity } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import { STRING } from "../../../constants/strings";
import { COLORS, IMAGES } from "../../../constants";
import CustomIcon from "../../common/CustomIcon";

const TopProfileComponent = () => {
  return (
    <View style={profileScreenStyles.topProfileContainer}>
      <View style={profileScreenStyles.topProfileImageContainer}>
        <Image
          source={{ uri: IMAGES.studentPicture }}
          style={profileScreenStyles.topProfileImage}
        />
        <View style={profileScreenStyles.topProfileTextNameContainer}>
          <Text style={profileScreenStyles.topProfileTextNameItem}>
            {STRING.username}
          </Text>
          <Text style={profileScreenStyles.topProfileTextNameItems}>
            {STRING.userAddress}
          </Text>
          <Text style={profileScreenStyles.topProfileTextNameItems}>
            {STRING.userPostCode}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={profileScreenStyles.floatingButton} onPress={() => console.log("Settings")} >
        <CustomIcon set={"Feather"} name={"settings"} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default TopProfileComponent;
