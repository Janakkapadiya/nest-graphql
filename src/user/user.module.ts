import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
