import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import chatItemStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatItemStyles';
import { formatChatMessageDate, unreadMessagesCount } from '../../../../utils/chatHelpers';
import { Chat } from '../../../types/User/Chat';
import { LoginMockUser } from '../../../../mockData/LoginUser';
import ChatMessageStatus from './ChatMessageStatus';

interface ChatItemProps {
	chat: Chat;
	isActive: boolean;
	onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, isActive, onPress }) => {
	const currentUser = LoginMockUser;
	const lastChatMessage = chat.messages[chat.messages.length - 1];
	const unreadMessageCount = unreadMessagesCount(chat.messages, currentUser)

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
					<Text style={chatItemStyles.timestamp}>
						{formatChatMessageDate(lastChatMessage.datetime)}
					</Text>
				</View>

				<ChatMessageStatus
					currentUser={currentUser}
					message={lastChatMessage}
					unreadMessageCount={unreadMessageCount}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default ChatItem;
