import { Image, Text, View } from "react-native";

import { IMAGES } from "../../constants";
import { loadingComponentStyle } from "../../styles/componentsStyle/commonStyle/loadingComponentStyle";

const LoadingComponent = () => {
  return (
    <View style={loadingComponentStyle.loaderContainer}>
      <Image source={{ uri: IMAGES.loader }} style={loadingComponentStyle.loaderImageItem} />

      <Text style={loadingComponentStyle.loaderTitleText}>Please wait</Text>
      <Text style={loadingComponentStyle.loaderMessageText}>
        We are fetching all your requested information...
      </Text>
    </View>
  );
};

export default LoadingComponent;
