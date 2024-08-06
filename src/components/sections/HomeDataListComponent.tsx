import React, { useRef, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { ResizeMode, Video } from "expo-av";

import { HomeDataProps, HomeDataItemProps } from "../../types";
import { COLORS, FONT, SIZE } from "../../constants";

const HomeDataListComponent = ({
  dataTitle,
  data,
  viewAllLink,
}: HomeDataProps) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const renderItem = ({ item }: { item: HomeDataItemProps }) => (
    <View style={styles.itemContainer}>
      {item.mediaType === "video" ? (
        <Video
          ref={video}
          style={styles.itemVideo}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      ) : item.mediaType === "image" ? (
        <Image source={{ uri: item?.mediaFile }} style={styles.itemImage} />
      ) : null}

      <Text style={styles.itemTitle}>{item.title}</Text>
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
        horizontal
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
    backgroundColor: COLORS.darkGray,
  },
  itemVideo: {
    width: "100%",
    height: 100,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  itemTitle: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.interRegular,
  },
});

export default HomeDataListComponent;
