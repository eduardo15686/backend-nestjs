import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserStatus } from './user-status.enum';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type UserDocument = HydratedDocument<User>;

@Schema()
@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Field()
  @Prop({ required: true, enum: UserStatus, default: UserStatus.Activo })
  status: UserStatus;

  @Field()
  @Prop({ required: true })
  password: string;

  @Field()
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
