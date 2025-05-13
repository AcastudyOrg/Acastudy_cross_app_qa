import { View, Text, Image, TouchableOpacity } from "react-native";
import { profileScreenStyles } from "../../../styles/screensStyle/privateStyle/profileScreenStyle";
import { STRING } from "../../../constants/strings";
import { COLORS, IMAGES } from "../../../constants";
import CustomIcon from "../../common/CustomIcon";
import { UserType } from "@/types/User/User";

interface TopProfileProps {
  user: UserType;
}

const TopProfileComponent: React.FC<TopProfileProps> = ({ user }) => {
  return (
    <View style={profileScreenStyles.topProfileContainer}>
      <View style={profileScreenStyles.topProfileImageContainer}>
        <Image
          source={user?.imageUrl ? { uri: user?.imageUrl } : IMAGES.userPlaceholder}
          style={profileScreenStyles.topProfileImage}
        />
        <View style={profileScreenStyles.topProfileTextNameContainer}>
          <Text style={profileScreenStyles.topProfileTextNameItem}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={profileScreenStyles.topProfileTextNameItems}>
            {user?.address?.city}, {user?.address?.province}
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
