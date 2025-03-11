



const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => console.log(users))
}