const KecamatanPage = require("../../support/pages/KecamatanPage");
const LoginPage = require("../../support/pages/LoginPage");

describe("SC03 - Edit Data Kecamatan", () => {
  const env = Cypress.env("baseUrl");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Edit Data Kecamatan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.admin.name, data.admin.password);
      KecamatanPage.accessPage();
      KecamatanPage.update();
    });
  });
});
