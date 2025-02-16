import { gql } from "@apollo/client";

const loginMutation = gql`
mutation Login($email: String!, $password: String!) { 
    login(
        loginUserInput: { 
            email: $email,
            password: $password
        }
    )
}
`;

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
}
`;

export { loginMutation, registerMutation };
