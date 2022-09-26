//escopo global


//escobo local
let email = document.getElementById("emailContact");
let nome = document.getElementById("nomeContact");

function validaNome(){
    let txtNome = document.querySelector('.txtErroNome');
    if(nome.value.length <= 3){
        txtNome.innerHTML = 'Nome Invalido';
        txtNome.style.color = 'red';
    }else{
        txtNome.innerHTML = 'Nome Valido';
        txtNome.style.color = 'green';
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('.txtErrorEmail');
    txtEmail.style.margin = '20px 0px'
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'Email Incorreto falta o @';
        txtEmail.style.color = 'red';
    }else if(email.value.indexOf('.com') == -1){
        txtEmail.innerHTML = 'Email Incorreto falta o .com';
        txtEmail.style.color = 'red';
    }else{
        txtEmail.innerHTML = 'Email correto';
        txtEmail.style.color = 'green';
    }
}