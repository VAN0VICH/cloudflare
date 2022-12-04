export const typeDefs = /* GraphQL */ `
  scalar Date
  type User {
    PK: String!
    SK: String!
    id: String!
    username: String
    fullName: String
    email: String
    role: String!
    about: String
    balance: Int!
    level: Int!
    experience: Int!
    topics: [String]
    subtopics: [String]
    createdAt: Date!
  }
  type Quest {
    PK: String!
    SK: String!
    id: String!
    title: String
    topic: String
    subtopic: String
    description: String
    reward: Int
    slots: Int
    published: Boolean
    publishedAt: Date
    creatorId: ID!
    createdAt: Date!
  }

  type Comment {
    PK: String!
    SK: String!
    id: String
    creatorId: String!

    createdAt: Date!
  }
  type PublishedQuests {
    nodes: [Quest]
    pageInfo: PageInfo
  }
  type PageInfo {
    endCursor: Quest
    hasNextPage: Boolean!
  }

  input LastEvaluatedKey {
    id: String!
    title: String!
    creatorId: String!
  }
  type Query {
    me(id: String!): User
    userByUsername(username: String!): User
    userById(id: String!): User

    workspaceQuest(questId: String!, userId: String!): Quest
    workspaceQuests(userId: String!): [Quest]
    publishedQuests(after: LastEvaluatedKey): PublishedQuests
    publishedQuest(id: String!): Quest
  }
  type Mutation {
    createUser(userId: String!): Boolean
    createQuest(id: String!, creatorId: String!): Quest
    updateQuestAttributes(
      questId: String!
      attribute: String!
      text: String
      number: Int
    ): Boolean
    updateQuestDescription(questId: String!, description: String!): Boolean
    publishQuest(id: String!): Boolean
    test: String
  }

  type Subscription {
    questPublished(publisherId: String!): Quest
  }
`;