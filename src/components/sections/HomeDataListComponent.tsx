import React, { useRef, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { ResizeMode, Video } from "expo-av";

import { HomeDataProps, HomeDataItemProps } from "../../types";
import { homeDataListComponentStyles } from "../../styles/componentsStyle/sectionsStyle/homeDataListComponentStyle";

const HomeDataListComponent = ({
  dataTitle,
  data,
  viewAllLink,
}: HomeDataProps) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const renderItem = ({ item }: { item: HomeDataItemProps }) => (
    <View style={homeDataListComponentStyles.itemContainer}>
      {item.mediaType === "video" ? (
        <Video
          ref={video}
          style={homeDataListComponentStyles.itemVideo}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      ) : item.mediaType === "image" ? (
        <Image source={{ uri: item?.mediaFile }} style={homeDataListComponentStyles.itemImage} />
      ) : null}

      <Text style={homeDataListComponentStyles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={homeDataListComponentStyles.homeDataMainContainer}>
      <View style={homeDataListComponentStyles.homeDataTopContainer}>
        <Text style={homeDataListComponentStyles.homeDataTitleItem}>{dataTitle}</Text>
        <Text onPress={viewAllLink} style={homeDataListComponentStyles.homeDataActionItem}>
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

export default HomeDataListComponent;
