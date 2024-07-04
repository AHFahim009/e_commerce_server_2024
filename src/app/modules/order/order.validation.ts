import { z } from "zod";

export const OrderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive().optional(),
  quantity: z.number().positive(),
});

export const OrderValidation = {
  OrderSchema,
};
