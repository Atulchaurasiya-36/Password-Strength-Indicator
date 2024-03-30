const pass=document.querySelector("#pass");
let message=document.querySelector("#msg");
let button=document.querySelector("button")

button.addEventListener("click",()=>{
    location.reload()
})

pass.addEventListener("input",()=>{
    if(pass.value.length>0){
        message.style.display="block"
    }
    else{
        message.style.display="none"
    }
    if(pass.value.length<4){
        message.innerHTML= "password  strength is Weak"
        pass.style.borderColor="#ff5925"
        message.style.color="#ff5925"
    }
    else if(pass.value.length>=4 && pass.value.length<8){
            message.innerHTML= "password strngth is Medium"
            pass.style.borderColor=""
            message.style.color="yellow"
    }
    else if(pass.value.length>8){
        message.innerHTML= "password  strength is Strong"
            pass.style.borderColor="#26d730"
            message.style.color="#26d730"
    }
})