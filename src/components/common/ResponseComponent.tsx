import { Image, StyleSheet, Text, View } from "react-native";

import { QueryResponse } from "../../types/index";

import { IMAGES, COLORS, SIZE, WEIGHT } from "../../constants";

const QueryResponseComponent = ({ title, message, success }: QueryResponse) => {
  return (
    <View style={styles.container}>
      <Image
        src={success ? IMAGES.success : IMAGES.error}
        style={styles.responseImageItem}
      />

      <Text style={styles.responseTitleText}>{title}</Text>
      <Text style={styles.responseMessageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  responseImageItem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  responseTitleText: {
    marginVertical: 20,
    color: COLORS.white,
    fontSize: SIZE.xxxl,
    fontWeight: WEIGHT.bold,
  },
  responseMessageText: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontWeight: WEIGHT.thin,
    textAlign: "center",
  },
});

export default QueryResponseComponent;
