import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dtos/create-user.dto';
import { UpdateUser } from './dtos/edit-user.dto';
import { UserStatus } from './schemas/user-status.enum';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(_id: string): Promise<User> {
    const user = await this.userModel.findById(_id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async getUsersByStatus(status: UserStatus): Promise<User[]> {
    return this.userModel.find({ status: status });
  }

  async createUser(createUser: CreateUser): Promise<User> {
    const existingUser = await this.findUserByEmail(createUser.email);
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(createUser.password, 10);
    const newUser = new this.userModel({
      ...createUser,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async updateUser(updateUser: UpdateUser): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(updateUser._id, updateUser, {
      new: true,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
