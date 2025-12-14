const LoginPage = require("../../support/pages/LoginPage");

describe("SC02 - Validasi field password", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Password harus mandatory, tidak boleh kosong", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, " ");
    });
  });
});
