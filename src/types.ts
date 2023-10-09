import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } from 'graphql';

// Define the Book type
export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    genre: { type: GraphQLString },
    year: { type: GraphQLInt },
  }),
});
