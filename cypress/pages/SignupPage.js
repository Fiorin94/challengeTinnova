class SignupPage {

    go() {
        cy.visit('/')
        //Valida a página inicial
        cy.get('div[class="sc-hKMtZM cKmCnz"]').contains('Boa sorte, e divirta-se no processo, isso é uma experiência. aproveite ao máximo.')
        cy.get('div[class="sc-bczRLJ xufcW"]').click()
    }

    fillForm(user) {
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('Adicionar').click()
        cy.get('input[name="name"').type(user.name)
        cy.get('input[name="email"').type(user.email)
        cy.get('input[name="cpf"').type(user.cpf)
        cy.get('input[name="phone"').type(user.phone)
    }

    submit() {
        cy.get('div[class="sc-bczRLJ xufcW"]').click()
    }

    close(){
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('Sair').click()
    }

    consult(user){
        cy.get('#root > div > div.sc-jqUVSM.jkrDKT > div.sc-jSMfEi.iuhvyf > div:nth-child(4) > div:nth-child(5) > div:nth-child(2)').click()
        cy.get('input[name="name"').should('have.text', user.name)
        cy.get('input[name="email"').should('have.text', user.email)
        cy.get('input[name="cpf"').should('have.text', user.cpf)
        cy.get('input[name="phone"').should('have.text', user.phone)
        cy.get('div[class="sc-bczRLJ xufcW"]').contains('VOLTAR').click()
    }
}

export default new SignupPage;