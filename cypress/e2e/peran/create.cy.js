const LoginPage = require("../../support/pages/LoginPage");
const PeranPage = require("../../support/pages/PeranPage");

describe("SC02 - Create New Data Peran", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data Peran", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      PeranPage.accessPage();
      PeranPage.createPeran("name peran", "path home");
    });
  });
});
