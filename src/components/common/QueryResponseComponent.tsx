import { Image, Text, View } from "react-native";

import { QueryResponse } from "../../types/index";
import { queryResponseComponentStyle } from "../../styles/componentsStyle/commonStyle/queryResponseComponentStyle";
import { IMAGES } from "../../constants";

const QueryResponseComponent = ({ title, message, success }: QueryResponse) => {
  return (
    <View style={queryResponseComponentStyle.container}>
      <Image
        source={success ? IMAGES.success : IMAGES.error}
        style={queryResponseComponentStyle.responseImageItem}
      />

      <Text style={queryResponseComponentStyle.responseTitleText}>{title}</Text>
      <Text style={queryResponseComponentStyle.responseMessageText}>{message}</Text>
    </View>
  );
};

export default QueryResponseComponent;
