import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBookArgs {
  @Field(() => Int)
  id: number;
  @Field({ nullable: true })
  title: string;
  @Field(() => Int, { nullable: true })
  price: number;
}
