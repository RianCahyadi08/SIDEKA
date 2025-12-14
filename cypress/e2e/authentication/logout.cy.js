const LoginPage = require("../../support/pages/LoginPage");

describe("SC05 - Logout", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Log out rules", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      LoginPage.logout();
    });
  });
});
