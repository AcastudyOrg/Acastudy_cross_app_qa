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
    reviewCounts: {
      '5': 50,
      '4': 33,
      '3': 0,
      '2': 17,
      '1': 0,
    },
  };