import { gql } from "@apollo/client";

const updateUserMutation = gql`
mutation updateUser($id: ID!, $updateUserInput: UpdateUserDto!) {
    updateUser(id: $id, updateUserInput: $updateUserInput) {
        data {
            id,
            email,
            firstName,
            lastName,
            gender,
            ageGroup,
            role,
            biography,
            levelOfStudy,
            school,
            curriculum,
            interests,
            address {
                suburb,
                city,
                province
            },
            imageUrl
        }
        message,
        status
    }
}`;

//_____________________Query______________________
const getAllUsersQuery = gql`
query getAllUsers {
    getAllUsers {
        data {
            id,
            email,
            firstName,
            lastName,
            gender,
            ageGroup,
            role,
            biography,
            levelOfStudy,
            school,
            curriculum,
            interests,
            address {
                suburb,
                city,
                province
            },
            imageUrl
        }
        message,
        status
    }
}`;

const getAllTutorsQuery = gql`
query getAllTutors {
    getAllTutors {
        data {
            id,
            email,
            firstName,
            lastName,
            gender,
            ageGroup,
            role,
            biography,
            levelOfStudy,
            school,
            curriculum,
            interests,
            address {
                suburb,
                city,
                province
            },
            imageUrl
        }
        message,
        status
    }
}`;

const getUserQuery = gql`
query getUser($id: ID!) {
    getUser(id: $id) {
        data {
            id,
            email,
            firstName,
            lastName,
            gender,
            ageGroup,
            role,
            biography,
            levelOfStudy,
            school,
            curriculum,
            interests,
            address {
                suburb,
                city,
                province
            },
            imageUrl
        }
        message,
        status
    }
}`;

export {
    updateUserMutation,
    getAllUsersQuery,
    getAllTutorsQuery,
    getUserQuery,
};
