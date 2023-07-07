
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: number;
    authorId: number;
}

export interface UpdateBookArgs {
    id: number;
    title?: Nullable<string>;
    price?: Nullable<number>;
}

export interface AddAuthorArgs {
    name: string;
}

export interface UpdateAuthorArgs {
    id: number;
    name: string;
}

export interface LoginArgs {
    email: string;
    password: string;
}

export interface Author {
    id: number;
    name: string;
    books: Book[];
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
    author: Author;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface ResponseSchema {
    access_token: string;
    user: User;
}

export interface IQuery {
    getAllBooks(): Book[] | Promise<Book[]>;
    getBookById(id: number): Book | Promise<Book>;
    getAllAuthors(): Author[] | Promise<Author[]>;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    deleteBook(id: number): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
    addAuthor(addAuthor: AddAuthorArgs): string | Promise<string>;
    updateAuthor(updateAuthorArgs: UpdateAuthorArgs): string | Promise<string>;
    login(loginArgs: LoginArgs): ResponseSchema | Promise<ResponseSchema>;
}

type Nullable<T> = T | null;
