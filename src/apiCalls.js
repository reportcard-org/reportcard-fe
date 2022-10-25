const getDistrict = (addressObject) => {
    return fetch(`https://reportcard-rails.herokuapp.com/api/v1/district_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addressObject)
    })
      .then(response => response.json())
   
  }

  export { getDistrict }