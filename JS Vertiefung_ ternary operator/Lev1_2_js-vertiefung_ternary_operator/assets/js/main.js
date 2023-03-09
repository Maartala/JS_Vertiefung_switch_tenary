function check(){

    let result = document.querySelector('#result');

    let password = document.getElementById('password').value.length > 8 == true
    password ?  result.innerHTML = "<span class='welcome'> Welcome to your Account </span>" : result.innerHTML = "<span class='short'>Your passwort is short </span>" 

}


    // password = document.getElementById('password').value.length > 8 == true

    // password ?  result.style.color = 'green' : result.innerHTML = result.style.color = 'red'

    // let res = income >= outcome ? "green" : "red";
    // document.getElementById("currency").style.color = res;
