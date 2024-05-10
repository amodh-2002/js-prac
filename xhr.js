// // const URL = "https://jsonplaceholder.typicode.com/posts";
// // const xhr = new XMLHttpRequest();
// // // console.log(xhr);
// // xhr.open("GET", URL);
// // // xhr.onreadystatechange = function () {
// // //   //   console.log(xhr);
// // //   if (xhr.readyState === 4) {
// // //     // console.log(xhr.response);
// // //     const respond = xhr.response;
// // //     const data = JSON.parse(respond);
// // //   }
// // // };

// // xhr.onload = function () {
// //   const respond = xhr.response;
// //   const data = JSON.parse(respond);
// // };
// // xhr.send();

// //error handling

// // const URL = "https://jsonplaceholder.typicode.com/posts";
// // const xhr = new XMLHttpRequest();

// // xhr.open("GET", URL);
// // xhr.onload = () => {
// //   if (xhr.status >= 200 && xhr.status < 300) {
// //     const data = JSON.parse(xhr.response);
// //   } else {
// //     console.log("something went wrong");
// //   }
// // };
// // xhr.onerror = () => {
// //   console.log("network error");
// // };
// // xhr.send();

// //xhr using promise

// // const URL = "https://jsonplaceholder.typicode.com/posts";
// // // const xhr = new XMLHttpRequest();

// // function sendRequest(method, url) {
// //   return new Promise(function (resolve, reject) {
// //     const xhr = new XMLHttpRequest();
// //     xhr.open(method, url, true);
// //     xhr.onload = function () {
// //       if (xhr.status >= 200 && xhr.status < 300) {
// //         resolve(xhr.response);
// //       } else {
// //         reject(new Error("Something went wrong"));
// //       }
// //     };
// //     xhr.onerror = function () {
// //       //   console.log("Something went wrong");
// //       reject(new Error("Something went wrong"));
// //     };
// //     xhr.send();
// //   });
// // }
// // sendRequest("GET", URL)
// //   .then((response) => {
// //     const data = JSON.parse(response);
// //     //   console.log(data);
// //     return data;
// //   })
// //   .then((data) => {
// //     // console.log(data[3].id);
// //     const id = data[3].id;
// //     return id;
// //   })
// //   .then((id) => {
// //     const url = `${URL}/${id}`;
// //     return sendRequest("GET", url);
// //   })
// //   .then((newResponse) => {
// //     const newData = JSON.parse(newResponse);
// //     console.log(newData);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// //fetch

// const URL = "https://jsonplaceholder.typicode.com/posts";
// // const whatisthis = fetch(URL);
// // console.log(whatisthis);

// fetch(URL)
//   .then((response) => {
//     //   console.log(response.json());
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong");
//     }
//   })
//   .then((data) => {
//     // console.log(data[3].id);
//     return data[3].id;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
