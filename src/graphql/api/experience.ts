import { gql } from "@apollo/client";

const addExperienceMutation = gql`
mutation addExperience(
    $userId: String!, $company: String!, $period: String!, $position: String!
) { 
    addExperience(
        experienceInput: { 
            userId: $userId,
            company: $company,
            period: $period,
            position: $position,
        }
    )
    {
        data {
            id,
            userId,
            company,
            period,
            position,
        }
        message,
        status
    }
}`;

const updateExperienceMutation = gql`
mutation updateExperience($id: String!, $experienceInput: UpdateExperienceDto!) {
    updateExperience(id: $id, experienceInput: $experienceInput) {
        data {
            id,
            userId,
            company,
            period,
            position,
        }
        message,
        status
    }
}`;

//_____________________Query______________________
const getAllExperiencesQuery = gql`
query getAllExperiences {
    getAllExperiences {
        data {
            id,
            userId,
            company,
            period,
            position,
        }
        message,
        status
    }
}`;

const userExperiencesQuery = gql`
query getExperiencesByUserId($userId: String!) {
    getExperiencesByUserId(userId: $userId) {
        data {
            id,
            userId,
            company,
            period,
            position,
        }
        message,
        status
    }
}`;


const deleteExperienceMutation = gql`
mutation deleteExperience($id: ID!) {
    deleteExperience(id: $id) {
        message,
        status
    }
}`;

export {
    addExperienceMutation,
    updateExperienceMutation,
    getAllExperiencesQuery,
    userExperiencesQuery,
    deleteExperienceMutation
};
