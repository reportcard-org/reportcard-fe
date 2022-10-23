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

const useAddFavorite = (queryData, districtData) => {
console.log(districtData)
    let districtId = districtData.data.attributes[0].lea_id
    let userId = queryData.user.id

    const [addFavorites, { error, loading, data }] = useMutation(FAVORITE_DISTRICT, {
        variables: {
            userId: userId,
            districtId: districtId
        }
      })
      
      return {
        addFavorites,
        error,
        data,
        loading
    }
}