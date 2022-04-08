async function fetchData(url) {
  let response = await fetch(url);

  let res = await response.json();
  let userTable = document.querySelector(".user-table");

  res.data.forEach((entry) => {
    userTable.innerHTML += `<tr>   <th>${entry.id}</th> <th>${entry.email}</th>  <th>${entry.first_name}</th> <th>${entry.last_name}</th> <th><img src ="${entry.avatar}"/></th>  </tr>`;
  });

  console.log(res.data);
}

fetchData("https://reqres.in/api/users?page=2");
