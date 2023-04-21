const gql = require("graphql-tag");

const typeDefs = gql`
  # Schema definitions go here

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track' approximate length to complete, in minutes"
    length: Int
    "the numbrer of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "the author's name"
    name: String!
    "the author's profile picture url "
    photo: String
  }
`;

module.exports = typeDefs;
