import { User } from "./Student";

export type Chat  = {
	id: string;
	user: User;
	lastMessage: string;
	timestamp: string;
	unreadCount: number;
}