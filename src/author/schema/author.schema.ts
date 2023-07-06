import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/schema/book.schema';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field(() => [Book])
  books: Book[];
}
