export type Message = {
    id: string;
    message: string,
    datetime: Date,
    senderId: string,
    receiverId: string,
    sent?: boolean,
    delivered?: boolean,
    read?: boolean
}