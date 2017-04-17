function checkAuthenticity(token, callback) {
  if (!token) {
    return callback(false);
  }

  fetch('/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token
    })
  })
  .then((response) => response.json())
  .then((responseJSON) => {
    console.log(responseJSON);
    return callback(responseJSON.success);
  })
  .catch((error) => {
    console.error(error);
  });
}

export default checkAuthenticity;
