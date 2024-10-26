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
    const now = new Date();

    // Check if the given date is today return format: 13:45
    const isToday = now.toDateString() === date.toDateString();
    if (isToday) {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${formattedHours}:${formattedMinutes}`;
    }

    // Get difference in milliseconds and convert to days
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Check if the date is yesterday
    if (diffDays === 1) {
        return "Yesterday";
    }

    // Check if the date is within the last 7 days
    if (diffDays < 7 && diffDays >= 0) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return dayNames[date.getDay()];
    }

    // If the date is older than 7 days, return formatted date in DD/MM/YYYY
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayFormatted = day < 10 ? `0${day}` : day;
    const monthFormatted = month < 10 ? `0${month}` : month;

    return `${dayFormatted}/${monthFormatted}/${year}`;
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