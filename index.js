
const message = document.querySelector(`#message`)
let movieTitle

const addMovie = (event) =>{
    event.preventDefault()
    movieTitle = document.createElement(`span`)
    const inputField = document.querySelector(`input`)
    const movie = document.createElement(`li`)
    const list = document.querySelector(`ul`)
    movieTitle.textContent = inputField.value
    list.appendChild(movie)
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)
    movieTitle.addEventListener(`click`, crossOffMovie)
    inputField.value = ``
}

const deleteMovie = (event) =>{
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted`
    revealMessage()
}
const crossOffMovie = event =>{
    event.target.classList.toggle(`checked`)
    if (event.target.classList.contains(`checked`)) {
        message.textContent = `${event.target.textContent} watched`
    } else {
        message.textContent = `${event.target.textContent} forgoten`
    }
    revealMessage()
}

const revealMessage = () =>{
    message.classList.remove(`hide`)
    setTimeout(()=>{
        message.classList.add(`hide`)
    }, 1000)
}

document.querySelector(`form`).addEventListener(`submit`, addMovie)



