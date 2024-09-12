import { ProductsService } from './products.service';
import { CreateProduct } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/edit-product';
import { Product } from './schemas/product.schema';
export declare class ProductsResolver {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(): Promise<Product[]>;
    getProductById(_id: string): Promise<Product>;
    getProductsByUser(_id: string): Promise<Product[]>;
    createProduct(createProduct: CreateProduct): Promise<import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: string;
    }>>;
    updateProduct(updateProduct: UpdateProduct): Promise<import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: string;
    }>>;
    productAdded(): AsyncIterator<unknown, any, undefined>;
}
