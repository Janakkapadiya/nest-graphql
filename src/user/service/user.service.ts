import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public readonly userRepository: Repository<UserEntity>,
  ) {}

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) {
      return user;
    }
    throw new NotFoundException('user could not not found');
  }
}
