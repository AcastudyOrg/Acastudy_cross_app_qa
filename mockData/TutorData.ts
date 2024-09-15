import { IMAGES } from "../src/constants";
import { TutorData } from "../src/types/User/Tutor";

export const tutorData: TutorData = {
    name: 'Chiyan Yey',
    rating: 4.9,
    reviews: 6,
    imageUrl: IMAGES.userPlaceholder,
    bio: "I'm a professional engineer with 5 years of experience. I specialize in data analysis and machine learning. I've worked on several projects in the finance and healthcare industries.",
    subjects: ['Python', 'Data Analysis', 'Machine Learning', 'SQL', 'Tensorflow', 'Pandas'],
    experiences: [
      {
        company: 'Google',
        period: '2019 - present',
        position: 'Software Engineer, Google',
      },
      {
        company: 'Stanford University',
        period: '2017 - 2019',
        position: 'M.S. Computer Science, Stanford University',
      },
    ],
    upcomingEvents: [
      {
        "id": 1,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Analytical Geometry",
        "tutor": "Chiyan Yey",
        "datetime": "2024-04-13T08:30:00Z",
        "category": "Class"
      },
      {
        "id": 2,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Chinese History",
        "tutor": "Chiyan Yey",
        "datetime": "2024-05-13T15:30:00Z",
        "category": "Class"
      },
      {
        "id": 3,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Programming",
        "tutor": "Chiyan Yey",
        "datetime": "2024-05-18T09:00:00Z",
        "category": "Class"
      },
      {
        "id": 4,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Physics",
        "tutor": "Chiyan Yey",
        "datetime": "2024-05-20T07:00:00Z",
        "category": "Class"
      },
    ],
    reviewCounts: {
      '5': 50,
      '4': 33,
      '3': 0,
      '2': 17,
      '1': 0,
    },
  };