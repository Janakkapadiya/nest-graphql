import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './service/book.service';
import { AddBookArgs } from './args/addBook.args';
import { UpdateBookArgs } from './args/updateBook.args';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  getAllBooks() {
    return this.bookService.findAllBooks();
  }

  @Query(() => Book)
  getBookById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.bookService.findBookById(id);
  }

  @Mutation(() => String)
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation(() => String)
  deleteBook(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.bookService.deleteBookById(id);
  }

  @Mutation(() => String)
  updateBook(@Args('updateBookArgs') updateBookArgs: UpdateBookArgs) {
    return this.bookService.updateBookById(updateBookArgs);
  }
}
