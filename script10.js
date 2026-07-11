const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

if(name === '' || email === '' || message === ''){
    alert('Todos os campos são obrigatórios!');
    return false;
}

if (name.lenght < 3 || name.lenght >50){
    alert
}