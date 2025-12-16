const LoginPage = require("../../support/pages/LoginPage");
const SistemPengelolaanPage = require("../../support/pages/SistemPengelolaanPage");

describe("SC02 - Edit Data ", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Edit Data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      SistemPengelolaanPage.accessPage();
      SistemPengelolaanPage.update();
    });
  });
});
