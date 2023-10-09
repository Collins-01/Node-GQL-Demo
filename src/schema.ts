import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { BookResolver } from "./domain";
// Define the Root Query and Mutation

const bookResolver = new BookResolver();

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // *Books
    books: bookResolver.Query.books,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    //* Books
    addBook: bookResolver.Mutation.addBook,
    deleteBook: bookResolver.Mutation.deleteBook
  },
});
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
