import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import chatFilterTabsStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatFilterTabsStyles';

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ChatFilterTabs: React.FC<FilterTabsProps> = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'unread', label: 'Unread' },
    { id: 'online', label: 'Online' },
  ];

  return (
    <View style={chatFilterTabsStyles.filterContainer}>
      {filters.map(filter => (
        <TouchableOpacity
          key={filter.id}
          onPress={() => onFilterChange(filter.id)}
          style={[
            chatFilterTabsStyles.filterTab,
            activeFilter === filter.id && chatFilterTabsStyles.activeFilterTab,
          ]}
        >
          <Text
            style={[
                chatFilterTabsStyles.filterText,
              activeFilter === filter.id && chatFilterTabsStyles.activeFilterText,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChatFilterTabs;
