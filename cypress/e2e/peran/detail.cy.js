const LoginPage = require("../../support/pages/LoginPage");
const PeranPage = require("../../support/pages/PeranPage");

describe("SC04 - View Detail Data Peran", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Peran", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      PeranPage.accessPage();
      PeranPage.detail();
    });
  });
});
