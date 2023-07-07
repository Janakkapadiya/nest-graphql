import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './service/auth.service';
import { AuthResolver } from './resolver/auth.resolver';
import { LocalStrategy } from './strategy/authLocalstregy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwtstrategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '60s' },
      secret: 'jwt-secret',
    }),
  ],
  controllers: [],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
  exports: [],
})
export class AuthModule {}
