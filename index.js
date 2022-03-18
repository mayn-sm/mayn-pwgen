

let characters =["\\","\"","'","~","!","@","#","$","%","^","&","*","(",")","-","+","=","_","{","}","[","]",":",";","'",",",".","?","/","|","1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let pass1 = ""
let pass2 = ""
let pass3 = ""
let pass4 = ""
let slide = document.getElementById("myRange") //

document.getElementById("length").textContent = slide.value //initial slider value

function range(){//output slide value
    document.getElementById("length").textContent = slide.value
}

function generate() {//set element to null
     document.getElementById("pass1").value = ""
     document.getElementById("pass2").value = ""
     document.getElementById("pass3").value = ""
     document.getElementById("pass4").value = ""
     
    randpw()
}

function randpw(){
    for(i = 0; i < slide.value; i++) { 
        pass1 = characters[Math.floor(Math.random() * characters.length)]
            document.getElementById("pass1").value += pass1
        pass2 = characters[Math.floor(Math.random() * characters.length)]
            document.getElementById("pass2").value += pass2
        pass3 = characters[Math.floor(Math.random() * characters.length)]
            document.getElementById("pass3").value += pass3
        pass4 = characters[Math.floor(Math.random() * characters.length)]
            document.getElementById("pass4").value += pass4
                  
    } 
}

function copy1() {
    let copyPw1 = document.getElementById("pass1")
    copyPw1.select();
    copyPw1.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log(copyPw1.value)       
}

function copy2() {
    let copyPw2 = document.getElementById("pass2")
    copyPw2.select();
    copyPw2.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log(copyPw2.value) 
       
}
function copy3() {
    let copyPw3 = document.getElementById("pass3")
    copyPw3.select();
    copyPw3.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log(copyPw3.value) 
       
}
function copy4() {
    let copyPw4 = document.getElementById("pass4")
    copyPw4.select();
    copyPw4.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log(copyPw4.value) 
       
}






