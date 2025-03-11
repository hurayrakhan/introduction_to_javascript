



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

const getUser = () =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(ref => ref.json())
      .then(data => {
            persons(data)
      })
}

function persons (users){
      const containerUsers = document.getElementById("user")
      for(let user of users){
            const li = document.createElement("li")
            li.innerText = user.name;
            containerUsers.appendChild(li)
      }
}