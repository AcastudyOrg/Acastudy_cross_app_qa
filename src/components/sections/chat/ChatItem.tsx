import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import chatItemStyles from '../../../styles/componentsStyle/sectionsStyle/chatStyle/chatItemStyles';
import { Chat } from '../../../types/User/Chat';
import { LoginMockUser } from '../../../../mockData/LoginUser';
import CustomIcon from '../../common/CustomIcon';
import { COLORS } from '../../../constants';

interface ChatItemProps {
	chat: Chat;
	isActive: boolean;
	onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, isActive, onPress }) => {
	const currentUser = LoginMockUser;
	const lastChatMessage = chat.messages[chat.messages.length - 1];
	const unreadMessagesCount = chat.messages.filter(
		message => !message.read && message.receiverId === currentUser.id
	).length;

	const isCurrentUserSender = lastChatMessage.senderId === currentUser.id;

	let messageStatusIcon;
	if (isCurrentUserSender) {
		if (lastChatMessage.read) {
			messageStatusIcon = <CustomIcon set={'MaterialCommunityIcons'} name={'check-all'} size={20} color={COLORS.purple} />;
		} else if (lastChatMessage.delivered) {
			messageStatusIcon = <CustomIcon set={'MaterialCommunityIcons'} name={'check-all'} size={20} color={COLORS.white50Percent} />;
		} else if (lastChatMessage.sent) {
			messageStatusIcon = <CustomIcon set={'MaterialCommunityIcons'} name={'check'} size={20} color={COLORS.white50Percent} />;
		}
	}

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
					<View style={chatItemStyles.dateAndUnread}>
						<Text style={chatItemStyles.timestamp}>{lastChatMessage.datetime.getFullYear()}</Text>
						{unreadMessagesCount > 0 && (
							<View style={chatItemStyles.unreadBadge}>
								<Text style={chatItemStyles.unreadCount}>{unreadMessagesCount}</Text>
							</View>
						)}
					</View>
				</View>

				<View style={chatItemStyles.messageStatus}>
					{messageStatusIcon && <View style={{ paddingRight: 5 }}>{messageStatusIcon}</View>}
					<Text style={chatItemStyles.lastMessage} numberOfLines={1}>{lastChatMessage.message}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ChatItem;
