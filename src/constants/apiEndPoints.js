export const apiEndPoint = {
  GET_ALL_USER : "https://jsonplaceholder.typicode.com/users",
  ADD_NEW_USER: "https://jsonplaceholder.typicode.com/users",
  GET_INDIVIDUAL_USER : (id) => `https://jsonplaceholder.typicode.com/users/${id}`,
  DELETE_USER: (id) => `https://jsonplaceholder.typicode.com/users/${id}`,
  UPDATE_USER : (id) => ` https://jsonplaceholder.typicode.com/users/${id}`
}