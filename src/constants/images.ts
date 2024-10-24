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

//Homescreen Tiles images
const mathImg = require('../../assets/images/appImages/maths.svg');
const physicsImg = require('../../assets/images/appImages/physics.svg');
const literatureImg = require('../../assets/images/appImages/lifeskills.svg');
const biologyImg = require('../../assets/images/appImages/biology.svg');
const johnImg = require('../../assets/images/general/dummy/user.svg');
const janeImg = require('../../assets/images/general/dummy/user2.svg');
const agmedImg = require('../../assets/images/general/dummy/user3.svg');
const druboImg = require('../../assets/images/general/dummy/user4.svg');


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
  onboard: 0
};

export default images;
