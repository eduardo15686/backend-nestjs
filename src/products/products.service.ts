import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProduct } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/edit-product';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().populate('user').exec();
  }

  async getProductById(_id: string): Promise<Product> {
    return this.productModel.findById(_id).exec();
  }

  async getProductsByUser(_id: string): Promise<Product[]> {
    return this.productModel
      .find({
        user: {
          _id: _id,
        },
      })
      .exec();
  }

  async createProduct(createProduct: CreateProduct) {
    const newProduct = new this.productModel(createProduct);
    return newProduct.save();
  }

  async updateProduct(updateProduct: UpdateProduct) {
    return this.productModel
      .findByIdAndUpdate(updateProduct._id, updateProduct, {
        new: true,
      })
      .exec();
  }

  async deleteProduct (deleteProduct: UpdateProduct){
    
  }
}
