import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/schemas/user.schema';
import * as moongoose from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type ProductDocument = moongoose.HydratedDocument<Product>;

@Schema()
@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string 

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  price: number;

  @Field()
  @Prop()
  year: number;

  @Field()
  @Prop()
  category: string;

  @Field()
  @Prop({ type: moongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
