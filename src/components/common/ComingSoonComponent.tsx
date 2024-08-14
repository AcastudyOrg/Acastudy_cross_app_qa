import { Image, View } from "react-native";

import { IMAGES } from "../../constants";
import { getImageSource } from "../../../utils/config";
import { comingSoonComponentStyle } from "../../styles/componentsStyle/commonStyle/comingSoonComponentStyle";

const ComingSoonComponent = () => {
  return (
    <View style={comingSoonComponentStyle.imageContainer}>
      <Image
        source={getImageSource(IMAGES.comingSoon)}
        alt="coming-soon-image"
        style={comingSoonComponentStyle.imageItem}
      />
    </View>
  );
};

export default ComingSoonComponent;
