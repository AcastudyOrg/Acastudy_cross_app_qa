import React from "react";
import { PrivateScreenLayout } from "../../../components";
import { VIEW_MODE } from "@/constants/strings";


const TutorHomeScreen = () => {
    return (
      <PrivateScreenLayout viewMode={VIEW_MODE.tutorView}>
        <></>
      </PrivateScreenLayout>
    );
  };

export default TutorHomeScreen;