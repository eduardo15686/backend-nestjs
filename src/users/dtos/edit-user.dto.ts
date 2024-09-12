import { Field, ID, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { UserStatus } from '../schemas/user-status.enum';


@InputType()
export class UpdateUser {
  @Field(() => ID)
  @IsNotEmpty({ message: 'el id no puede ir vacio' })
  _id: string;

  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail({}, { message: 'ingrese un email valido' })
  email?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  status?: UserStatus;

  @Field({ nullable: true })
  age?: number;
}
