// fetch data from api

export const getUsersList = async() => {
    let res = await fetch("https://reqres.in/api/users");
    let users = await res.json();

    return users.data;
}