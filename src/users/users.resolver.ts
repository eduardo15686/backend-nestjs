import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUser } from './dtos/create-user.dto';
import { UpdateUser } from './dtos/edit-user.dto';
import { UserStatus } from './schemas/user-status.enum';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './schemas/user.schema';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query((returns) => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query((returns) => User)
  async getUserById(@Args('userId') _id: string): Promise<User> {
    return this.userService.getUserById(_id);
  }

  @Query((returns) => User)
  async getUserByEmail(@Args('getUserByEmail') email: string): Promise<User> {
    return this.userService.findUserByEmail(email);
  }

  @Query((returns) => [User])
  async getUsersByStatus(
    @Args('getUsersByStatus', { type: () => UserStatus }) status: UserStatus,
  ): Promise<User[]> {
    return this.userService.getUsersByStatus(status);
  }

  @Mutation((returns) => User)
  async createUser(@Args('createUser') createUser: CreateUser) {
    return this.userService.createUser(createUser);
  }

  @Mutation((returns) => User)
  async updateUser(@Args('updateUser') updateUser: UpdateUser) {
    return this.userService.updateUser(updateUser);
  }
}
