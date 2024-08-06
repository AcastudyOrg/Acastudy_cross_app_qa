import { Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../constants";
import { getImageSource } from "../../../utils/config";

const ComingSoonComponent = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={getImageSource(IMAGES.comingSoon)}
        alt="coming-soon-image"
        style={styles.imageItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageItem: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
});

export default ComingSoonComponent;
