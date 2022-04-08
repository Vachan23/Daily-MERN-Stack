async function fetchData(url) {
  let response = await fetch(url);

  let res = await response.json();
  let userTable = document.querySelector(".user-table");

  res.data.forEach((entry) => {
    userTable.innerHTML += `<tr>   <th>${entry.id}</th> <th>${entry.name}</th>  <th>${entry.color}</th> <th>${entry.year}</th> <th>${entry.pantone_value}</th>  </tr>`;
  });

  console.log(res.data);
}

fetchData("https://reqres.in/api/products");
