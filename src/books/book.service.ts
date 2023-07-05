import { Injectable } from '@nestjs/common';
import { BookEntity } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookEntityRepository: Repository<BookEntity>,
  ) {}

  async findAllBooks(): Promise<BookEntity[]> {
    return this.bookEntityRepository.find();
  }

  async findBookById(id: number): Promise<BookEntity> {
    return this.bookEntityRepository.findOne({ where: { id: id } });
  }

  async updateBookById(updateBooksDto: UpdateBookDto): Promise<void> {
    const { title, price } = updateBooksDto;
    this.bookEntityRepository.update({ title: title }, { price: price });
  }
}

export class UpdateBookDto {
  title: string;
  price: number;
}
