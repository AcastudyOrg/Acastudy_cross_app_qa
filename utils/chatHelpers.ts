import moment from "moment";
import { LoginMockUser } from "../mockData/LoginUser";
import { Chat } from "../src/types/User/Chat";
import { Message } from "../src/types/User/Message";
import { User } from "../src/types/User/Student";
import { formatDate } from "./config";

type groupMessageType = Record<string, Message[]>;

const currentUser = LoginMockUser;

export const filterChats = (chatsData: Chat[], searchTerm: string, activeFilter: string) => {
    let filteredChats = [...chatsData];

    // Apply search filter
    if (searchTerm) {
        filteredChats = filteredChats.filter(chat =>
            chat.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chat.messages[chat.messages.length - 1].message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chat.messages.some(msg =>
                msg.message.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }

    // Apply read/unread filter
    switch (activeFilter) {
        case 'unread':
            return filteredChats.filter(chat => !chat.messages[chat.messages.length - 1].read &&
                chat.messages[chat.messages.length - 1].receiverId === currentUser.id);
        case 'online':
            return filteredChats.filter(chat => chat.user.onlineStatus);
        default:
            return filteredChats;
    }
};

export const unreadMessagesCount = (messages: Message[], currentUser: User): number => {
    let unreadMessagesCount = 0;
    for (let i = messages.length - 1; i >= 0; i--) {
        const message = messages[i];
        if (message.senderId === currentUser.id || message.read) {
            break
        }
        unreadMessagesCount++;
    }
    return unreadMessagesCount
}

export const formatChatMessageDate = (date: Date): string => {
    const yesterday = moment().subtract(1, 'day');
    return moment().isSame(date, 'd') ? "Today" :
        yesterday.isSame(date, 'd') ? "Yesterday" :
            `${moment(date).format('DD/MM/YYYY')}`
}

export const groupMessagesByDate = (messages: Message[]) => {
    return messages && messages?.reduce((groups: groupMessageType, message: Message) => {
        const date = formatDate(message.datetime);
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(message);
        return groups;
    }, {} as groupMessageType);
};