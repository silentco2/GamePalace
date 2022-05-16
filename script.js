const pacman_orbit = document.getElementById('pacman-orbit')
const list  = document.querySelector("ul")
const form = document.querySelector('form')
function activate_pacman(){
    pacman_orbit.style.opacity = 1
    pacman_orbit.style.setProperty('--pacman-animation', 'active')
    setTimeout(function(){form.style.setProperty('--form-animation', 'active')},11000)
    list.style.setProperty('--orbit-play-state', 'paused')
    setInterval(function(){
        eaten(1)
        eaten(2)
        eaten(3)
        eaten(4)
    },900)
    
}
function eaten(n) {
    const elem1 = list.querySelector(`li:nth-child(${n})`).getBoundingClientRect();
    const elem2 = document.getElementById('pacman').getBoundingClientRect();
  
    if(!(elem1.top > elem2.bottom || elem1.right < elem2.left || elem1.bottom < elem2.top || elem1.left > elem2.right)){
        setTimeout(function(){list.querySelector(`li:nth-child(${n})`).style.display = 'none'},900)
    }
  }
