const LoginPage = require("../../support/pages/LoginPage");
const Menupage = require("../../support/pages/Menupage");

describe("SC02 - Create New Data Menu", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Create Data menu", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Menupage.accessPage();
      Menupage.createMenu("name menu", "www.google.com");
    });
  });
});
