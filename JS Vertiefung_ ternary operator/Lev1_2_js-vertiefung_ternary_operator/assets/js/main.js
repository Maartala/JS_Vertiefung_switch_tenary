function check(){

    let result = document.querySelector('#result');

    let password = document.getElementById('password').value.length > 8 == true

    password ?  result.innerHTML = "Welcome to your Account" : result.innerHTML = "Your passwort is short" 
}