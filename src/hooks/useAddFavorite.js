import { useMutation, gql } from "@apollo/client";

const FAVORITE_DISTRICT = gql`
mutation createUserDistrict($userId: Number!, $districtId: Number! ){
createUserDistrict(input: {
    userId: $userId,
    districtID: $districtId
}) {
    userdistrict {
        id
    }
}
}
`;

export const useAddFavorite = (userId, districtId) => {
    const { error, loading, data } = useMutation(FAVORITE_DISTRICT, {
        variables: {
            userId: userId,
            districtId: districtId
        }
      })
      
      return {
        error,
        data,
        loading
    }
}