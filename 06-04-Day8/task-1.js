// function loadJson(url){
//     return fetch(url).then(response => {
//         if (response.status == 200){
//             return response.json();
//         }
//         else{
//             throw new error(response.status);
//         }
//     });
// }

// loadJson('no-such-user.json').catch(alert);

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404 (4)