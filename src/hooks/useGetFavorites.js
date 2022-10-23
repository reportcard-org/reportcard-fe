import { useQuery, gql } from '@apollo/client';

const USER_FAV_QUERY = gql`
query userdistricts($userId: Int!){  
    userdistricts(userId: $userId){
        id
        district {
            name
            urbanCentricLocale
            enrollment
        }
    }
  }
`;


export const useGetFavorites = (userId) => {
    const { error: favError, loading: favLoading, data: favData } = useQuery(USER_FAV_QUERY, {
        variables: {
            userId: Number(userId)
        }
    })

    return {
        favError,
        favData,
        favLoading
    }
}

