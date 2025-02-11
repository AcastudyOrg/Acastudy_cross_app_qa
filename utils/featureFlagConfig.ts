type FeatureFlags = {
    STUDY: boolean;
    CHATS: boolean;
    SCHEDULE_A_MEETING: boolean;
    INSTANT_MEETING: boolean;
}

const featureFlagConfig: FeatureFlags = {
    STUDY: getFeatureFlag('STUDY'),
    CHATS: getFeatureFlag('CHATS'),
    SCHEDULE_A_MEETING: getFeatureFlag('SCHEDULE_A_MEETING'),
    INSTANT_MEETING: getFeatureFlag('INSTANT_MEETING')
};

function getFeatureFlag(flag: keyof FeatureFlags): boolean {
    const featureFlags: { [key in keyof FeatureFlags]: boolean } = {
        STUDY: false,
        CHATS: false,
        SCHEDULE_A_MEETING: false,
        INSTANT_MEETING: false
    };

    return featureFlags[flag];
}

export default featureFlagConfig;