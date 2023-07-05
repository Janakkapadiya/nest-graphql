import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [BookResolver, BookService],
})
export class BookModule {}
