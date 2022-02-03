import { prisma } from "../prisma/database";
import { Request, Response } from "express";
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

module.exports = {
  payment: async (req: Request, res: Response) => {
    try {
      const preference = {
        items: [
          {
            title: req.body.title,
            unit_price: req.body.price,
            quantity: 1,
          },
        ],
        back_urls: {
          success: `${process.env.CLIENT_URL}/payment/success`,
          failure: `${process.env.CLIENT_URL}/payment/failure`,
          pending: `${process.env.CLIENT_URL}/payment/pending`,
        },
      };

      const response = await mercadopago.preferences.create(preference);
      res.json(response.body);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
