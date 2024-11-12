import React from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { dropDownComponentStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/dropDownComponentStyle';

type DropdownProps = {
    value: any;
    label?: string;
    placeholder: string;
    data: any;
    disabled?: boolean;
    onChange: (value: any) => any;
}

export const DropDownComponent: React.FC<DropdownProps> = ({
    value = "",
    label,
    placeholder,
    onChange,
    data,
    disabled
}) => {
    return (
        <View style={dropDownComponentStyles.container}>
            {label && <Text style={dropDownComponentStyles.label}>{label}</Text>}
            <View style={dropDownComponentStyles.inputContainer}>
                <Dropdown
                    value={value}
                    onChange={onChange}
                    labelField="label"
                    valueField="value"
                    data={data}
                    maxHeight={300}
                    disable={disabled}
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