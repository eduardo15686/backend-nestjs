import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateProduct {
  @Field(() => ID, { nullable: false })
  @IsNotEmpty({ message: 'el id no puede ir vacio' })
  _id: string;

  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  price?: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  year?: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  category?: string;
}
