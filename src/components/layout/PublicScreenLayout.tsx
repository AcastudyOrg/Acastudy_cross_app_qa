import * as React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { isNotMobile } from "../../../utils/config";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";
import TopBarComponent from "../common/TopBar/TopBarComponent";
import useScreenWidth from "../../hooks/useScreenWidth";

const PublicScreenLayout = ({ children }: { children: React.ReactNode }) => {
    const screenWidth = useScreenWidth();
    const isNotMobileWidth = isNotMobile(screenWidth);

    return (
        <SafeAreaView style={privateScreenLayoutStyles.layoutContainer}>
            {isNotMobileWidth ? (
                <View style={privateScreenLayoutStyles.topNavContainer}>
                    <TopBarComponent
                        renderRightSection={true}
                        showAppName={true}
                        showSearchBar={false}
                        isLSignedIn={false}
                        showBecomeATutorOnly={false}
                    />
                    <ScrollView
                        style={privateScreenLayoutStyles.childrenScrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={privateScreenLayoutStyles.mainContent}>
                            {children}
                        </View>
                    </ScrollView>
                </View>
            ) : (
                <View style={privateScreenLayoutStyles.mobileScrollViewContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TopBarComponent
                            renderRightSection={true}
                            showAppName={true}
                            showSearchBar={false}
                            isLSignedIn={false}
                            showBecomeATutorOnly={false}
                        />
                        <View style={privateScreenLayoutStyles.mainContent}>
                            {children}
                        </View>
                    </ScrollView>
                </View>
            )}
        </SafeAreaView>
    );
};

export default PublicScreenLayout;
