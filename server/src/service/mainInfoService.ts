import { InfoDto, InfoNewDto } from "@/dto/info";
import { UploadedFile } from "express-fileupload";
import { v4 } from "uuid";
import path from "path";
import ApiError from "@/error/ApiError";
import { Info } from "@/models";
import fs from 'fs';


class MainInfoService {
  async changeInfo(userDto: InfoDto, img?: UploadedFile) {
    try {
      console.log(img);

      const fileName = v4() + '.jpg';
      if (img) {
        const filePath = path.resolve(process.env.MY_STATIC_FILES, fileName);
        img.mv(filePath);
      }
      if (!userDto.description || !userDto.items) {
        return ApiError.badRequest('Не заполнены данные')
      }
      const info = await Info.findOne();
      if (!info) {
        if (!img) {
          return ApiError.badRequest('Нет картины')
        }
        const newInfo = await Info.create({ description: userDto.description, items: userDto.items, image: fileName } as InfoNewDto)
        return newInfo
      }
      await info.update({
        description: userDto.description,
        items: userDto.items,
      } as InfoDto)
      if (img) {
        fs.unlinkSync(`${process.env.MY_STATIC_FILES}/${info.image}`)
        info.image = fileName;
        await info.save();
      }
      return info;
    } catch (error) {
      return ApiError.badRequest(error.message)
    }
  }
  async showInfo() {
    try {
      const infos = await Info.findOne();
      return infos;
    } catch (error) {
      return ApiError.badRequest(error.message)
    }
  }
}

export default new MainInfoService()