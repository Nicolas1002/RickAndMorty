const api = fetch("https://rickandmortyapi.com/api/character")
.then( api => api.json())
.then(results => {
let container_img = document.querySelector('#container-img')
let main_container = document.querySelector('#main-container')
    results.results.forEach(character => {
        let container_img2 = container_img.cloneNode(true)
        let name = container_img2.querySelector("#name")
        let status = container_img2.querySelector("#status")
        let species =container_img2.querySelector("#species")
        let location = container_img2.querySelector("#location")
        let origin = container_img2.querySelector("#origin")
        let imagenElement = container_img2.querySelector("#imagen")
        
        status.textContent = character.status
        name.textContent = character.name
        species.textContent = character.species
        location.textContent = character.location.name
        origin.textContent = character.origin.name
        imagenElement.setAttribute("src", character.image)
        if(character.status == "Alive"){
            let icon_status = container_img2.querySelector("#icon-status")
            icon_status.style.color = "green"
        }else{
           
        }
        
        main_container.appendChild(container_img2)
        
        
    } )
    container_img.remove()
    document.body.appendChild(main_container)

})
.catch(err => {
    console.log(err)
    console.log("Hubo un error")
})