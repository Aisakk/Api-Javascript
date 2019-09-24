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
            <h3>Hi my Name is: <br></h3>
            <h4>${data.results[0].name.first}</h4>
        `
    })
    
}

button.addEventListener('click', pullPerson)

