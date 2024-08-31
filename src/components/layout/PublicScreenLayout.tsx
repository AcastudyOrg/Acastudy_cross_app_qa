import * as React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { screenSize } from "../../../utils/config";
import { DEVICE_TYPE } from "../../constants/strings";
import { privateScreenLayoutStyles } from "../../styles/componentsStyle/layoutStyle/privateScreenLayoutStyle";
import TopBarComponent from "../common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";

const PublicScreenLayout = ({ children }: { children: React.ReactNode }) => {
    const size = screenSize();

    const user: User = {
        name: "",
        surname: "",
        profilePictureUrl: 0
    };

    return (
        <SafeAreaView style={privateScreenLayoutStyles.layoutContainer}>
            {size === DEVICE_TYPE.desktop ||
                (DEVICE_TYPE.tablet && size !== DEVICE_TYPE.mobile) ? (
                <View style={privateScreenLayoutStyles.topNavContainer}>
                    <TopBarComponent
                        renderRightSection={true}
                        showAppName={true}
                        showSearchBar={false}
                        isLSignedIn={false}
                        user={user}
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
                            user={user}
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
