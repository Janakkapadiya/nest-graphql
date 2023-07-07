import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class LoginArgs {
  @Field()
  email: string;
  @Field()
  password: string;
}
