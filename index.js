document.addEventListener('DOMContentLoaded', () => {


    document.getElementById('fetchAstronauts').addEventListener("click", () => {
        // debugger
        //document.getElementById('astronauts').innerHTML = "hello"
        let array = []
        fetchAstronauts()
    })
    
    
})

function fetchAstronauts() {
    // debugger
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
        debugger
        
        console.log(data)
    })
}