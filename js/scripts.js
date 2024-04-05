//criando uma função que será carregada quando a janela carregar
const init = () => {

const inputEmail = document.querySelector('input[type = "email"]');
const inputPassword = document.querySelector('input[type = "password"]');
const submitButton = document.querySelector('.login-submit');
/*testando o retorno
console.log(inputEmail, inputPassword, submitButton); */
    if(submitButton){
        submitButton.addEventListener('click', (event) =>{
        event.preventDefault();

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {  //cabeçalho do http
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ //convertando os textos no json
                email: inputEmail.value,
                password: inputPassword.value
            })
        })

            .then((response) => {
                return response.json(); //chama a resposta json como uma função
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("Error: " + error);
            }); //tratamento de erro
        })
    };
};



window.onload = init;