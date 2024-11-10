import { IMAGES } from "../src/constants";
import { User } from "../src/types/User/Student";

 export const LoginMockUser: User = {
    id: "123",
    name: 'Tokyo',
    surname: 'Maeliner',
    profilePictureUrl: IMAGES.userPlaceholder,
    subjects: ['Python', 'Data Analysis', 'SQL', 'Tensorflow', 'Pandas', 'Machine Learning']
};


