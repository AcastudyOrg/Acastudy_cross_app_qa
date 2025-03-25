import { gql } from "@apollo/client";

const loginMutation = gql`
mutation Login($email: String!, $password: String!) { 
    login(loginUserInput: { email: $email, password: $password })
    {
        id,
        status,
        message,
        token,
        refreshToken
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

export {
    registerMutation,
    loginMutation, 
    sendVerificationCodeMutation, 
    verifyOTPCodeMutation,
    changePasswordMutation
};
