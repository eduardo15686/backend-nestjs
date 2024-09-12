import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/users/schemas/user.schema';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => User) // Replace UserType with the actual type of the user
  user: User;
}
