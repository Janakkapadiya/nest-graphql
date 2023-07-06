import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './enity/book.entity';
import { BookService } from './service/book.service';
import { AuthorEntity } from 'src/author/entity/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
  controllers: [],
  providers: [BookResolver, BookService],
})
export class BookModule {}
