import { useRef } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../../constants";
import { AppTopNavigationComponent } from "../../../components";
import { termsOfUseScreenStyles } from "../../../styles/screensStyle/publicStyle/policiesStyle/termsOfUseScreenStyle";

const TermsOfUseScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  function renderScreenTopSection() {
    return (
      <View style={termsOfUseScreenStyles.termsNavigatorContainer}>
        <AppTopNavigationComponent backNavigation={true} companyLogo={true} />
      </View>
    );
  }

  function renderTitleSection() {
    return (
      <View style={termsOfUseScreenStyles.termsTitleContainer}>
        <Text style={termsOfUseScreenStyles.termsMainTitleItem}>Terms of Use</Text>

        <View style={termsOfUseScreenStyles.termsLastUpdateContainer}>
          <Text style={termsOfUseScreenStyles.termsLastUpdateTextItem}>
            Last updated: 14 June 2024
          </Text>
        </View>

        <Text style={termsOfUseScreenStyles.termsSubtitleItem}>Welcome to AcaStudy!</Text>
      </View>
    );
  }

  function renderIntroSection() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          These terms and conditions outline the rules and regulations for the
          use of Mathebulaglobal's Mobile Application, located at
          Dev@AcaStudy.co.za.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          By accessing this mobile application we assume you accept these terms
          and conditions. Do not continue to use AcaStudy if you do not agree to
          take all of the terms and conditions stated on this page.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this mobile
          application and compliant to the Company's terms and conditions. "The
          Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
          "Party", "Parties", or "Us", refers to both the Client and ourselves.
          All terms refer to the offer, acceptance and consideration of payment
          necessary to undertake the process of our assistance to the Client in
          the most appropriate manner for the express purpose of meeting the
          Client's needs in respect of provision of the Company's stated
          services, in accordance with and subject to, prevailing law of za. Any
          use of the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </Text>
      </View>
    );
  }

  function renderCookiesSection() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>Cookies</Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          We employ the use of cookies. By accessing AcaStudy , you agreed to
          use cookies in agreement with the Mathebulaglobal's Privacy Policy.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          Most interactive websites use cookies to let us retrieve the user's
          details for each visit. Cookies are used by our mobile application to
          enable the functionality of certain areas to make it easier for people
          visiting our mobile application. Some of our affiliate/advertising
          partners may also use cookies.
        </Text>
      </View>
    );
  }

  function renderLicenseSection() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>License</Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          Unless otherwise stated, Mathebulaglobal and/or its licensors own the
          intellectual property rights for all material on AcaStudy . All
          intellectual property rights are reserved. You may access this from
          AcaStudy for your own personal use subjected to restrictions set in
          these terms and conditions.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>You must not:</Text>

        <View style={termsOfUseScreenStyles.termsUnorderListContainer}>
          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              Republish material from AcaStudy
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              Sell, rent or sub-license material from AcaStudy
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              Reproduce, duplicate or copy material from AcaStudy
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              Redistribute content from AcaStudy
            </Text>
          </View>
        </View>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          Parts of this mobile application offer an opportunity for users to
          post and exchange opinions and information in certain areas of the
          mobile application. Mathebulaglobal does not filter, edit, publish or
          review Comments prior to their presence on the mobile application.
          Comments do not reflect the views and opinions of
          Mathebulaglobal,itsagents and/or affiliates. Comments reflect the
          views and opinions of the person who post their views and opinions. To
          the extent permitted by applicable laws, Mathebulaglobal shall not be
          liable for the Comments or for any liability, damages or expenses
          caused and/or suffered as a result of any use of and/or posting of
          and/or appearance of the Comments on this mobile application.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          Mathebulaglobal reserves the right to monitor all Comments and to
          remove any Comments which can be considered inappropriate, offensive
          or causes breach of these Terms and Conditions.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          You warrant and represent that:
        </Text>

        <View style={termsOfUseScreenStyles.termsUnorderListContainer}>
          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              You are entitled to post the Comments on our mobile application
              and have all necessary licenses and consents to do so;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </Text>
          </View>
        </View>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          You hereby grant Mathebulaglobal a non-exclusive license to use,
          reproduce, edit and authorizeothers to use, reproduce and edit any of
          your Comments in any and all forms, formats or media.
        </Text>
      </View>
    );
  }

  function renderHyperLinkSection() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>
          Hyperlinking to our Content
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          The following organizations may link to our Mobile Application without
          prior written approval:
        </Text>

        <View style={termsOfUseScreenStyles.termsUnorderListContainer}>
          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>Government agencies;</Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>Search engines;</Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>News organizations;</Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              Online directory distributors may link to our Mobile Application
              in the same manner as they hyperlink to the Websites of other
              listed businesses; and
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </Text>
          </View>
        </View>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          These organizations may link to our home page, to publications or to
          other Mobile Application information so long as the link: (a) is not
          in any way deceptive; (b) does not falsely imply sponsorship,
          endorsement or approval of the linking party and its products and/or
          services; and (c) fits within the context of the linking party's site.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          We may consider and approve other link requests from the following
          types of organizations:
        </Text>

        <View style={termsOfUseScreenStyles.termsUnorderListContainer}>
          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              commonly-known consumer and/or business information sources;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              dot.com community sites;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              associations or other groups representing charities;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              online directory distributors;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>internet portals</Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              accounting, law and consulting firms; and
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              educational institutions and trade associations.
            </Text>
          </View>
        </View>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          We will approve link requests from these organizations if we decide
          that: (a) the link would not make us look unfavorably to ourselves or
          to our accredited businesses; (b) the organization does not have any
          negative records with us; (c) the benefit to us from the visibility of
          the hyperlink compensates the absence of Mathebulaglobal; and (d) the
          link is in the context of general resource information.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          These organizations may link to our home page so long as the link: (a)
          is not in any way deceptive; (b) does not falsely imply sponsorship,
          endorsement or approval of the linking party and its products or
          services; and (c) fits within the context of the linking party's site.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          If you are one of the organizations listed in paragraph 2 above and
          are interested in linking to our mobile application, you must inform
          us by sending an e-mail to Mathebulaglobal. Please include your name,
          your organization name, contact information as well as the URL of your
          site, a list of any URLs from which you intend to link to our Mobile
          Application, and a list of the URLs on our site to which you would
          like to link. Wait 2-3 weeks for a response.
        </Text>
      </View>
    );
  }

  function renderApprovedHyperlinksSections() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>
          Approved organizations may hyperlink to our Mobile Application as
          follows:
        </Text>

        <View style={termsOfUseScreenStyles.termsUnorderListContainer}>
          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              By use of our corporate name; or
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              By use of the uniform resource locator being linked to; or
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              By use of any other description of our Mobile Application being
              linked to that makes sense within the context and format of
              content on the linking party's site.
            </Text>
          </View>
        </View>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          No use of Mathebulaglobal's logo or other artwork will be allowed for
          linking absent a trademark license agreement.
        </Text>
      </View>
    );
  }

  function renderOtherContentSection() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>Iframes</Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Mobile Application.
        </Text>

        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>Content Liability</Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          We shall not be hold responsible for any content that appears on your
          Mobile Application. You agree to protect and defend us against all
          claims that is rising on your Mobile Application. No link(s) should
          appear on any Mobile Application that may be interpreted as libelous,
          obscene or criminal, or which infringes, otherwise violates, or
          advocates the infringement or other violation of, any third party
          rights.
        </Text>

        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>
          Reservation of Rights
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          We reserve the right to request that you remove all links or any
          particular link to our Mobile Application. You approve to immediately
          remove all links to our Mobile Application upon request. We also
          reserve the right to amen these terms and conditions and it's linking
          policy at any time. By continuously linking to our Mobile Application,
          you agree to be bound to and follow these linking terms and
          conditions.
        </Text>

        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>
          Removal of links from our mobile application
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          If you find any link on our Mobile Application that is offensive for
          any reason, you are free to contact and inform us any moment. We will
          consider requests to remove links but we are not obligated to or so or
          to respond to you directly.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          We do not ensure that the information on this mobile application is
          correct, we do not warrant its completeness or accuracy; nor do we
          promise to ensure that the mobile application remains available or
          that the material on the mobile application is kept up to date.
        </Text>
      </View>
    );
  }

  function renderDisclaimerSection() {
    return (
      <View style={termsOfUseScreenStyles.termsMainInfoContainer}>
        <Text style={termsOfUseScreenStyles.termsMainSubtitleTextItem}>Disclaimer</Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our mobile
          application and the use of this mobile application. Nothing in this
          disclaimer will:
        </Text>

        <View style={termsOfUseScreenStyles.termsUnorderListContainer}>
          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              limit or exclude our or your liability for death or personal
              injury;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </Text>
          </View>

          <View style={termsOfUseScreenStyles.termsUnorderListContent}>
            <Text style={termsOfUseScreenStyles.termsBulletPoint}>●</Text>
            <Text style={termsOfUseScreenStyles.termsListItemText}>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </Text>
          </View>
        </View>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </Text>

        <Text style={termsOfUseScreenStyles.termsInfoTextItem}>
          As long as the mobile application and the information and services on
          the mobile application are provided free of charge, we will not be
          liable for any loss or damage of any nature.
        </Text>
      </View>
    );
  }

  function renderScrollToTopSection() {
    return (
      <View style={termsOfUseScreenStyles.termsScrollTopContainer}>
        <Pressable onPress={scrollToTop} style={termsOfUseScreenStyles.termsScrollToTopContent}>
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
          {renderIntroSection()}
          {renderCookiesSection()}
          {renderLicenseSection()}
          {renderHyperLinkSection()}
          {renderApprovedHyperlinksSections()}
          {renderOtherContentSection()}
          {renderDisclaimerSection()}
        </ScrollView>
        {renderScrollToTopSection()}
      </>
    );
  }

  return (
    <SafeAreaView style={termsOfUseScreenStyles.termsMainContentContainer}>
      {renderScreenContentList()}
    </SafeAreaView>
  );
};

export default TermsOfUseScreen;
