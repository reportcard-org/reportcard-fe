import { gql } from '@apollo/client';

export const USER_LOGIN_QUERY = gql`
query user($email: String!){
    user(email: $email){
        name
        email 
        id
    }
  }
`;
