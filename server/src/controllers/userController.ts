
import ApiError from "@/error/ApiError";
import { User, UserModel } from "@/models";
import { NextFunction, Request, Response } from "express";
import { ReqWithUser } from "@/middleware/authMiddlware";
import bcryptjs from "bcryptjs";
import tokenService from "@/service/tokenService";
import { UserCreateDto, UserLoginDto } from "@/dto/user";

class UserController {
  async registraiton(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, role } = req.body as UserCreateDto;
      if (!email || !password) {
        next(ApiError.badRequest("Некорректный email или пароль"));
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(
          ApiError.badRequest("Пользователь с таким email уже существует")
        );
      }
      const hashPassword = bcryptjs.hashSync(password, 7);
      const user = await User.create({ email, password: hashPassword, role });
      const token = tokenService.generateTokens({ id: user.id, email, role: user.role });
      res.json(token);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as UserLoginDto;
      if (!email || !password) {
        next(ApiError.badRequest("Некорректный email или пароль"));
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(
          ApiError.badRequest("Пользователь с таким email не существует")
        );
      }
      const checkPassword = bcryptjs.compareSync(password, user.password);
      if (!checkPassword) {
        return next(ApiError.badRequest("Неверный пароль"));
      }
      const token = tokenService.generateTokens({ id: user.id, email, role: user.role });
      res.json({...token, user});
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async check(req: ReqWithUser, res: Response, next: NextFunction) {
    try {
      const token = tokenService.generateTokens({ id: req.user.id, email: req.user.email, role: req.user.role });
      res.json({...token, user: req.user});
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
}

export default new UserController()