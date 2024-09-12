import { UserStatus } from '../schemas/user-status.enum';
export declare class UpdateUser {
    _id: string;
    name?: string;
    email?: string;
    status?: UserStatus;
    age?: number;
}
