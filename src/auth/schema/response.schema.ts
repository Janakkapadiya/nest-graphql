import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/schema/user.schema';

@ObjectType()
export class ResponseSchema {
  @Field()
  access_token: string;
  @Field(() => User)
  user: User;
}
