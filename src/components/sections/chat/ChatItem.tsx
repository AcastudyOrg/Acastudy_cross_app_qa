import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import chatItemStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatItemStyles';
import { Chat } from '../../../types/User/Chat';
import { LoginMockUser } from '../../../../mockData/LoginUser';


interface ChatItemProps {
	chat: Chat;
	isActive: boolean;
	onPress: () => void;
}
const ChatItem: React.FC<ChatItemProps> = ({ chat, isActive, onPress }) => {
	const currentUser = LoginMockUser
	const lastChatMessage = chat.messages[chat.messages.length - 1 ]
	const unreadMessagesCount = chat.messages.filter(
		message => !message.read && message.receiverId === currentUser.id
	).length;
	
	return (
		<TouchableOpacity onPress={onPress} style={[chatItemStyles.chatItem, isActive && chatItemStyles.activeChatItem]}>
			<View style={chatItemStyles.avatarContainer}>
				<Image source={chat.user.profilePictureUrl} style={chatItemStyles.avatar} />
				{chat.user.onlineStatus && <View style={chatItemStyles.onlineIndicator} />}
			</View>

			<View style={chatItemStyles.chatInfo}>
				<View style={chatItemStyles.chatHeader}>
					<Text style={chatItemStyles.userName} numberOfLines={1}>
						{chat.user.name + ' ' + chat.user.surname}
					</Text>
					<Text style={chatItemStyles.timestamp}>{lastChatMessage.datetime.getFullYear()}</Text>
				</View>
				<Text style={chatItemStyles.lastMessage} numberOfLines={1}>{lastChatMessage.message}</Text>
			</View>

			{unreadMessagesCount > 0  && (
				<View style={chatItemStyles.unreadBadge}>
					<Text style={chatItemStyles.unreadCount}>{unreadMessagesCount}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
}

export default ChatItem;
