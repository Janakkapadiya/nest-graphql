import { Resolver } from '@nestjs/graphql';
import { User } from '../schema/user.schema';

@Resolver(() => User)
export class UserResolver {}
