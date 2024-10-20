const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        name: String!
        description: String!
        startDate: String!
        endDate: String!
        status: String!
        teamMembers: [String!]!
        budget: String!
    }
    
    type Query {
        projects: [Project]!
        project(_id: ID!): Project
    }

    type Mutation {
        createProject(
            name: String!,
            description: String!,
            startDate: String!,
            endDate: String!,
            status: String!,
            teamMembers: [String!]!,
            budget: String!
        ): Project!

        updateProject(
            _id: ID!,
            name: String,
            description: String,
            startDate: String,
            endDate: String,
            status: String,
            teamMembers: [String],
            budget: String
        ): Project!

        deleteProject(_id: ID!): Project!
    }
`;

module.exports = typeDefs;
