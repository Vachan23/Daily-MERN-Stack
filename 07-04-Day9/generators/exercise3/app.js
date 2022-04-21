// // api - https://reqres.in/api/users?page=2

//fetches the api using async/await as a generator function

async function* callAPI() {
  const response = await fetch("https://reqres.in/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }); // fetch() returns a promise, so we need to wait for it

  const posts = await response.json(); // res is now only an HTTP response, so we need to call res.json()
  console.log("response", posts);

  yield posts;
}

//called generator function

const callAPIObject = callAPI();

//added to html using .then()
callAPIObject.next().then((res) => {
  let data = res.value.data;
  console.log(data);
  let root = document.querySelector(".root");
  data.forEach((entry) => {
    root.innerHTML += `<div class="card" style="width: 90%; margin-top: 20px">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p class="card-text"><strong>ID: </strong>${entry.id}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Name: </strong>${entry.name}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Pantone Value: </strong>${entry.pantone_value}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Color: </strong>${entry.color}</p>
          </li>
        </ul>
      </div>`;
  });
});
