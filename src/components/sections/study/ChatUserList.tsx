import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import ChatItem from '../chat/ChatItem';
import ChatSearchBar from '../chat/ChatSearchBar';
import ChatFilterTabs from '../chat/ChatFilterTabs';
import { Chat } from '../../../types/User/Chat';

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

  const filterChats = useCallback(() => {
    let filteredChats = [...chatsData];

    // Apply search filter
    if (searchTerm) {
      filteredChats = filteredChats.filter(chat => 
        chat.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.messages[chat.messages.length - 1 ].message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.messages.some(msg => 
          msg.message.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply read/unread filter
    switch (activeFilter) {
      case 'read':
        return filteredChats.filter(chat => chat.messages[chat.messages.length - 1].read);
      case 'unread':
        return filteredChats.filter(chat => !chat.messages[chat.messages.length - 1].read);
      case 'online':
        return filteredChats.filter(chat => chat.user.onlineStatus)
      default:
        return filteredChats;
    }
  }, [chatsData, searchTerm, activeFilter]);

  const renderItem = ({ item }: { item: Chat }) => (
    <ChatItem
      chat={item}
      isActive={item.id === activeChat}
      onPress={() => setActiveChat(item.id)}
    />
  );

  return (
    <View style={ {flex: 1} }>
      <ChatSearchBar onSearch={handleSearch} />
      <ChatFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <FlatList
        data={filterChats()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatUserList;
