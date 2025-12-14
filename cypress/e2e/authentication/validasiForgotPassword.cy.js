const LoginPage = require("../../support/pages/LoginPage");

describe("SC04 - Validasi form Forgot Password", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Validasi field dengan menginput email", () => {
    LoginPage.forgotPassword();
  });
});
