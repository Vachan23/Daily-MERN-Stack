//all api calls
// api = https://reqres.in

//get users list from api and return array of objects(users)
export const getUsersList = async () => {
  let res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });

  let list = await res.json();

  return list.data;
};

//get a single user details and returns user details as an object
export const getUserDetails = async (userId) => {
  let res = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: "GET",
  });

  let user = await res.json();

  return user.data;
};

//updates user details of a specific userId and returns user details after successful update else alerts(failure)
export const updateUserDetails = async (data = {}, userId) => {
  let res = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let user = await res.json();

  if (res.status === 200) {
    console.log(user);
    return user;
  } else alert("update failed");
};

//create request for new user and returns user if successful or else alerts(failure)
export const createNewUser = async (data = {}) => {
  let res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let user = await res.json();

  if (res.status === 201) {
    console.log(user);
    return user;
  } else alert("user creation failed");
};

//delete request of specified userId and returns true if successful or else false
export const deleteUser = async (userId) => {
  let res = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: "DELETE",
  });

  if (res.status === 204) return true;
  else return false;
};
