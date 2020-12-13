document.addEventListener('DOMContentLoaded', () => {

    Astronaut.instances = []
    document.getElementById('fetchAstronauts').addEventListener("click", () => {
        
        fetchAstronauts()
        
    })
    
})

function fetchAstronauts() {
    // debugger
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
        //debugger
        data.people.map(function(astronaut) {
            let newAstronaut = new Astronaut(astronaut.craft, astronaut.name)
            Astronaut.instances.push(newAstronaut)
        })
        
        document.getElementById('astronauts').innerHTML = ""

        Astronaut.instances.map(function (astronaut) {
            document.getElementById('astronauts').innerHTML += `<p>${astronaut.name} ${astronaut.craft}</p>`
        })
        
        
    })
}