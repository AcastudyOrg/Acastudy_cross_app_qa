import { Image, View, Text } from "react-native";

import { becomeWhatAtAcaStudyStyles } from "../../../styles/componentsStyle/sectionsStyle/onboarding/becomeWhatAtAcaStudyStyles";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { isNotDesktop } from "../../../../utils/config";
import useScreenWidth from "../../../hooks/useScreenWidth";

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
  const screenWidth = useScreenWidth();
  const isMobile = isNotDesktop(screenWidth);
  return (
    <View
      style={[
        becomeWhatAtAcaStudyStyles.mainContainer,
        {
          flexDirection: isMobile ? "column" : switchRow ? "row-reverse" : "row",
          paddingBottom: isMobile ? 0 : 20,
        },
      ]}>
      <View style={[
        becomeWhatAtAcaStudyStyles.imageContainer,
        { width: isMobile ? "100%" : "48%" }
      ]}>
        <Image source={image} resizeMode="cover" style={[
          becomeWhatAtAcaStudyStyles.imageItem,
          { height: isMobile ? screenWidth : 380 }
        ]} />
      </View>

      <View style={[
        becomeWhatAtAcaStudyStyles.textContainer,
        { width: isMobile ? "100%" : "48%" }
      ]}>
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
          <GradientButtonComponent text={buttonText} onPress={onClick} />
        </View>
      </View>
    </View>
  );
};

export default BecomeWhatAtAcaStudyComponent;
