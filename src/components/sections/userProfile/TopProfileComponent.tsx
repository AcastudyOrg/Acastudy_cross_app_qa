import { View, Text, Image } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { STRING } from "../../../constants/strings";
import { IMAGES } from "../../../constants";

const TopProfileComponent = () => {
  return (
    <View style={profileScreenStyles.topProfileContainer}>
      <View style={profileScreenStyles.topProfileImageContainer}>
        <Image
          source={{
            uri: IMAGES.studentPicture,
          }}
          style={profileScreenStyles.topProfileImage}
        />
      </View>

      <View style={profileScreenStyles.topProfileTextContainer}>
        <View style={profileScreenStyles.topProfileTextEmptyContainer}>
          <Text style={profileScreenStyles.topProfileTextNameItem}></Text>
        </View>

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

        <View style={profileScreenStyles.topProfileButtonContainer}>
          <GradientButtonComponent
            text="Study Credit"
            onPress={() => console.log("Study Credit")}
          />
        </View>
      </View>
    </View>
  );
};

export default TopProfileComponent;
