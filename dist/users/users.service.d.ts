import { Model } from 'mongoose';
import { CreateUser } from './dtos/create-user.dto';
import { UpdateUser } from './dtos/edit-user.dto';
import { UserStatus } from './schemas/user-status.enum';
import { User } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getUsers(): Promise<User[]>;
    getUserById(_id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    getUsersByStatus(status: UserStatus): Promise<User[]>;
    createUser(createUser: CreateUser): Promise<User>;
    updateUser(updateUser: UpdateUser): Promise<User>;
}
