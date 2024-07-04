import { z } from 'zod';

const VariantSchema = z.object({
  type: z.string(),
  value: z.string()
});

const InventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean()
});

const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema
});

const updateProductSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(VariantSchema).optional(),
  inventory: InventorySchema.optional()
});

export const ProductValidation = {
  ProductSchema,
  updateProductSchema
}
