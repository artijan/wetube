import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controllors/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail); //path가 :id이기 때문에 어떤 문자가 들어오든지 매칭이 되어 가장 아래에 두어야 함

export default userRouter;
