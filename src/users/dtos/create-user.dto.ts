import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUser {
  @Field()
  @IsNotEmpty({ message: 'El nombre no puede estar vacio' })
  name: string;

  @Field()
  @IsEmail({}, { message: 'El email no es valido' })
  @IsNotEmpty({ message: 'el correo no puede estar vacion' })
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field({ nullable: true })
  age?: number;
}
