import ApiError from "@/error/ApiError";
import http from 'http'
import { NextFunction, Request, Response } from "express";
import TelegramBot from "node-telegram-bot-api";
import { ContactDto } from "@/dto/contact";

// const telegramBot = new TelegramBot('7752492218:AAG1bVz0P5Z4O93iPObDzuhYPmLNC0ygYpY');
const telegramBot = new TelegramBot(process.env.MY_BOT_KEY);
class contactController {
  async submitForm(req: Request, res: Response, next: NextFunction) {
    try {
      const reqBody = req.body as ContactDto;
      if (!reqBody.name || !reqBody.phone || !reqBody.service) {
        return next(ApiError.badRequest('Не заполнены данные'))
      }
      const fields = [
        '<b>Тип услуги</b>: ' + reqBody.service,
        '<b>Имя</b>: ' + reqBody.name,
        '<b>Телефон</b>: ' + reqBody.phone,
      ]
      if (reqBody.description) {
        fields.push('<b>Описание</b>: ' + reqBody.description)
      }
      if (reqBody.budget) {
        fields.push('<b>Бюджет</b>: ' + reqBody.budget)
      }
      if (reqBody.time) {
        fields.push('<b>Время</b>: ' + reqBody.time)
      }
      if (reqBody.email) {
        fields.push('<b>Почта</b>: ' + reqBody.email)
      }
      if (reqBody.anotherLink) {
        fields.push('<b>Ссылка на сайт</b>: ' + reqBody.anotherLink)
      }
      if (reqBody.howDidKnow) {
        fields.push('<b>Откуда узнали</b>: ' + reqBody.howDidKnow)
      }
      let msg = ''
      fields.forEach(field => {
        msg += field + '\n'
      });
      const result = await telegramBot.sendMessage(+process.env.MY_BOT_CHAT_ID, msg, { parse_mode: 'HTML' });
      return res.json(result);
    } catch (error) {
      return next(ApiError.badRequest(error.message))
    }
  }
}

export default new contactController()
