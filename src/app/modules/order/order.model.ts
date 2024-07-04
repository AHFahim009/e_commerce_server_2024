import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';



const OrderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to Product collection
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const OrderModel = model<IOrder>('Order', OrderSchema);

export default OrderModel;
