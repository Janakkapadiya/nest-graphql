import { Injectable } from '@nestjs/common';
import { BookEntity } from '../enity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddBookArgs } from '../args/addBook.args';
import { UpdateBookArgs } from '../args/updateBook.args';
import { AuthorEntity } from 'src/author/entity/author.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookEntityRepository: Repository<BookEntity>,
    @InjectRepository(AuthorEntity)
    private readonly authorEntityRepository: Repository<AuthorEntity>,
  ) {}

  async findAllBooks(): Promise<BookEntity[]> {
    return await this.bookEntityRepository.find({ relations: ['author'] });
  }

  async findBookById(id: number): Promise<BookEntity> {
    return await this.bookEntityRepository.findOne({
      where: { id: id },
      relations: ['author'],
    });
  }

  async addBook(addBook: AddBookArgs): Promise<string> {
    const { authorId } = addBook;
    const author = await this.authorEntityRepository.findOne({
      where: { id: authorId },
    });

    const book = this.bookEntityRepository.create(addBook);
    book.author = author;

    await this.bookEntityRepository.save(book);
    return 'book has been added';
  }

  async updateBookById(updateBook: UpdateBookArgs): Promise<string> {
    const { id, title, price } = updateBook;
    await this.bookEntityRepository.update(
      { id: id },
      { title: title, price: price },
    );
    return 'book has been updated';
  }

  async deleteBookById(id: number): Promise<string> {
    await this.bookEntityRepository.delete(id);
    return 'book has been deleted';
  }
}
