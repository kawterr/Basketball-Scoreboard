let num1 = 0
let num2 = 0

let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

function addoneh(){
    num1 += 1
    home.textContent = num1    
}


function addtwoh(){
    num1 += 2
    home.textContent = num1    
}


function addthreeh(){
    num1 += 3
    home.textContent = num1    
}

function addoneg(){
    num2 += 1
    guest.textContent = num2  
}

function addtwog(){
    num2 += 2
    guest.textContent = num2   
}

function addthreeg(){
    num2 += 3
    guest.textContent = num2
}
