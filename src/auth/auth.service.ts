import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      console.log(user);
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    const access_token = this.jwtService.sign(payload);
    const { password, ...userInfo } = user._doc || user;
    return { access_token, user: userInfo };
  }
}
