import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { UserEntity } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      console.log('result:', result);
      return result;
    }
    return null;
  }

  async login(user: UserEntity) {
    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
      user,
    };
  }
}
