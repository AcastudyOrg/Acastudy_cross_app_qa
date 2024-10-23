import { IMAGES } from "../src/constants";
import { StudyFeedEntry } from "../src/types/User/Feed";

export const mockStudyFeedData: StudyFeedEntry[] = [
    {
        id: "1",
        title: "Maths Grade 12 p1",
        tutorName: "Nicolas Cage",
        tutorAvatar: IMAGES.janeImg,
        date: "12 Feb 2024",
        time: "18:00",
        duration: "1h 30min",
        rsvpCount: 176,
        description: "This is the physics lesson I posted on the 12 feb 2024, is on the mechanics topic. I Also solved quite a few challenging problems.",
        image: IMAGES.mathImg
    },
    {
        id: "2",
        title: "Biology: Cellular Respiration",
        tutorName: "Emma Watson",
        tutorAvatar: IMAGES.johnImg,
        date: "15 Feb 2024",
        time: "17:00",
        duration: "1h 30min",
        rsvpCount: 132,
        description: "Dive deep into the process of cellular respiration. We'll cover glycolysis, the Krebs cycle, and the electron transport chain.",
        image: IMAGES.biologyImg
    },
    {
        id: "3",
        title: "History: World War II",
        tutorName: "Tom Hanks",
        tutorAvatar: IMAGES.johnImg,
        date: "18 Feb 2024",
        time: "19:00",
        duration: "1h 30min",
        rsvpCount: 98,
        description: "An in-depth look at the major events, figures, and impacts of World War II. We'll analyze key battles and their global consequences.",
        image: IMAGES.literatureImg
    },
    {
        id: "4",
        title: "Chemistry: Organic Compounds",
        tutorName: "Marie Curie",
        tutorAvatar: IMAGES.johnImg,
        date: "20 Feb 2024",
        time: "16:00",
        duration: "1h 30min",
        rsvpCount: 145,
        description: "Explore the world of organic chemistry. We'll cover nomenclature, reactions, and properties of various organic compounds.",
        image: IMAGES.biologyImg
    },
    {
        id: "5",
        title: "Literature: Shakespeare's Hamlet",
        tutorName: "Ian McKellen",
        tutorAvatar: IMAGES.johnImg,
        date: "22 Feb 2024",
        time: "18:30",
        duration: "1h 30min",
        rsvpCount: 87,
        description: "A deep dive into Shakespeare's classic tragedy. We'll analyze themes, characters, and the play's enduring impact on literature.",
        image: IMAGES.literatureImg
    },
    {
        id: "6",
        title: "Physics: Quantum Mechanics",
        tutorName: "Stephen Hawking",
        tutorAvatar: IMAGES.johnImg,
        date: "25 Feb 2024",
        time: "19:00",
        duration: "1h 30min",
        rsvpCount: 201,
        description: "Explore the fascinating world of quantum mechanics. We'll cover wave-particle duality, the uncertainty principle, and quantum entanglement.",
        image: IMAGES.physicsImg
    },
    {
        id: "7",
        title: "Art History: Renaissance",
        tutorName: "Frida Kahlo",
        tutorAvatar: IMAGES.johnImg,
        date: "27 Feb 2024",
        time: "17:30",
        duration: "1h 30min",
        rsvpCount: 76,
        description: "Journey through the Renaissance period. We'll examine key artists, their works, and the cultural context that shaped this pivotal era in art history.",
        image: IMAGES.literatureImg
    },
    {
        id: "8",
        title: "Computer Science: Algorithms",
        tutorName: "Ada Lovelace",
        tutorAvatar: IMAGES.johnImg,
        date: "1 Mar 2024",
        time: "18:00",
        duration: "1h 30min",
        rsvpCount: 189,
        description: "Dive into the world of algorithms. We'll cover sorting algorithms, search algorithms, and analyze their time and space complexities.",
        image: IMAGES.mathImg
    },
    {
        id: "9",
        title: "Economics: Macroeconomics",
        tutorName: "Paul Krugman",
        tutorAvatar: IMAGES.johnImg,
        date: "3 Mar 2024",
        time: "19:30",
        duration: "1h 30min",
        rsvpCount: 112,
        description: "Explore key concepts in macroeconomics. We'll discuss GDP, inflation, unemployment, and monetary policy.",
        image: IMAGES.mathImg
    },
    {
        id: "10",
        title: "Psychology: Cognitive Processes",
        tutorName: "Sigmund Freud",
        tutorAvatar: IMAGES.johnImg,
        date: "5 Mar 2024",
        time: "17:00",
        duration: "1h 30min",
        rsvpCount: 156,
        description: "Delve into cognitive psychology. We'll explore perception, memory, problem-solving, and decision-making processes of the human mind.",
        image: IMAGES.literatureImg
    }
];