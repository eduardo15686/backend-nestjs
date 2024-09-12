import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateProduct {
  @Field()
  name: string;

  @Field()
  @IsNotEmpty()
  price: number;

  @Field()
  @IsNotEmpty()
  year: number;

  @Field()
  @IsNotEmpty()
  category: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  user: string;
}
