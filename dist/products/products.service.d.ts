import { Model } from 'mongoose';
import { CreateProduct } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/edit-product';
import { Product } from './schemas/product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProductById(_id: string): Promise<Product>;
    getProductsByUser(_id: string): Promise<Product[]>;
    createProduct(createProduct: CreateProduct): Promise<import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: string;
    }>>;
    updateProduct(updateProduct: UpdateProduct): Promise<import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: string;
    }>>;
    deleteProduct(deleteProduct: UpdateProduct): Promise<void>;
}
