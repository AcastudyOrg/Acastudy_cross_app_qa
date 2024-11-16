import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { dropDownComponentStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/dropDownComponentStyle';
import { COLORS } from '../../../constants';

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
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (value: string) => {
        setSearchQuery(value);
        const filtered = data.filter((item: { label: string }) =>
            item.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <View style={dropDownComponentStyles.container}>
            {label && <Text style={dropDownComponentStyles.label}>{label}</Text>}
            <View style={dropDownComponentStyles.inputContainer}>
                <Dropdown
                    value={value}
                    onChange={onChange}
                    labelField="label"
                    valueField="value"
                    data={filteredData}
                    maxHeight={300}
                    disable={disabled}
                    placeholder={placeholder}
                    style={dropDownComponentStyles.input}
                    containerStyle={dropDownComponentStyles.itemContainer}
                    itemTextStyle={dropDownComponentStyles.itemText}
                    selectedTextStyle={dropDownComponentStyles.selectedText}
                    placeholderStyle={dropDownComponentStyles.placeholderText}
                    iconStyle={dropDownComponentStyles.iconStyle}
                    search={true}
                    renderInputSearch={(props) => (
                        <TextInput
                            {...props}
                            style={dropDownComponentStyles.searchInput}
                            placeholder="Search here..."
                            placeholderTextColor={COLORS.white50Percent}
                            onChangeText={handleSearch}
                            value={searchQuery}
                        />
                    )}
                />
            </View>
        </View>
    );
}