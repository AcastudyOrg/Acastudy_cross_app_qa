import { ImageProps } from "../types/media";

//app important images
const authBackgroundImage = require("../../assets/images/appImages/authBackgroundImage.jpg");
const appLogo = require("../../assets/images/appImages/logo/logo.png");

//response images
const success = require("../../assets/images/general/response/success.png");
const error = require("../../assets/images/general/response/error.png");
const loader =
  "https://user-images.githubusercontent.com/1673310/171033975-680736c9-60f1-4af8-841f-65ebfb574881.gif";

//dummy images
const user = require("../../assets/images/general/dummy/user.jpg");
const userPlaceholder = require("../../assets/images/general/dummy/userPlaceholder.png");

const images: ImageProps = {
  authBackgroundImage,
  appLogo,
  success,
  error,
  loader,
  user,
  userPlaceholder,
};

export default images;
