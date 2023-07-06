import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateAuthorArgs {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
}
