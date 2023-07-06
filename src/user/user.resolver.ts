import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import * as jwt from 'jsonwebtoken';

@Resolver(() => User)
export class UserResolver {
  @Query(() => String)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    };
    return jwt.sign(payload, 'key', { expiresIn: '60s' });
  }
}
