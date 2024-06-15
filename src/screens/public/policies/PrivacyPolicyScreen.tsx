import { useRef } from "react";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import { COLORS, FONT, SIZE } from "../../../constants";
import { AppTopNavigationComponent } from "../../../components";

const PrivacyPolicyScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleEmailPress = async () => {
    const email = "mathebulaglobal@gmail.com";
    const url = `mailto:${email}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  function renderScreenTopSection() {
    return (
      <View style={styles.privacyNavigatorContainer}>
        <AppTopNavigationComponent backNavigation={true} companyLogo={true} />
      </View>
    );
  }

  function renderTitleSection() {
    return (
      <View style={styles.privacyTitleContainer}>
        <Text style={styles.privacyTitleItem}>Privacy Policy</Text>

        <View style={styles.privacyLastUpdateContainer}>
          <Text style={styles.privacyLastUpdateTextItem}>
            Last updated: 14 June 2024
          </Text>
        </View>

        <Text style={styles.privacyInfoTextItem}>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You. We use Your Personal data to provide and improve the
          Service. By using the Service, You agree to the collection and use of
          information in accordance with this Privacy Policy.
        </Text>
      </View>
    );
  }

  function renderInterpretationSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Interpretation and Definitions
        </Text>

        <Text style={styles.privacySubtitleItem}>Interpretation</Text>

        <Text style={styles.privacyInfoTextItem}>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Text>

        <Text style={styles.privacySubtitleItem}>Definitions</Text>

        <Text style={styles.privacyInfoTextItem}>
          For the purposes of this Privacy Policy:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Account means a unique account created for You to access our
              Service or parts of our Service.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Affiliate means an entity that controls, is controlled by or is
              under common control with a party, where "control"
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              means ownership of 50% or more of the shares, equity interest or
              other securities entitled to vote for election of directors or
              other managing authority.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Company (referred to as either "the Company", "We", "Us" or "Our"
              in this Agreement) refers to Mathebula Global, 1 thutlwa
              street,polokwane.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Country refers to: South Africa
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Personal Data is any information that relates to an identified or
              identifiable individual.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Service refers to the Application.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Service Provider means any natural or legal person who processes
              the data on behalf of the Company. It refers to third-party
              companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to
              perform services related to the Service or to assist the Company
              in analyzing how the Service is used.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Third-party Social Media Service refers to any website or any
              social network website through which a User can log in or create
              an account to use the Service.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Usage Data refers to data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              You means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderDataCollectionSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Collecting and Using Your Personal Data
        </Text>

        <Text style={styles.privacySubtitleItem}>Type of Data Collected:</Text>

        <Text style={styles.privacySubtitleItems}>Personal Data</Text>

        <Text style={styles.privacyInfoTextItem}>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Email address</Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              First name and last name
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Phone number</Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Address, State, Province, ZIP/Postal code, City
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Usage Data</Text>
          </View>
        </View>

        <Text style={styles.privacySubtitleItems}>Usage Data</Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Usage Data is collected automatically when using the Service.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </Text>
          </View>
        </View>

        <Text style={styles.privacySubtitleItems}>
          Information from Third-Party Social Media Services
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          The Company allows You to create an account and log in to use the
          Service through the following Third-party Social Media Services:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Google</Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Facebook</Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Instagram</Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>Twitter</Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>LinkedIn</Text>
          </View>
        </View>

        <Text style={styles.privacyInfoTextItem}>
          If You decide to register through or otherwise grant us access to a
          Third-Party Social Media Service, We may collect Personal data that is
          already associated with Your Third-Party Social Media Service's
          account, such as Your name, Your email address, Your activities or
          Your contact list associated with that account.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          You may also have the option of sharing additional information with
          the Company through Your Third-Party Social Media Service's account.
          If You choose to provide such information and Personal Data, during
          registration or otherwise, You are giving the Company permission to
          use, share, and store it in a manner consistent with this Privacy
          Policy.
        </Text>

        <Text style={styles.privacySubtitleItems}>
          Information Collected while Using the Application
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          While using Our Application, in order to provide features of Our
          Application, We may collect, with Your prior permission:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Pictures and other information from your Device's camera and photo
              library
            </Text>
          </View>
        </View>

        <Text style={styles.privacyInfoTextItem}>
          We use this information to provide features of Our Service, to improve
          and customize Our Service. The information may be uploaded to the
          Company's servers and/or a Service Provider's server or it may be
          simply stored on Your device. You can enable or disable access to this
          information at any time, through Your Device settings.
        </Text>
      </View>
    );
  }

  function renderPersonalDataSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacySubtitleItems}>
          Use of Your Personal Data
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          The Company may use Personal Data for the following purposes:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              products or contracted services, including the security updates,
              when necessary or reasonable for their implementation.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              To manage Your requests: To attend and manage Your requests to Us.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </Text>
          </View>
        </View>

        <Text style={styles.privacyInfoTextItem}>
          We may share Your personal information in the following situations:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, to contact You.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              For business transfers: We may share or transfer Your personal
              information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              With business partners: We may share Your information with Our
              business partners to offer You certain products, services or
              promotions.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              With other users: when You share personal information or otherwise
              interact in the public areas with other users, such information
              may be viewed by all users and may be publicly distributed
              outside. If You interact with other users or register through a
              Third-Party Social Media Service, Your contacts on the Third-Party
              Social Media Service may see Your name, profile, pictures and
              description of Your activity. Similarly, other users will be able
              to view descriptions of Your activity, communicate with You and
              view Your profile.
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              With Your consent: We may disclose Your personal information for
              any other purpose with Your consent.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderRetentionSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacySubtitleItems}>
          Retention of Your Personal Data
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </Text>
      </View>
    );
  }

  function renderTransferDataSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacySubtitleItems}>
          Transfer of Your Personal Data
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </Text>
      </View>
    );
  }

  function renderDeleteDataSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacySubtitleItems}>
          Delete Your Personal Data
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You. Our Service may give
          You the ability to delete certain information about You from within
          the Service.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </Text>
      </View>
    );
  }

  function renderDisclosureSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Disclosure of Your Personal Data
        </Text>

        <Text style={styles.privacySubtitleItem}>Business Transactions</Text>

        <Text style={styles.privacyInfoTextItem}>
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </Text>

        <Text style={styles.privacySubtitleItem}>Law enforcement</Text>

        <Text style={styles.privacyInfoTextItem}>
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </Text>

        <Text style={styles.privacySubtitleItem}>Other legal requirements</Text>

        <Text style={styles.privacyInfoTextItem}>
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Comply with a legal obligation
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Protect and defend the rights or property of the Company
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Protect the personal safety of Users of the Service or the public
            </Text>
          </View>

          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              Protect against legal liability
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderSecuritySection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Security of Your Personal Data
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </Text>
      </View>
    );
  }

  function renderChildrenSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Children's Privacy
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent's consent before We collect and use that
          information.
        </Text>
      </View>
    );
  }

  function renderLinksSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Links to Other Websites
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </Text>
      </View>
    );
  }

  function renderChangeSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>
          Changes to this Privacy Policy
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the "Last
          updated" date at the top of this Privacy Policy.
        </Text>

        <Text style={styles.privacyInfoTextItem}>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </Text>
      </View>
    );
  }

  function renderContactUsSection() {
    return (
      <View style={styles.privacyMainInfoContainer}>
        <Text style={styles.privacyMainSubtitleTextItem}>Contact Us</Text>

        <Text style={styles.privacyInfoTextItem}>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </Text>

        <View style={styles.privacyUnorderListContainer}>
          <View style={styles.privacyUnorderListContent}>
            <Text style={styles.privacyBulletPoint}>●</Text>
            <Text style={styles.privacyListItemText}>
              By email address:{" "}
              <Text onPress={handleEmailPress} style={styles.privacyLinkItem}>
                mathebulaglobal@gmail.com
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderScrollToTopSection() {
    return (
      <View style={styles.privacyScrollTopContainer}>
        <Pressable
          onPress={scrollToTop}
          style={styles.privacyScrollToTopContent}
        >
          <AntDesign name="upcircle" size={28} color={COLORS.white} />
        </Pressable>
      </View>
    );
  }

  function renderScreenContentList() {
    return (
      <>
        {renderScreenTopSection()}
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          {renderTitleSection()}
          {renderInterpretationSection()}
          {renderDataCollectionSection()}
          {renderPersonalDataSection()}
          {renderRetentionSection()}
          {renderTransferDataSection()}
          {renderDeleteDataSection()}
          {renderDisclosureSection()}
          {renderSecuritySection()}
          {renderChildrenSection()}
          {renderLinksSection()}
          {renderChangeSection()}
          {renderContactUsSection()}
        </ScrollView>
        {renderScrollToTopSection()}
      </>
    );
  }

  return (
    <SafeAreaView style={styles.privacyMainContentContainer}>
      {renderScreenContentList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  privacyMainContentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
  },
  privacyNavigatorContainer: {
    width: "100%",
  },
  privacyTitleContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  privacyTitleItem: {
    color: COLORS.darkBlue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.xxxl,
    marginBottom: 20,
  },
  privacyLastUpdateContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  privacyLastUpdateTextItem: {
    color: COLORS.white,
    fontFamily: FONT.interRegular,
    fontSize: SIZE.sm,
    marginBottom: 20,
  },
  privacySubtitleItem: {
    color: COLORS.darkBlue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.xl,
    marginBottom: 10,
  },
  privacySubtitleItems: {
    color: COLORS.darkBlue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.l,
    marginBottom: 10,
  },

  //info section
  privacyMainInfoContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 20,
  },
  privacyMainSubtitleTextItem: {
    color: COLORS.darkBlue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.xxl,
    marginBottom: 10,
  },
  privacyInfoTextItem: {
    color: COLORS.white,
    fontFamily: FONT.interRegular,
    fontSize: SIZE.sm,
    marginBottom: 10,
  },
  privacyUnorderListContainer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  privacyUnorderListContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 2,
  },
  privacyBulletPoint: {
    color: COLORS.white,
    fontSize: SIZE.s,
    marginRight: 10,
  },
  privacyListItemText: {
    color: COLORS.white,
    fontSize: SIZE.sm,
    marginBottom: 5,
  },
  privacyLinkItem: {
    color: COLORS.blue,
  },

  //scroll to top
  privacyScrollTopContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  privacyScrollToTopContent: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: COLORS.darkBlue,
  },
});

export default PrivacyPolicyScreen;
