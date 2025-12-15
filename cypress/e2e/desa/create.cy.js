const DesaPage = require("../../support/pages/DesaPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC02 - Create New Data Desa", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data Desa", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      DesaPage.accessDesaPage();
      DesaPage.createDesa(0, "KD001", "Name desa");
    });
  });
});
