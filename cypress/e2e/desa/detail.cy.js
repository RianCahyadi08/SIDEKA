const DesaPage = require("../../support/pages/DesaPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC04 - View Detail Data Desa", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Desa", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      DesaPage.accessDesaPage();
      DesaPage.detail();
    });
  });
});
