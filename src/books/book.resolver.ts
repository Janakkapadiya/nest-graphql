import { Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => String)
export class BookResolver {
  @Query((returns) => String)
  index(): string {
    return 'hello';
  }
}
