import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from './schema/author.schema';
import { AuthorService } from './service/author.service';
import { AddAuthorArgs } from './args/addAuthor.args';
import { UpdateAuthorArgs } from './args/updateAuthor.args';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [Author])
  getAllAuthors() {
    return this.authorService.getAllAuthors();
  }

  @Mutation(() => String)
  addAuthor(@Args('addAuthor') addAuthorArgs: AddAuthorArgs) {
    return this.authorService.addAuthor(addAuthorArgs);
  }

  @Mutation(() => String)
  updateAuthor(@Args('updateAuthorArgs') updateAuthorArgs: UpdateAuthorArgs) {
    return this.authorService.updateAuthor(updateAuthorArgs);
  }
}
