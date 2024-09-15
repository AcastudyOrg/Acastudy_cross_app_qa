import PrivateScreenLayout from "../components/layout/PrivateScreenLayout";
import TutorHeader from "../components/sections/tutorProfile/TutorHeader";
import { tutorData } from "../../mockData/TutorData";

const TutorProfileScreen = () => {
    return (
        <PrivateScreenLayout showBackButton={true} showSearchBar={false}>
            <TutorHeader
                name={tutorData.name}
                rating={tutorData.rating}
                reviews={tutorData.reviews}
                imageUrl={tutorData.imageUrl}
            />

        </PrivateScreenLayout>
    );
}

export default TutorProfileScreen;