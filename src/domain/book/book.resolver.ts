import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { BookType } from "../../types";
import { BookService } from "./book.service";

export class BookResolver {
  private bookService: BookService = new BookService();

  Query = {
    // Resolver for getting all books
    books: {
      type: new GraphQLList(BookType),
      resolve: () => this.bookService.getBooks(),
    },
    book: {
      type: new GraphQLList(BookType),
      resolve: (id:any) => this.bookService.getBookById(id),
    },
  };

  Mutation = {
    addBook: {
      type: BookType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        year: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_: any, args: any) => {
        const newBook = this.bookService.createBook(args);
        return newBook;
      },
    },

    deleteBook: {    
      type: BookType,
      resolve: (_: any, __: any) => {
        console.log(`Delete Book with  ${_} ||||||| id ${__}`);
        this.bookService.deleteBook(1);
        return {
          message: "Book successfully deleted",
        };
      },
    },
  };
}
