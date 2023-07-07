import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entity/author.entity';
import { Module } from '@nestjs/common';
import { AuthorService } from './service/author.service';
import { AuthorResolver } from './resolver/author.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
