import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middleWares";

const app = express();

app.use(helmet()); // 어플리케이션이 더 안전하도록 만들어줌 - 보안관련 미들웨어

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https://archive.org"
  );
  return next();
});
app.set("view engine", "pug");

//Middle Wares
app.use(cookieParser()); // 쿠키를 전달받아서 사용할 수 있도록 만들어주는 미들웨어 ex) 사용자 인증

// 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어 - request 정보에서 form이나 json형태로 된 body들을 검사
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev")); // 어플리케이션에서 발생하는 모든 일들을 logging 하는 미들웨어

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
