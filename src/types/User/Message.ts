export type Message = {
    id: string;
    message: string,
    datetime: Date,
    senderId: string, 
    receiverId: string,
    sent?: boolean, // for a single tick
    delivered?: boolean, // double ticks
    read?: boolean // if its read or not
}