import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookModule } from './books/book.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { UserModule } from './user/user.module';
import { AuthResolver } from './auth/resolver/auth.resolver';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), './src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), './src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'janak',
      password: 'janak123',
      database: 'books',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      autoLoadEntities: true,
    }),
    BookModule,
    UserModule,
    AuthorModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
