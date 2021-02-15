import express from "express";
import {
  videoDetail,
  editVideo,
  deleteVideo,
  videosHome,
  getUpload,
  postUpload,
} from "../controllors/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, videosHome);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail); //path가 :id이기 때문에 어떤 문자가 들어오든지 매칭이 되어 가장 아래에 두어야 함

export default videoRouter;
