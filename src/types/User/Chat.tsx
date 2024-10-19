import { Message } from "./Message";
import { User } from "./Student";

export type Chat = {
    id: string;
    user: User; // person chatting to
    messages: Message[]; // messages between current user and abave user
}