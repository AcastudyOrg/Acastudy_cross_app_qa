import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import useScreenWidth from "../../../hooks/useScreenWidth";
import { homeTileScreenWidth, isMobile } from "../../../../utils/config";

import { COLORS, IMAGES } from "../../../constants";
import { STRING } from "../../../constants/strings";
import { studyFeedStyles } from "../../../styles/componentsStyle/sectionsStyle/study/studyFeedStyle";

const StudyFeedComponent = () => {
  const screenWidth = useScreenWidth();
  const containerWidth = homeTileScreenWidth(screenWidth);
  const mobile = isMobile(screenWidth);

  const handleOptions = () => {
    console.log(
      "show modal with options to RSVP, report, contact tutor, set reminder, add to calendar"
    );
  };

  const showTutorProfile = () => {
    console.log("navigate to see tutor profile");
  };

  const readMoreAboutStudy = () => {
    console.log("navigate to see tutor profile");
  };

  return (
    <View
      style={[
        studyFeedStyles.mainContainer,
        { width: mobile ? containerWidth * 2.55 : containerWidth * 1.4 },
      ]}
    >
      <View style={studyFeedStyles.feedMainContainer}>
        <View style={studyFeedStyles.feedTopContainer}>
          <Pressable
            onPress={showTutorProfile}
            style={studyFeedStyles.feedAvatarContainer}
          >
            <Image
              source={{ uri: IMAGES.studentPicture }}
              alt="author"
              style={studyFeedStyles.feedAvatarItem}
            />
          </Pressable>

          <View style={studyFeedStyles.feedTopTextContainer}>
            <View style={studyFeedStyles.feedTopTextActionContainer}>
              <View style={studyFeedStyles.feedTopTextItemContainer}>
                <Text numberOfLines={1} style={studyFeedStyles.feedTopTextItem}>
                  {STRING.studyPostTitle}
                </Text>
              </View>
              <Pressable
                onPress={handleOptions}
                style={studyFeedStyles.feedTopActionItemContainer}
              >
                <SimpleLineIcons
                  name="options-vertical"
                  size={10}
                  color={COLORS.white}
                />
              </Pressable>
            </View>

            <View style={studyFeedStyles.feedTopTextNameContainer}>
              <Text
                onPress={showTutorProfile}
                numberOfLines={1}
                style={studyFeedStyles.feedTopTextNameItem}
              >
                {STRING.studyTutorName}
              </Text>
            </View>

            <View style={studyFeedStyles.feedTopTextDateContainer}>
              <View style={studyFeedStyles.feedTopTextDateRsvpContainer}>
                <Text
                  numberOfLines={1}
                  style={studyFeedStyles.feedTopTextTimeItem}
                >
                  {STRING.studyDate}
                </Text>
                <Text
                  numberOfLines={1}
                  style={studyFeedStyles.feedTopTextTimeItem}
                >
                  RSVP: {STRING.studyRSVPies}
                </Text>
              </View>

              <View style={studyFeedStyles.feedTopTextTimeContainer}>
                <Text
                  numberOfLines={1}
                  style={studyFeedStyles.feedTopTextTimeItem}
                >
                  {STRING.studyDuration}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={studyFeedStyles.feedMiddleContainer}>
          <Text
            onPress={readMoreAboutStudy}
            numberOfLines={2}
            style={studyFeedStyles.feedMiddleTextItem}
          >
            {STRING.studyPostText}
          </Text>
        </View>

        <View style={studyFeedStyles.feedBottomContainer}>
          <Image
            source={{ uri: IMAGES.maths }}
            alt="post-image"
            style={studyFeedStyles.feedBottomPostImageItem}
          />
        </View>
      </View>
    </View>
  );
};

export default StudyFeedComponent;
