import { User } from 'src/users/schemas/user.schema';
import * as moongoose from 'mongoose';
export type ProductDocument = moongoose.HydratedDocument<Product>;
export declare class Product {
    _id: string;
    name: string;
    price: number;
    year: number;
    category: string;
    user: User;
}
export declare const ProductSchema: moongoose.Schema<Product, moongoose.Model<Product, any, any, any, moongoose.Document<unknown, any, Product> & Product & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, moongoose.DefaultSchemaOptions, Product, moongoose.Document<unknown, {}, moongoose.FlatRecord<Product>> & moongoose.FlatRecord<Product> & Required<{
    _id: string;
}>>;
