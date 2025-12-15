const DesaPage = require("../../support/pages/DesaPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC03 - Edit Data Desa", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Edit Data Desa", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      DesaPage.accessDesaPage();
      DesaPage.update();
    });
  });
});
