import { AuthService } from './auth.service';
import { LoginResponse } from './schemas/LoginResponse.schema';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string): Promise<LoginResponse>;
}
