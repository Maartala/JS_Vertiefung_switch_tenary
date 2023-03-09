function check(){

    let result = document.querySelector('#result');
    let age = document.getElementById('inputAge').value > "18" == false;

    age ? result.innerHTML = "minderjährig" : result.innerHTML = "volljährig"
}