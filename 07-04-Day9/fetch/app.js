// api  -  https://jsonplaceholder.typicode.com/posts/

let fetchData = async (singleData) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${singleData ? 1 : ""}`,
      {}
    );
    console.log(response);
    let data = await response.json();

    data = singleData ? [data] : data;

    let root = document.querySelector(".root");
    console.log(root);

    data.forEach((entry) => {
      root.innerHTML += `<div class="card" style="width: 90%; margin-top: 20px">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p class="card-text"><strong>ID: </strong>${entry.userId}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Title: </strong>${entry.title}</p>
          </li>
          <li class="list-group-item">
            <p class="card-text"><strong>Body: </strong>${entry.body}</p>
          </li>
        </ul>
      </div>`;
    });
  } catch (err) {
    alert("Error in fetching", err);
  }
};

//get single data or all data
let choiceOfData = () => {
  let singleData = prompt("Single post or multiple post ? yes / no");

  if (singleData === "yes") fetchData(true);
  else if (singleData === "no") fetchData(false);
  else alert("enter valid input");
};

choiceOfData();
