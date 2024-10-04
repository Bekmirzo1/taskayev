import { UserDto } from "@/dto/user";
import ApiError from "@/error/ApiError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export interface ReqWithUser extends Request {
  user?: UserDto
}
export default (role: string) => {
  return (req: ReqWithUser, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return next(ApiError.UnauthorizedError());
      }
      const usersData = verify(token, process.env.MY_SECRET_KEY) as UserDto;
      if (!usersData) {
        return next(ApiError.UnauthorizedError());
      }
      if (usersData.role !== role) {
        return next(ApiError.forbidden("Нет доступа"));
      }
      req.user = usersData;
      next();
    } catch (error) {
      return next(ApiError.UnauthorizedError());
    }
  };
};