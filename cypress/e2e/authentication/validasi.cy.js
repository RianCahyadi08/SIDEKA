const LoginPage = require("../../support/pages/LoginPage");

describe("SC01 - Validasi Username dan Password (in login by 'role')", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Login dengan username yang valid", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
    });
  });

  it("TC02 - Login dengan invalid username", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login("testing_admin", data.admin.password);
    });
  });

  it("TC03 - Login dengan invalid password", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, "testing_password");
    });
  });
});
