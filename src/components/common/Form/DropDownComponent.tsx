import React, { useState } from 'react';
import { Text, TextInput, View, TextInputKeyPressEventData, NativeSyntheticEvent } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { dropDownComponentStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/dropDownComponentStyle';
import { COLORS } from '../../../constants';

type DropdownProps = {
    value: string;
    label?: string;
    placeholder: string;
    data: string[]; // Accepts a list of strings
    disabled?: boolean;
    onChange: (value: string) => void;
    allowCustomValue?: boolean;
    required?: boolean;
    error?: string;
};

export const DropDownComponent: React.FC<DropdownProps> = ({
    value = "",
    label,
    placeholder,
    onChange,
    data,
    disabled,
    allowCustomValue = false,
    required = false,
    error = "",
}) => {
    // Transform string data into dropdown-compatible format
    const [dropdownData, setDropdownData] = useState(
        data.map((item) => ({ label: item, value: item }))
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(dropdownData);

    const handleSearch = (value: string) => {
        setSearchQuery(value);
        const filtered = dropdownData.filter((item) =>
            item.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (event.nativeEvent.key === 'Enter' && allowCustomValue && searchQuery.trim()) {
            const newOption = { label: searchQuery, value: searchQuery };

            // Add new option at the top of the list
            const updatedData = [newOption, ...dropdownData];
            setDropdownData(updatedData);
            setFilteredData(updatedData);

            // Trigger onChange with the new value
            onChange(newOption.value);

            // Reset search query
            setSearchQuery('');
        }
    };

    return (
        <View style={dropDownComponentStyles.container}>
            {label && (
                <Text style={dropDownComponentStyles.label}>
                    {label} {required && '*'}
                </Text>
            )}
            <View style={dropDownComponentStyles.inputContainer}>
                <Dropdown
                    value={value}
                    onChange={(selectedValue) => {
                        onChange(selectedValue.value);
                        setSearchQuery(''); // Clear the search query after selection
                    }}
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
                            onKeyPress={handleKeyPress} // Handle key press event
                        />
                    )}
                />
            </View>
            {error && <Text style={dropDownComponentStyles.errorText}>{error}</Text>}
        </View>
    );
};
