const LoginPage = require("../../support/pages/LoginPage");
const Menupage = require("../../support/pages/Menupage");

describe("SC05 - Hapus Data ", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Hapus Data ", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      Menupage.accessPage();
      Menupage.search("name menu");
      Menupage.delete();
    });
  });
});
