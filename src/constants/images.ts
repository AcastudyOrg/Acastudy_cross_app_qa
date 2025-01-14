import { ImageProps } from "../types/media";

//app important images
const authBackgroundImage = require("../../assets/images/appImages/authBackgroundImage.jpg");
const appLogo = require("../../assets/images/appImages/logo/logo_white_no_bg.png");
const forgotPassword = require("../../assets/images/appImages/forgotPassword.png");
const sentEmail = require("../../assets/images/appImages/sentEmail.png");
const googleLogo = require("../../assets/images/appImages/googleLogo.png");
const bannerImage = require("../../assets/images/appImages/onboard.jpg")
const student = require("../../assets/images/appImages/student.jpg");
const studentTutor = require("../../assets/images/appImages/studentTutor.jpg");

//response images
const success = require("../../assets/images/general/response/success.png");
const error = require("../../assets/images/general/response/error.png");
const loader =
  "https://user-images.githubusercontent.com/1673310/171033975-680736c9-60f1-4af8-841f-65ebfb574881.gif";

//dummy images
const user = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const userPlaceholder = require("../../assets/images/general/dummy/userPlaceholder.png");
const comingSoon = "https://static.vecteezy.com/system/resources/previews/026/972/633/original/traffic-cone-under-construction-free-png.png";
const studentPicture = "https://images.unsplash.com/photo-1649123245135-4db6ead931b5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const maths = "https://images.unsplash.com/photo-1509869175650-a1d97972541a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

//Homescreen Tiles images Dummy
const mathImg = require('../../assets/images/appImages/maths.svg');
const physicsImg = require('../../assets/images/appImages/physics.svg');
const literatureImg = require('../../assets/images/appImages/lifeskills.svg');
const biologyImg = require('../../assets/images/appImages/biology.svg');
const johnImg = require('../../assets/images/general/dummy/user.svg');
const janeImg = require('../../assets/images/general/dummy/user2.svg');
const agmedImg = require('../../assets/images/general/dummy/user3.svg');
const druboImg = require('../../assets/images/general/dummy/user4.svg');

//Studyscreen Tiles Images Dummy
const study_1 = require('../../assets/images/general/dummy/study_1.png');
const study_2 = require('../../assets/images/general/dummy/study_2.png');
const study_3 = require('../../assets/images/general/dummy/study_3.png');
const study_4 = require('../../assets/images/general/dummy/study_4.png');
const study_5 = require('../../assets/images/general/dummy/study_5.png');
const study_6 = require('../../assets/images/general/dummy/study_6.png');
const study_7 = require('../../assets/images/general/dummy/study_7.png');
const study_8 = require('../../assets/images/general/dummy/study_8.png');
const study_9 = require('../../assets/images/general/dummy/study_9.png');
const study_10 = require('../../assets/images/general/dummy/study_10.png');
const study_11 = require('../../assets/images/general/dummy/study_11.png');
const study_12 = require('../../assets/images/general/dummy/study_12.png');
const study_13 = require('../../assets/images/general/dummy/study_13.png');
const study_14 = require('../../assets/images/general/dummy/study_14.png');
const study_15 = require('../../assets/images/general/dummy/study_15.png');
const study_16 = require('../../assets/images/general/dummy/study_16.png');
const study_17 = require('../../assets/images/general/dummy/study_17.png');
const study_18 = require('../../assets/images/general/dummy/study_18.png');


const images: ImageProps = {
  authBackgroundImage,
  appLogo,
  googleLogo,
  bannerImage,
  student,
  studentTutor,
  forgotPassword,
  sentEmail,
  success,
  error,
  loader,
  
  user,
  userPlaceholder,
  comingSoon,
  studentPicture,
  maths,

  mathImg,
  physicsImg,
  literatureImg,
  biologyImg,
  johnImg,
  janeImg,
  agmedImg,
  druboImg,
  onboard: 0,
  
  study_1,
  study_2,
  study_3,
  study_4,
  study_5,
  study_6,
  study_7,
  study_8,
  study_9,
  study_10,
  study_11,
  study_12,
  study_13,
  study_14,
  study_15,
  study_16,
  study_17,
  study_18,
};

export default images;
