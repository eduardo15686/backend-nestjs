import { HydratedDocument } from 'mongoose';
import { UserStatus } from './user-status.enum';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    _id: string;
    name: string;
    email: string;
    status: UserStatus;
    password: string;
    age: number;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}>>;
