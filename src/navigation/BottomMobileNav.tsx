import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { links } from "../../assets/data/navigationLinks";
import { bottomMobileNavStyleS } from "../styles/navigationStyle/bottomMobileNavStyle";
import { COLORS } from "../constants";

const BottomMobileNavigation = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  return (
    <View style={bottomMobileNavStyleS.bottomTabMainContainer}>
      {links.map((item, i) => {
        const isActive = route.name === item.link;
        return (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate(item.link)}
            style={bottomMobileNavStyleS.bottomTabContentContainer}
          >
            <Image source={item.icon} style={bottomMobileNavStyleS.sidebarLinksIconItem} />
            <Text
              style={[
                bottomMobileNavStyleS.bottomTabItem,
                { color: isActive ? COLORS.purple : COLORS.white },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomMobileNavigation;
