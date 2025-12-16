const LoginPage = require("../../support/pages/LoginPage");
const Menupage = require("../../support/pages/Menupage");

describe("SC04 - View Detail Data Menu", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Detail Data Menu", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Menupage.accessPage();
      Menupage.detail();
    });
  });
});
