import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import chatItemStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatItemStyles';
import { User } from '../../../types/User/Student';
import { Chat } from '../../../types/User/Chat';


interface ChatItemProps {
	chat: Chat;
	isActive: boolean;
	onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, isActive, onPress }) => (
	<Pressable onPress={onPress} style={[chatItemStyles.chatItem, isActive && chatItemStyles.activeChatItem]}>
		<View style={chatItemStyles.avatarContainer}>
			<Image source={chat.user.profilePictureUrl} style={chatItemStyles.avatar} />
			{chat.user.onlineStatus && <View style={chatItemStyles.onlineIndicator} />}
		</View>

		<View style={chatItemStyles.chatInfo}>
			<View style={chatItemStyles.chatHeader}>
				<Text style={chatItemStyles.userName} numberOfLines={1}>
					{chat.user.name + ' ' + chat.user.surname} 
				</Text>
				<Text style={chatItemStyles.timestamp}>{chat.timestamp}</Text>
			</View>
			<Text style={chatItemStyles.lastMessage} numberOfLines={1}>{chat.lastMessage}</Text>
		</View>

		{chat.unreadCount > 0 && (
			<View style={chatItemStyles.unreadBadge}>
				<Text style={chatItemStyles.unreadCount}>{chat.unreadCount}</Text>
			</View>
		)}
	</Pressable>
);

export default ChatItem;
