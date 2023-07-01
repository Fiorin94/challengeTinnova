import { describe } from "mocha";
import SignupPage from "../pages/SignUpPage";
import SignupFactory from "../factories/SignupFactory";

//Essa é a página de teste que será executada pelo Cypress
//As funções foram configuradas em ../pages/SignUpPage que foi importada aqui
//Para que as funções sejam apenas instanciar e deixe  o código do teste mais limpo
//O que cada função faz está específicado no arquivo SignupPage.js na página pages

describe('Signup', function () {

    it('Desafio 1 - Cadastra e consulta novo usuário', function () {
        let user = SignupFactory.user()

        SignupPage.go()
        SignupPage.fillForm(user)
        SignupPage.submit()
        SignupPage.consult(user)
        SignupPage.close()
    })

    it('Desafio 2 - Cadastra, edita e deleta usuário', function () {
        let user = SignupFactory.user()

        SignupPage.go()
        SignupPage.fillForm(user)
        SignupPage.submit()
        SignupPage.edit(user)
        SignupPage.submit()
        SignupPage.consultAfterEdit(user) //Consulta usuário após edição
        SignupPage.delete() //Deleta usuário
        SignupPage.validateUserRemoval() //Valida que o usuário foi removido
    })

    it('Desafio 3-1 - Faltando preencher um campo', function() {

        //Qualquer campo deixado sem preencher retornará a mesma mensagem
        //Teste preenche o formulário faltando o nome
        let user = SignupFactory.user() 
        
        SignupPage.go()
        SignupPage.fillFormIncomplete(user)
        SignupPage.submit()

        SignupPage.messageShouldBe()
    })

    it('Desafio 3-2 - Cadastra usuário com CPF incorreto', function () {
        let user = SignupFactory.user()

        user.cpf = 'asd23661863' //Insere um CPF inválido, porém o sistema deixa passar normalmente

        SignupPage.go()
        SignupPage.fillForm(user)
        SignupPage.submit()
        SignupPage.close()
    })

    it('Desafio 3-3 - Cadastra usuário com e-mail incorreto', function () {
        let user = SignupFactory.user()

        user.email = 'emailincorreto123' //Insere um e-mail inválido, porém mo sistema deixa passar normalmente

        SignupPage.go()
        SignupPage.fillForm(user)
        SignupPage.submit()
        SignupPage.close()
    })

})