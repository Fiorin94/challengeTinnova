import { describe } from "mocha";
import SignupPage from "../pages/SignUpPage";
import SignupFactory from "../factories/SignupFactory";

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
        SignupPage.delete()
        SignupPage.validateUserRemoval() //Valida que o usuário foi removido
    })

    it('Desafio 3 - Faltando preencher um campo', function() {

        //Qualquer campo deixado sem preencher retornará a mesma mensagem
        let user = SignupFactory.user() 
        
        SignupPage.go()
        SignupPage.fillFormIncomplete(user)
        SignupPage.submit()

        SignupPage.messageShouldBe()
    })

})