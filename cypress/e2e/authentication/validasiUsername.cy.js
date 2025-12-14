const LoginPage = require("../../support/pages/LoginPage");

describe("SC02 - Validasi field username", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Username tidak boleh mengandung spasi di awal", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(" testing_space", data.admin.password);
    });
  });

  it("TC02 - Username harus mandatory, tidak boleh kosong", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(" ", data.admin.password);
    });
  });
});
