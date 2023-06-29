class SignupPage {

    go() {
        cy.visit('/')

        cy.get('div[class="sc-bczRLJ xufcW"]').click
    }
}

export default new SignupPage;