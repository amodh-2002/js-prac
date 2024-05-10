const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
  //   console.log(data);
}
// const returned = getPosts();
// console.log(returned);

getPosts().then((myResponseData) => {
  console.log(myResponseData);
});
//   .catch((error) => {
//     console.log(error);
//   });

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
