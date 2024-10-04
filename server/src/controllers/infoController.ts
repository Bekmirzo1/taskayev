import { NextFunction, Request, Response } from "express";
import ApiError from "@/error/ApiError";
import { Info } from "@/models";
import { InfoDto } from "@/dto/info/";
import { UploadedFile } from "express-fileupload";
import mainInfoService from "@/service/mainInfoService";
class InfoController {
  async changeInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { description, items } = req.body as InfoDto;
      const img = req.files?.image as UploadedFile;
      const info = await mainInfoService.changeInfo({ description, items }, img);
      return res.json(info);
    } catch (error) {
      return next(ApiError.badRequest(error.message))
    }
  }
  async showInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const info = await mainInfoService.showInfo();
      return res.json(info);
    } catch (error) {
      return next(ApiError.badRequest(error.message))
    }
  }
}

export default new InfoController()