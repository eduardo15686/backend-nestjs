import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProduct } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/edit-product';
import { PubSub } from 'graphql-subscriptions';
import { Product } from './schemas/product.schema';

const pubSub = new PubSub();
@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query((returns) => [Product])
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Query((returns) => Product)
  async getProductById(@Args('productId') _id: string): Promise<Product> {
    return this.productService.getProductById(_id);
  }

  @Query((returns) => [Product])
  async getProductsByUser(
    @Args('getProductsByUser') _id: string,
  ): Promise<Product[]> {
    return this.productService.getProductsByUser(_id);
  }

  @Mutation(() => Product)
  createProduct(@Args('createProduct') createProduct: CreateProduct) {
    const newProduct = this.productService.createProduct(createProduct);
    pubSub.publish('productAdded', { productAdded: newProduct });
    return newProduct;
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProduct') updateProduct: UpdateProduct) {
    return this.productService.updateProduct(updateProduct);
  }

  @Subscription((returns) => Product)
  productAdded() {
    return pubSub.asyncIterator('productAdded');
  }
}
