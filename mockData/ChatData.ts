import { IMAGES } from "../src/constants";

export const mockChatsData = [
    {
        id: '1',
        user: {
            id: 'u1',
            name: 'Gorgina',
            surname: 'Maleta',
            profilePictureUrl: IMAGES.johnImg,
            onlineStatus: true,
        },
        messages: [
            {
                id: 'm1',
                message: 'Hi, how are you?',
                datetime: new Date('2024-07-20T08:50:00'),
                senderId: '123',
                receiverId: 'u1',
                sent: true,
                delivered: true,
                read: true,
            },
            {
                id: 'm2',
                message: 'I’m good, thanks! You?',
                datetime: new Date('2024-07-20T08:55:00'),
                senderId: 'u1',
                receiverId: '123',
                sent: true,
                delivered: true,
                read: true,
            },
            {
                id: 'm3',
                message: 'Great! Can you send me the files?',
                datetime: new Date('2024-07-20T09:10:00'),
                senderId: '123',
                receiverId: 'u1',
                sent: true,
                delivered: true,
                read: false,
            },
        ],
    },
    {
        id: '2',
        user: {
            id: 'u2',
            name: 'Mike',
            surname: 'Johnson',
            profilePictureUrl: IMAGES.janeImg,
            onlineStatus: false,
        },
        messages: [
            {
                id: 'm1',
                message: 'Hey, are you coming to the meeting?',
                datetime: new Date('2024-07-19T13:45:00'),
                senderId: 'u2',
                receiverId: '123',
                sent: true,
                delivered: true,
                read: true,
            },
            {
                id: 'm2',
                message: 'Yes, I’ll be there in 10 minutes.',
                datetime: new Date('2024-07-19T13:55:00'),
                senderId: '123',
                receiverId: 'u2',
                sent: true,
                delivered: true,
                read: true,
            },
        ],
    },
    {
        id: '3',
        user: {
            id: 'u3',
            name: 'Lisa',
            surname: 'Brown',
            profilePictureUrl: IMAGES.literatureImg,
            onlineStatus: true,
        },
        messages: [
            {
                id: 'm1',
                message: 'Can you review the document I sent you?',
                datetime: new Date('2024-07-22T10:05:00'),
                senderId: 'u3',
                receiverId: '123',
                sent: true,
                delivered: true,
                read: false,
            },
            {
                id: 'm2',
                message: 'Sure, give me a moment.',
                datetime: new Date('2024-07-22T10:15:00'),
                senderId: '123',
                receiverId: 'u3',
                sent: true,
                delivered: true,
                read: false,
            },
        ],
    },
    {
        id: '4',
        user: {
            id: 'u4',
            name: 'Jane',
            surname: 'Smith',
            profilePictureUrl: IMAGES.physicsImg,
            onlineStatus: true,
        },
        messages: [
            {
                id: 'm1',
                message: 'Let’s meet for lunch tomorrow.',
                datetime: new Date('2024-07-23T12:30:00'),
                senderId: '123',
                receiverId: 'u4',
                sent: true,
                delivered: true,
                read: true,
            },
            {
                id: 'm2',
                message: 'Sounds good! See you at 1 PM.',
                datetime: new Date('2024-07-23T12:35:00'),
                senderId: 'u4',
                receiverId: '123',
                sent: true,
                delivered: true,
                read: true,
            },
        ],
    },
    {
        id: '3',
        user: {
            id: 'u1',
            name: 'Gorgina',
            surname: "Maleta",
            profilePictureUrl: IMAGES.mathImg,
            onlineStatus: false
        },
        messages: [
            {
                id: "m1",
                message: "hi",
                datetime: new Date('2024-07-20T08:55:00'),
                senderId: "123", // assist in finding if its from or too
                receiverId: "u1",
                sent: true, // for a single tick
                delivered: true, // double ticks
                read: true // if its read or not
    
            },
            {
                id: "m1",
                message: "how are you ",
                datetime: new Date('2024-07-20T08:55:00'),
                senderId: "u1", 
                receiverId: "123",
                sent: false, 
                delivered: false, 
                read: false 
    
            },
            {
                id: "m1",
                message: "Can i have the PDF that i requested yestereday? ❤️",
                datetime: new Date('2024-07-20T08:55:00'),
                senderId: "u1", 
                receiverId: "123",
                sent: false, 
                delivered: false, 
                read: false 
    
            }
        ]
    }
];
