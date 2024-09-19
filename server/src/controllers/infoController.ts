import { NextFunction, Request, Response } from "express";
import ApiError from "@/error/ApiError";
import { Info } from "@/model";
import { InfoDto } from "@/dto/info-dto";
class InfoController {
  async changeInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { description, items, image } = req.body as InfoDto;
      if (!description || !items.length) {
        return next(ApiError.badRequest('Не заполнены данные'))
      }
      const info = await Info.findOne();
      if (!info) {
        const newInfo = await Info.create({ description, items, image })
        return res.json(newInfo)
      }
      await info.update({
        description,
        items,
        image,
      } as InfoDto)
      return res.json(info);
    } catch (error) {
      return next(ApiError.badRequest(error.message))
    }
  }
  async showInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const infos = await Info.findAll();
      return res.json(infos);
    } catch (error) {
      return next(ApiError.badRequest(error.message))
    }
  }
}

export default new InfoController()