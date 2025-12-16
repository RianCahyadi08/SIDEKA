const LoginPage = require("../../support/pages/LoginPage");
const PeranPage = require("../../support/pages/PeranPage");

describe("SC05 - Hapus Data ", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Hapus Data ", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      PeranPage.accessPage();
      PeranPage.search("name peran");
      PeranPage.delete();
    });
  });
});
