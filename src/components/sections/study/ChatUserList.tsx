import React, { useState, useCallback } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import ChatItem from '../chat/ChatItem';
import ChatSearchBar from '../chat/ChatSearchBar';
import ChatFilterTabs from '../chat/ChatFilterTabs';
import { Chat } from '../../../types/User/Chat';
import { filterChats } from '../../../../utils/chatHelpers';

interface ChatSidebarProps {
  chatsData: Chat[];
}

const ChatUserList: React.FC<ChatSidebarProps> = ({ chatsData }) => {
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
    <View style={ {flex: 1} }>
      <ChatSearchBar onSearch={handleSearch} />
      <ChatFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredChats().map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            isActive={chat.id === activeChat}
            onPress={() => setActiveChat(chat.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatUserList;
