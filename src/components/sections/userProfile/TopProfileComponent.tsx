import { View, Text, Image } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { STRING } from "../../../constants/strings";

const TopProfileComponent = () => {
  return (
    <View style={profileScreenStyles.topProfileContainer}>
      <View style={profileScreenStyles.topProfileImageContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1649123245135-4db6ead931b5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
