import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '../service/auth.service';
import { LoginArgs } from '../args/login.args';
import { UseGuards } from '@nestjs/common';
import { ResponseSchema } from '../schema/response.schema';
import { GqlAuthGuard } from '../guards/gqlauthguard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ResponseSchema)
  login(@Args('loginArgs') loginArgs: LoginArgs, @Context() context: any) {
    return this.authService.login(context.user);
  }
}
