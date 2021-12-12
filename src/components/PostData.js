function postData(data, url, callback) {
  const postData = JSON.stringify(data);
  console.log(data);

  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: postData,
  })
    .then((response) => {
      const Obj = response.json();
      return Obj;
    })

    .then((data) => {
      console.log("Successful submission:", data);
      callback(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default postData;
