import { gql } from "@apollo/client";

const loginMutation = gql`
mutation Login($email: String!, $password: String!) { 
    login(loginUserInput: { email: $email, password: $password })
    {
        id,
        status,
        message,
        token,
    }
}`;

const registerMutation = gql`
mutation Register(
    $email: String!, $firstName: String!, $lastName: String!, 
    $phoneNumber: String!, $password: String!, $role: String!
) { 
    registerUser(
        registerUserInput: { 
            email: $email,
            firstName: $firstName,
            lastName: $lastName,
            phoneNumber: $phoneNumber,
            password: $password,
            role: $role,
        }
    )
    {
        email,
        firstName,
        lastName,
        phoneNumber,
        role
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

export { 
    loginMutation, sendVerificationCodeMutation, verifyOTPCodeMutation,
    registerMutation 
};
