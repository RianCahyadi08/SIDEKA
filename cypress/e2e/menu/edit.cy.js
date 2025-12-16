const LoginPage = require("../../support/pages/LoginPage");
const Menupage = require("../../support/pages/Menupage");

describe("SC03 - Edit Data Menu", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Edit Data Menu", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Menupage.accessPage();
      Menupage.update();
    });
  });
});
