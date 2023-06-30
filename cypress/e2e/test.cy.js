import { describe } from "mocha";
import SignupPage from "../pages/SignUpPage";
import SignupFactory from "../factories/SignupFactory";

describe('Signup', function () {

    it('Cadastra e consulta novo usuário', function () {
        let user = SignupFactory.user()

        SignupPage.go()
        SignupPage.fillForm(user)
        SignupPage.submit()
        SignupPage.consult(user)
        SignupPage.close()
    })
    
    //it('Consulta usuário cadastrado', function () {
     //   let user = SignupFactory.user()

      //  SignupPage.go()
      //  SignupPage.consult(user)
  //  })

})