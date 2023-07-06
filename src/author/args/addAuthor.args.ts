import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddAuthorArgs {
  @Field()
  name: string;
}
