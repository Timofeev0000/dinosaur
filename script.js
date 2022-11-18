const   
        dino = document.getElementById('dino')
        cactus = document.getElementById('cactus')

document.addEventListener('keydown', function(event){
    jump()
})

function jump() {
    if(dino.classList != 'jump'){
        dino.classList.add('jump')
    }
    setTimeout( function(){
        dino.classList.remove('jump')
    }, 300)
}


let isAlive = setInterval(function() {
    let dionTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    
    if(cactusLeft < 50 && cactusLeft > 0 && dionTop >= 140) {
        alert('GAME OVERхехехе')
        // setTimeout(function(){
        //     location.reload()
        // }, 1000)
    }
}, 10)

