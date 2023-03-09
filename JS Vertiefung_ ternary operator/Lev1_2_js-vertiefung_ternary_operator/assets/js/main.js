function check(){

    let result = document.querySelector('#result');

    let password = document.getElementById('password').value.length > 8 == true
    password ?  result.innerHTML = "<span class='welcome'> Welcome to your Account </span>" : result.innerHTML = "<span class='short'>Your passwort is short </span>" 
}