const { Query } = require('mongoose');
const projectService = require('../services/projectService');

const resolvers = {
    Query: {
        projects: () => {
            return projectService.getAllProjects();
        }
    },
    Mutation: {
        createProject: (_, { name, description, startDate, endDate, status, teamMembers, budget }) => {
            return projectService.createProject(name, description, startDate, endDate, status, teamMembers, budget);
        },
        updateProject: (_, { _id, name, description, startDate, endDate, status, teamMembers, budget }) => {
            return projectService.updateProject(_id, name, description, startDate, endDate, status, teamMembers, budget);
        },
        deleteProject: (_, { _id }) => {
            return projectService.deleteProject(_id);
        }
    }
};

module.exports = resolvers;