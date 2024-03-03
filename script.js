let password =document.getElementById('password');
let togglepass=document.getElementById('toggle');

function showHide(){
    if(password.type==='password'){
        password.setAttribute('type','text');
        togglepass.classList.add('hide');
    }
    else{
        password.setAttribute('type','password')
        togglepass.classList.remove('hide');
    }
}