import { useQuery, gql } from '@apollo/client';

const USER_LOGIN_QUERY = gql`
query user($email: String!){
    user(email: $email){
        name
        email
        id
    }
  }
`;


export const useGetUsers = (userLoginEmail) => {
    const { error: queryError, loading: queryLoading, data: queryData } = useQuery(USER_LOGIN_QUERY, {
        variables: {
            email: userLoginEmail
        }
    })

    return {
        queryError,
        queryData,
        queryLoading
    }
}