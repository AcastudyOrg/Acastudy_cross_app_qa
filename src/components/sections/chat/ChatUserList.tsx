import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import ChatItem from './ChatItem';
import ChatSearchBar from './ChatSearchBar';
import ChatFilterTabs from './ChatFilterTabs';
import { Chat } from '../../../types/User/Chat';
import { filterChats } from '../../../../utils/chatHelpers';
import chatUserListStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatUserListStyles';

interface ChatSidebarProps {
  chatsData: Chat[];
  onChatChange: (activeChat: Chat) => void;
}

const ChatUserList: React.FC<ChatSidebarProps> = ({ chatsData, onChatChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChat, setActiveChat] = useState(chatsData[0]?.id);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const filteredChats = useCallback(() => {
    return filterChats(chatsData, searchTerm, activeFilter);
  }, [chatsData, searchTerm, activeFilter]);

  return (
    <View style={chatUserListStyles.container}>
      <ChatSearchBar onSearch={handleSearch} />
      <ChatFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredChats().map((chat, i) => (
          <View key={i} style={chatUserListStyles.userItem}>
            <ChatItem
              chat={chat}
              isActive={chat.id === activeChat}
              onPress={() => [setActiveChat(chat.id), onChatChange(chat)]}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatUserList;
