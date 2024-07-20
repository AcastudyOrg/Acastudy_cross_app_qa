import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

import { HomeDataProps, HomeDataItemProps } from "../../types";
import { COLORS, FONT, SIZE } from "../../constants";

const HomeDataListComponent = ({
  dataTitle,
  data,
  viewAllLink,
}: HomeDataProps) => {
  const renderItem = ({ item }: { item: HomeDataItemProps }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item?.mediaFile ? item.mediaFile : "" }}
        style={styles.itemImage}
      />
    </View>
  );

  return (
    <View style={styles.homeDataMainContainer}>
      <View style={styles.homeDataTopContainer}>
        <Text style={styles.homeDataTitleItem}>{dataTitle}</Text>
        <Text onPress={viewAllLink} style={styles.homeDataActionItem}>
          View All
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeDataMainContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  homeDataTopContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeDataTitleItem: {
    color: COLORS.white,
    fontSize: SIZE.xl,
    fontFamily: FONT.interBold,
  },
  homeDataActionItem: {
    color: COLORS.white,
    fontSize: SIZE.s,
    fontFamily: FONT.interRegular,
  },

  //data item
  itemContainer: {
      padding: 10,
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "column",
    gap: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: COLORS.lightGray,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
});

export default HomeDataListComponent;
