import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/author/schema/author.schema';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;
  @Field()
  title: string;
  @Field(() => Int, { nullable: true })
  price: number;
  @Field(() => Author)
  author: Author;
}
