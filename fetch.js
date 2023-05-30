const url = "https://jsonplaceholder.typicode.com/todos";

// async function getTodo() {
//     let response = await fetch(url);
  
//     return await response.json()
//   }
  
//   getTodo().then(response => console.log(response));

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));

