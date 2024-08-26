import { Image, View, Text, Platform } from "react-native";

import { becomeWhatAtAcaStudyStyles } from "../../../styles/componentsStyle/sectionsStyle/onboarding/becomeWhatAtAcaStudyStyles";
import ButtonComponent from "../../common/Form/ButtonComponent";

type becomeComponentProps = {
  image: string | any;
  title: string;
  firstSubtitle: string;
  firstInfo: string;
  secondSubtitle: string;
  secondInfo: string;
  switchRow: boolean;
  extraInfo?: string;
  buttonText: string;
  onClick: () => void;
};

const BecomeWhatAtAcaStudyComponent = ({
  image,
  title,
  firstSubtitle,
  firstInfo,
  secondSubtitle,
  secondInfo,
  switchRow,
  extraInfo,
  buttonText,
  onClick,
}: becomeComponentProps) => {
  return (
    <View
      style={[
        becomeWhatAtAcaStudyStyles.mainContainer,
        {
          flexDirection:
            Platform.OS === "ios" || Platform.OS === "android"
              ? "column-reverse"
              : switchRow
              ? "row-reverse"
              : "row",
        },
      ]}
    >
      <View style={becomeWhatAtAcaStudyStyles.imageContainer}>
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          resizeMode="cover"
          style={becomeWhatAtAcaStudyStyles.imageItem}
        />
      </View>

      <View style={becomeWhatAtAcaStudyStyles.textContainer}>
        <Text style={becomeWhatAtAcaStudyStyles.titleText}>{title}</Text>
        <View style={becomeWhatAtAcaStudyStyles.infoTextContainer}>
          <Text style={becomeWhatAtAcaStudyStyles.subtitleText}>
            {firstSubtitle}
          </Text>
          <Text style={becomeWhatAtAcaStudyStyles.infoText}>{firstInfo}</Text>
        </View>

        <View style={becomeWhatAtAcaStudyStyles.infoTextContainer}>
          <Text style={becomeWhatAtAcaStudyStyles.subtitleText}>
            {secondSubtitle}
          </Text>
          <Text style={becomeWhatAtAcaStudyStyles.infoText}>{secondInfo}</Text>
          {extraInfo && (
            <Text style={becomeWhatAtAcaStudyStyles.extraInfoText}>
              {extraInfo}
            </Text>
          )}
        </View>

        <View style={becomeWhatAtAcaStudyStyles.buttonContainer}>
          <ButtonComponent primary text={buttonText} onPress={onClick} />
        </View>
      </View>
    </View>
  );
};

export default BecomeWhatAtAcaStudyComponent;
