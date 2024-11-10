import { View, Text, Image, TouchableOpacity } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { STRING } from "../../../constants/strings";
import { COLORS, IMAGES } from "../../../constants";
import { isPlatformIOSorAndroid } from "../../../../utils/config";
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
      <FloatingButton />
    </View>
  );
};

const FloatingButton = () => (
  <TouchableOpacity style={profileScreenStyles.floatingButton} onPress={() => console.log("Settings")} >
    <CustomIcon set={"Feather"} name={"settings"} color={COLORS.white}/>
  </TouchableOpacity>
);

export default TopProfileComponent;
