import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GenericDropdownProps {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
  required?: boolean;
  error?: string;
}

const GenericDropdown: React.FC<GenericDropdownProps> = ({
  label,
  placeholder,
  options,
  value,
  onSelect,
  required = false,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (selected: string) => {
    onSelect(selected);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} {required && '*'}
      </Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsOpen(true)}
      >
        <Text style={value ? styles.valueText : styles.placeholderText}>
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="gray" />
      </TouchableOpacity>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal visible={isOpen} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder={`Search ${label.toLowerCase()}...`}
              value={search}
              onChangeText={setSearch}
            />
            <FlatList
              data={filteredOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                search ? (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelect(search)}
                  >
                    <Text style={styles.optionText}>Add "{search}"</Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={styles.emptyText}>No options available</Text>
                )
              }
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsOpen(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  placeholderText: {
    color: '#aaa',
  },
  valueText: {
    color: '#333',
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
  errorBorder: {
    borderColor: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginVertical: 16,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 16,
  },
});

export default GenericDropdown;
