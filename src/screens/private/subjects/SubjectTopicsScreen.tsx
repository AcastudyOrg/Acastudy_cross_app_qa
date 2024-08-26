import React, { useState } from "react";
import { View } from "react-native";

import { PrivateScreenLayout } from "../../../components";
import { DropDownComponent } from "../../../components/common/Form/DropDownComponent";

const SubjectTopicsScreen = () => {
    const [select, setSelect] = useState("");

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    return (
        <PrivateScreenLayout>
            <View style={{width: "40%"}}>
                <DropDownComponent data={data} placeholder="Tutor" value={select} onChangeText={setSelect} />
            </View>
        </PrivateScreenLayout>
    );
};

export default SubjectTopicsScreen;
