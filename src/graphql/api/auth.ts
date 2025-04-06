import { gql } from "@apollo/client";

const loginMutation = gql`
mutation Login($email: String!, $password: String!) { 
    login(loginUserInput: { email: $email, password: $password })
    {
        data {
            id,
            status,
            message,
            token,
            refreshToken
        },
        message,
        status
    }
}`;

const registerMutation = gql`
mutation Register(
    $email: String!, $firstName: String!, $lastName: String!, $gender: String!,
    $ageGroup: String!, $suburb: String!, $city: String!, $province: String!, $password: String!
) { 
    registerUser(
        registerUserInput: { 
            email: $email,
            firstName: $firstName,
            lastName: $lastName,
            gender: $gender,
            ageGroup: $ageGroup,
            address: { suburb: $suburb, city: $city, province: $province },
            password: $password,
        }
    )
    {
        message,
        status
    }
}`;

const sendVerificationCodeMutation = gql`
mutation SendVerificationCode($email: String!) {
    sendVerificationCode(email: $email)
    {
        message,
        status
    }
}`;

const verifyOTPCodeMutation = gql`
mutation verifyOTPCode($email: String!, $verificationCode: String!) {
    verifyOTPCode(email: $email, verificationCode: $verificationCode)
    {
        message,
        status
    }
}`;

const changePasswordMutation = gql`
mutation changePassword($email: String!, $password: String!) { 
    changePassword(passwordInput: { email: $email, password: $password })
    {
        status,
        message
    }
}`;

const updateUserMutation = gql`
mutation updateUser($id: ID!, $updateUserInput: UpdateUserInput!) {
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
            }
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
            }
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
            }
        }
        message,
        status
    }
}`;

export {
    registerMutation,
    loginMutation, 
    sendVerificationCodeMutation, 
    verifyOTPCodeMutation,
    changePasswordMutation,
    updateUserMutation,
    getAllUsersQuery,
    getUserQuery,
};
