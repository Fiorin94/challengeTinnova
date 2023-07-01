let consultButton = '#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(4) > div:nth-child(5) > div:nth-child(2)'
let editButton = '#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(4) > div:nth-child(5) > div:nth-child(3)'
let deleteButton = '#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(4) > div:nth-child(5) > div:nth-child(4)'
let confirmButton = 'button[class="swal-button swal-button--confirm swal-button--danger"]'
let modalMessage = 'body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-text'

class SignupPage {
    
    go() {
        //Acessa e valida a página inicial
        cy.visit('/')
        cy.get('div[class="sc-hKMtZM cKmCnz"]').contains('Boa sorte, e divirta-se no processo, isso é uma experiência. aproveite ao máximo.')
        cy.get('div[class="sc-bczRLJ xufcW"]').click()
    }

    fillForm(user) {
        //Preenche o formulário
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('Adicionar').click()
        cy.get('input[name="name"').type(user.name)
        cy.get('input[name="email"').type(user.email)
        cy.get('input[name="cpf"').type(user.cpf)
        cy.get('input[name="phone"').type(user.phone)
    }

    fillFormIncomplete(user) {
        //Preenche o formulário
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('Adicionar').click()
        cy.get('input[name="email"').type(user.email)
        cy.get('input[name="cpf"').type(user.cpf)
        cy.get('input[name="phone"').type(user.phone)
    }

    submit() {
        //Clica para enviar
        cy.get('div[class="sc-bczRLJ xufcW"]').click()
    }


    close(){
        //Fecha tela
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('Sair').click()
    }

    consult(user){
        //Consulta usuário incluído
        cy.get(consultButton).click()
        cy.get('input[name="name"').should('have.value', user.name)
        cy.get('input[name="email"').should('have.value', user.email)
        cy.get('input[name="cpf"').should('have.value', user.stcpf)
        cy.get('input[name="phone"').should('have.value', user.stphone)
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('VOLTAR').click()
    }

    edit(user){
        //Edita usuário, mudando o nome
        cy.get(editButton).click()
        cy.get('input[name="name"').clear()
        cy.get('input[name="name"').type(user.name2)
    }

    consultAfterEdit(user){
        //Consulta usuário editado
        cy.get(consultButton).click()
        cy.get('input[name="name"').should('have.value', user.name2)
        cy.get('input[name="email"').should('have.value', user.email)
        cy.get('input[name="cpf"').should('have.value', user.stcpf)
        cy.get('input[name="phone"').should('have.value', user.stphone)
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('VOLTAR').click()
    }

    delete(){
        //Deleta usuário incluso
        cy.get(deleteButton).click()
        cy.get(confirmButton).click()
    }

    validateUserRemoval(){
        //Valida que o usuário foi removido
        cy.get('div[class="sc-bczRLJ xufcW"]').click()
        cy.contains('div[class="sc-jqUVSM jkrDKT"]', 'Felipe Fiorin').should('not.exist')
    }

    messageShouldBe(){
        //Valida modal da mensagem de erro
        cy.get(modalMessage).contains('Todos os campos devem ser preenchidos')
        cy.get('button[class="swal-button swal-button--confirm"').click()
    }
}

export default new SignupPage;