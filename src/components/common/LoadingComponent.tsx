import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, IMAGES, SIZE, WEIGHT } from "../../constants";

const LoadingComponent = () => {
  return (
    <View style={styles.loaderContainer}>
      <Image source={{ uri: IMAGES.loader }} style={styles.loaderImageItem} />

      <Text style={styles.loaderTitleText}>Please wait</Text>
      <Text style={styles.loaderMessageText}>
        We are fetching all your requested information...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: COLORS.black,
  },
  loaderImageItem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  loaderTitleText: {
    marginVertical: 20,
    color: COLORS.white,
    fontSize: SIZE.xxxl,
    fontFamily: FONT.interBold,
  },
  loaderMessageText: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontWeight: WEIGHT.thin,
    textAlign: "center",
  },
});

export default LoadingComponent;
