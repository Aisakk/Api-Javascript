console.log('correcto')

let button = document.querySelector('#button')

const pullPerson = () =>{
    let container = document.querySelector('#container')

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    //.then(res => console.log(res.results))
    .then(data =>{
        return container.innerHTML = `
            <img src="${data.results[0].picture.large}" alt="picture" class="rounded-circle">
            <h3>Hi my name complete is: <br></h3>
            <h4>${data.results[0].name.first} ${data.results[0].name.last} </h4>
            <h3>My gender: <br></hr>
            <h4>${data.results[0].gender}</h4>
            <h3>Email: <br></hr>
            <h4>${data.results[0].email}</h4>
            <h3>My Location: <br></hr>
            <h4>${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.street}</h4>
        `
    })
    
}

button.addEventListener('click', pullPerson)

