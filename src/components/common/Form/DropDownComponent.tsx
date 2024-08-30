import React from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { dropDownComponentStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/dropDownComponentStyle';

type DropdownProps = {
    value: any;
    label?: string;
    placeholder: string;
    data: any;
    onChangeText: (value: any) => any;
}

export const DropDownComponent: React.FC<DropdownProps> = ({
    value = "",
    label,
    placeholder,
    onChangeText,
    data
}) => {
    return (
        <View style={dropDownComponentStyles.container}>
            {label && <Text style={dropDownComponentStyles.label}>{label}</Text>}
            <View style={dropDownComponentStyles.inputContainer}>
                <Dropdown
                    value={value}
                    onChange={onChangeText}
                    labelField="label"
                    valueField="value"
                    data={data}
                    maxHeight={300}
                    placeholder={placeholder}
                    style={dropDownComponentStyles.input}
                    containerStyle={dropDownComponentStyles.itemContainer}
                    itemTextStyle={dropDownComponentStyles.itemText}
                    selectedTextStyle={dropDownComponentStyles.selectedText}
                    placeholderStyle={dropDownComponentStyles.placeholderText}
                    iconStyle={dropDownComponentStyles.iconStyle}
                />
            </View>
        </View>
    );
}