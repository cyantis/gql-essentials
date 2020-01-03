import { resolvers } from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    language: String
    gender: Gender
    age: Int
    email: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  enum Gender {
    FEMALE
    MALE
    OTHER
  }

  type Query {
    getFriend(id: ID): Friend,
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    language: String
    gender: Gender
    age: Int
    email: String!
    contacts: [ContactInput]
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`
const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }
