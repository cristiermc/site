function validateForm(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === ''){
        alert('Todos os campos são obrigatórios!');
        return false;
    }

    if (name.lenght < 3 || name.lenght >50){
        alert('O nome deve ter entre 3 e 50 caracteres');
        return false;
    }

    if (email.lenght < 5 || email.lenght > 50){
        alert('O email deve ter entre 5 e 50 caracterese');
        return false;
    }

    const emailPatern = /^[a-zA-Z0-9,_-]+@[a-zA-Z]{2,6}$/;
    if(emailPatern.test(email)){
        alert('Por favor insira um e-nail válido');
        return false;
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    if(validateForm()){
        alert('Formulário válido');
    }
})