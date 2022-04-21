// // api - https://reqres.in/api/users?page=2

// //fetch data

// async function* fetchData() {
//   try {
//     let response = yield fetch("https://reqres.in/api/users?page=2");
//     if (response.status === 200) {
//       let data = yield response.json();
//       yield data;
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// // fetchData()
// //   .next()
// //   .then((res) => console.log(res.value));

// console.log(fetchData().next());
// console.log(fetchData().next());
// console.log(
//   fetchData()
//     .next()
//     .then((data) => console.log(data))
// );

async function* callAPI() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }); // fetch() returns a promise, so we need to wait for it

  const posts = await response.json(); // res is now only an HTTP response, so we need to call res.json()
  console.log("response", posts);

  yield posts;
}

const callAPIObject = callAPI();

callAPIObject.next().then((res) => {
  let data = res.value.data;
  let root = document.querySelector(".root");
  data.forEach((entry) => {
    root.innerHTML += `<div class="card" style="width: 90%; margin-top: 20px">
      <img src="${entry.avatar}" class ="card-img-top"/>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p class="card-text"><strong>ID: </strong>${entry.id}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Name: </strong>${entry.first_name} ${entry.last_name}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Email: </strong>${entry.email}</p>
          </li>
        </ul>
        </div>
      </div>`;
  });
});
