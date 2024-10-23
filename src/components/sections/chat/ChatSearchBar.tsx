import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { chatSearchBarStyles } from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatSearchBarStyles';
import { COLORS } from '../../../constants';
import { STRING } from '../../../constants/strings';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const ChatSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <TextInput
      value={searchTerm}
      onChangeText={setSearchTerm}
      onSubmitEditing={() => onSearch(searchTerm)}
      placeholder={STRING.chatSearchPlaceholder}
      placeholderTextColor={COLORS.transparentWhite}
      style={chatSearchBarStyles.searchInput}
      returnKeyType="search"
    />
  );
};

export default ChatSearchBar;
